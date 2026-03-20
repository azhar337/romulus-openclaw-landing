import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100 py-20 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Banking & Financial Rails for the <span className="text-primary">AI Economy</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                Auralenia provides AI-native accounts, programmable payments, treasury automation,
                and compliance-aware money movement infrastructure for autonomous businesses and agents.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                  Get Early Access
                  <span className="ml-2">→</span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Explore API Infrastructure
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">AI Finance Console</h3>
                <div className="text-sm text-muted-foreground">Live Infrastructure</div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    🧠
                  </div>
                  <div>
                    <div className="font-medium">Agent Wallet Orchestration</div>
                    <div className="text-sm text-muted-foreground">Policy-aware spend controls across agents</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    💸
                  </div>
                  <div>
                    <div className="font-medium">Programmable Payout Rails</div>
                    <div className="text-sm text-muted-foreground">Automated settlement, invoices, and disbursements</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                  <div className="h-8 w-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    🛡️
                  </div>
                  <div>
                    <div className="font-medium">Compliance Guardrails</div>
                    <div className="text-sm text-muted-foreground">AML/KYC policy engine and audit-ready records</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Infrastructure Uptime</span>
                  <span className="font-semibold text-primary">99.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
