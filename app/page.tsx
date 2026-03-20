"use client";

import { FormEvent, ReactNode, useState } from "react";
import { CheckCircle2, Settings2, LayoutDashboard, Store, Wrench } from "lucide-react";

type SubmitState = "idle" | "loading" | "success" | "error";

export default function RomulusOpenClawLanding() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("founder");
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, role }),
      });

      const data = await res.json();
      if (!res.ok) {
        setState("error");
        setMessage(data?.error || "Failed to join waitlist. Please try again.");
        return;
      }

      setState("success");
      setMessage(data?.message || "You're on the list.");
      setEmail("");
      setName("");
      setRole("founder");
    } catch {
      setState("error");
      setMessage("Network error. Please retry in a moment.");
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs tracking-wide text-zinc-300">
          ROMULUS OPENCLOW · DONE-FOR-YOU AUTOMATION
        </p>

        <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
          OpenClaw for non-technical teams.
          <br />
          <span className="text-emerald-400">Configured, managed, and production-ready.</span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-zinc-300">
          Romulus OpenClaw is OpenClaw-as-a-service. We set up your stack, run it for you,
          and give you one dashboard to control agents safely without hiring a full automation team.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<Settings2 className="h-5 w-5" />}
            title="Done-for-you setup"
            text="We install and configure your OpenClaw environment, tools, and guardrails in days."
          />
          <FeatureCard
            icon={<LayoutDashboard className="h-5 w-5" />}
            title="Dashboard control"
            text="Track runs, approvals, logs, and outcomes in one clear operator dashboard."
          />
          <FeatureCard
            icon={<Store className="h-5 w-5" />}
            title="Skills marketplace"
            text="Browse, buy, and configure ready-made skills matched to your workflows."
          />
          <FeatureCard
            icon={<Wrench className="h-5 w-5" />}
            title="Custom + maintenance"
            text="Add custom skills and monthly maintenance so your automations stay healthy."
          />
        </div>

        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Join the waitlist</h2>
          <p className="mt-2 text-zinc-300">
            Get early access, onboarding priority, and founding-customer pricing.
          </p>

          <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <select
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-emerald-400"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="founder">Founder</option>
              <option value="operator">Operator</option>
              <option value="developer">Developer</option>
              <option value="other">Other</option>
            </select>

            <button
              type="submit"
              disabled={state === "loading"}
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 font-medium text-zinc-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {state === "loading" ? "Submitting..." : "Join waitlist"}
            </button>

            {state === "success" && (
              <p className="inline-flex items-center gap-2 text-sm text-emerald-300">
                <CheckCircle2 className="h-4 w-4" /> {message}
              </p>
            )}
            {state === "error" && <p className="text-sm text-red-300">{message}</p>}
          </form>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <article className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
      <div className="mb-3 inline-flex rounded-md border border-zinc-700 bg-zinc-950 p-2 text-emerald-300">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-300">{text}</p>
    </article>
  );
}
