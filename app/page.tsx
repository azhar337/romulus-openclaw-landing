"use client";

import { FormEvent, ReactNode, useState } from "react";
import {
  CheckCircle2,
  LayoutDashboard,
  Settings2,
  ShieldCheck,
  Store,
  Wrench,
  ArrowRight,
  Sparkles,
} from "lucide-react";

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
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.16),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(110,231,183,0.12),transparent_30%)]" />

      <section className="relative mx-auto max-w-6xl px-6 pb-14 pt-16 md:pb-20 md:pt-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700/70 bg-zinc-900/70 px-4 py-1.5 text-xs tracking-[0.16em] text-zinc-300 uppercase backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
          Romulus OpenClaw · Done-for-you automation
        </div>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              OpenClaw for non-technical teams.
              <span className="mt-2 block text-emerald-300">Configured, managed, and production-ready.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">
              Romulus OpenClaw is OpenClaw-as-a-service. We set up your stack, run it for you,
              and give you one dashboard to control agents safely without hiring a full automation team.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-300"
              >
                Join waitlist
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/70 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900"
              >
                See how it works
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <Metric value="Days" label="to launch a managed OpenClaw stack" />
              <Metric value="1 Dashboard" label="for runs, approvals, logs, and outcomes" />
              <Metric value="Ongoing" label="maintenance and reliability support" />
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-5 shadow-2xl shadow-emerald-900/20 backdrop-blur md:p-6">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-400">Operator preview</p>
            <div className="mt-4 space-y-3">
              <MiniRow title="Environment setup" subtitle="Infrastructure, tools, and guardrails configured" tone="emerald" />
              <MiniRow title="Skill deployment" subtitle="Marketplace + custom skills installed by workflow" tone="cyan" />
              <MiniRow title="Run oversight" subtitle="Approval gates, audit logs, and operator controls" tone="violet" />
            </div>
            <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-950/70 p-4">
              <p className="text-sm text-zinc-300">Best for founders and lean operators who want outcomes, not tooling chaos.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="relative mx-auto max-w-6xl px-6 py-8 md:py-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-10 md:py-14">
        <div className="grid gap-4 md:grid-cols-3">
          <PointCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Predictable delivery"
            text="Move from idea to production automation without building an internal infra team first."
          />
          <PointCard
            icon={<LayoutDashboard className="h-5 w-5" />}
            title="Operational clarity"
            text="Clear hierarchy and workflows for operators so decisions happen quickly and safely."
          />
          <PointCard
            icon={<Settings2 className="h-5 w-5" />}
            title="Lower maintenance load"
            text="Romulus handles platform upkeep while your team focuses on customer-facing outcomes."
          />
        </div>
      </section>

      <section id="waitlist" className="relative mx-auto max-w-6xl px-6 pb-20 pt-4 md:pb-24">
        <div className="rounded-2xl border border-zinc-700/80 bg-zinc-900/70 p-6 shadow-xl shadow-emerald-950/20 backdrop-blur md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Join the waitlist</h2>
          <p className="mt-2 max-w-2xl text-zinc-300">
            Get early access, onboarding priority, and founding-customer pricing.
          </p>

          <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3.5 py-2.5 text-sm outline-none transition focus:border-emerald-400"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3.5 py-2.5 text-sm outline-none transition focus:border-emerald-400"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <select
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3.5 py-2.5 text-sm outline-none transition focus:border-emerald-400"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="founder">Founder</option>
              <option value="operator">Operator</option>
              <option value="developer">Developer</option>
              <option value="other">Other</option>
            </select>

            <div className="grid gap-3 md:grid-cols-2">
              <button
                type="submit"
                disabled={state === "loading"}
                className="inline-flex items-center justify-center rounded-lg bg-emerald-400 px-4 py-2.5 font-semibold text-zinc-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {state === "loading" ? "Submitting..." : "Join waitlist"}
              </button>

              <a
                href="https://wa.me/60105424256?text=Hi%20Romulus%20OpenClaw%2C%20I%20want%20to%20join%20the%20waitlist"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2.5 font-semibold text-zinc-100 transition hover:border-zinc-500"
              >
                Join via WhatsApp
              </a>
            </div>

            <p className="text-xs text-zinc-400">You can join via database form above, or WhatsApp if you prefer a direct chat.</p>

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

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
      <p className="text-sm font-semibold text-emerald-300">{value}</p>
      <p className="mt-1 text-sm leading-relaxed text-zinc-300">{label}</p>
    </div>
  );
}

function MiniRow({
  title,
  subtitle,
  tone,
}: {
  title: string;
  subtitle: string;
  tone: "emerald" | "cyan" | "violet";
}) {
  const toneClass = {
    emerald: "bg-emerald-400/20 text-emerald-300",
    cyan: "bg-cyan-400/20 text-cyan-300",
    violet: "bg-violet-400/20 text-violet-300",
  }[tone];

  return (
    <div className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-950/70 p-3.5">
      <div className={`mt-0.5 h-2.5 w-2.5 rounded-full ${toneClass}`} />
      <div>
        <p className="text-sm font-medium text-zinc-100">{title}</p>
        <p className="mt-1 text-xs leading-relaxed text-zinc-400">{subtitle}</p>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <article className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:-translate-y-0.5 hover:border-zinc-700">
      <div className="mb-3 inline-flex rounded-md border border-zinc-700 bg-zinc-950 p-2 text-emerald-300">{icon}</div>
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-300">{text}</p>
    </article>
  );
}

function PointCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <article className="rounded-xl border border-zinc-800/90 bg-zinc-900/45 p-5">
      <div className="mb-3 inline-flex rounded-md border border-zinc-700 bg-zinc-950 p-2 text-emerald-300">{icon}</div>
      <h3 className="text-base font-semibold text-zinc-100">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-300">{text}</p>
    </article>
  );
}
