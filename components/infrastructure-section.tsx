import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function InfrastructureSection() {
  const infrastructure = [
    {
      icon: "🏗️",
      title: "Account Orchestration Layer",
      description:
        "Programmatically create and manage parent/child accounts for agents, teams, and products.",
    },
    {
      icon: "🧾",
      title: "Unified Ledger Core",
      description:
        "Single-source ledgering for balances, movements, and reconciliation across multiple payment rails.",
    },
    {
      icon: "🛡️",
      title: "Policy & Controls Engine",
      description:
        "Define transaction policies, limits, approvals, and risk checks before autonomous execution.",
    },
    {
      icon: "🔗",
      title: "Payment Rails Abstraction",
      description:
        "Connect to fiat and digital transfer networks through one API surface for send/receive/settle flows.",
    },
    {
      icon: "🔍",
      title: "Monitoring & Alerting",
      description: "Real-time observability and alerting for anomalies, failed transfers, and policy violations.",
    },
    {
      icon: "📊",
      title: "Audit & Reporting APIs",
      description: "Generate regulator- and finance-team-ready records with full transaction lineage.",
    },
  ]

  return (
    <section id="infrastructure" className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-primary mb-4">Technical Infrastructure</div>
          <h2 className="text-3xl lg:text-5xl font-bold text-balance mb-6">
            Infrastructure-as-a-Service for AI Financial Operations
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Build on battle-tested financial primitives so your AI products can execute payments and treasury workflows
            safely at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infrastructure.map((item, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl mb-4">
                  {item.icon}
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
