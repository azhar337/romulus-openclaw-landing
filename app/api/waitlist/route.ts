import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { promises as fs } from "fs";
import path from "path";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(190),
  role: z.string().min(2).max(40),
});

const fallbackFile = path.join("/tmp", "romulus-openclaw-waitlist.jsonl");

async function fallbackStore(data: z.infer<typeof schema>) {
  const row = JSON.stringify({ ...data, source: "fallback-file", createdAt: new Date().toISOString() });
  await fs.appendFile(fallbackFile, `${row}\n`, "utf8");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form payload" }, { status: 400 });
    }

    const { email, name, role } = parsed.data;

    try {
      await prisma.waitlistLead.upsert({
        where: { email },
        update: { name, role },
        create: { email, name, role },
      });

      return NextResponse.json({
        ok: true,
        storage: "prisma",
        message: "You’re in. We’ll notify you before public launch.",
      });
    } catch (dbError) {
      console.error("Prisma waitlist write failed, using fallback file:", dbError);
      await fallbackStore(parsed.data);
      return NextResponse.json({
        ok: true,
        storage: "fallback-file",
        message: "You’re in. We captured your request via fallback storage.",
      });
    }
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json({ error: "Unable to process request" }, { status: 500 });
  }
}
