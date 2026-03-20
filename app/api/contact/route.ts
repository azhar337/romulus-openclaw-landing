import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Save to database (assumes client-side validation)
    const contact = await prisma.contact.create({
      data: body,
    });

    return NextResponse.json(
      { message: "Contact form submitted successfully", id: contact.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
