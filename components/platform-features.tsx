import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PlatformFeatures() {
  const features = [
    {
      icon: "🏦",
      title: "AI-Native Accounts",
      description:
        "Create programmable business accounts and sub-accounts for AI workers, teams, and autonomous workflows.",
    },
    {
      icon: "⚙️",
      title: "Programmable Payments",
      description:
        "Rule-driven payouts, vendor payments, payroll-like disbursements, and conditional transfers executed via API.",
    },
    {
      icon: "🔐",
      title: "Policy & Risk Engine",
      description:
        "Define spend limits, merchant/category controls, velocity rules, and approvals for AI-initiated transactions.",
    },
    {
      icon: "🌍",
      title: "Global Money Rails",
      description: "Move value across fiat and digital rails with unified ledgering and reconciliation.",
    },
    {
      icon: "📚",
      title: "Ledger & Audit Trail",
      description: "Immutable transaction trails, explainable decisions, and compliance-ready records by default.",
    },
    {
      icon: "🧩",
      title: "Developer-First APIs",
      description: "Integrate quickly with SDK-friendly endpoints for account lifecycle, payment orchestration, and reporting.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-primary mb-4">Platform Capabilities</div>
          <h2 className="text-3xl lg:text-5xl font-bold text-balance mb-6">
            Financial Infrastructure Built for AI-Driven Companies
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Launch AI-friendly finance operations without stitching fragmented providers. Auralenia gives you one core
            system for programmable money movement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
