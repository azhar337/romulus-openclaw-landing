import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function BenefitsSection() {
  const benefits = [
    {
      icon: "⚡",
      title: "Faster Financial Execution",
      description:
        "Automate repetitive money ops so AI-driven teams can execute faster without manual banking bottlenecks.",
    },
    {
      icon: "🌍",
      title: "Cross-Rail Flexibility",
      description:
        "Operate across fiat and digital rails from one control plane, reducing integration complexity.",
    },
    {
      icon: "💰",
      title: "Lower Operational Overhead",
      description:
        "Replace fragmented payment tooling with one programmable infrastructure stack.",
    },
    {
      icon: "👁️",
      title: "Real-Time Visibility",
      description:
        "Track account activity, agent-level spending, and settlement outcomes with unified reporting.",
    },
    {
      icon: "🧱",
      title: "Built-in Compliance",
      description:
        "Embed risk controls, policy checks, and audit history directly into payment workflows.",
    },
    {
      icon: "⚙️",
      title: "Modular Integration Paths",
      description: "Adopt via dashboard, embeddable widgets, or full API integration depending on your product maturity.",
    },
  ]

  return (
    <section id="partners" className="py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-primary mb-4">Why Auralenia</div>
          <h2 className="text-3xl lg:text-5xl font-bold text-balance mb-6">
            Financial infrastructure designed for AI-native operations
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Whether you are an AI startup, fintech builder, or automation-first enterprise, Auralenia helps you operate
            money flows with speed, control, and confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl mb-4">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
