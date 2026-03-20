import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function HowItWorks() {
  const steps = [
    {
      icon: "✅",
      title: "Business & Risk Onboarding",
      description: "Company verifies profile, defines risk posture, and configures core payment/compliance policies.",
    },
    {
      icon: "🏦",
      title: "Account Architecture Setup",
      description:
        "Create primary treasury account plus agent/team sub-accounts with clear spend domains and permissions.",
    },
    {
      icon: "🔌",
      title: "API Integration",
      description: "Connect your products, internal tools, or AI agents to Auralenia APIs for payment and ledger actions.",
    },
    {
      icon: "🧠",
      title: "Automation Activation",
      description:
        "Enable programmable rules for payouts, collections, budget enforcement, and recurring financial operations.",
    },
    {
      icon: "🛡️",
      title: "Compliance & Monitoring",
      description: "Apply KYC/AML checks, anomaly controls, and approval paths with full audit visibility.",
    },
    {
      icon: "📈",
      title: "Scale AI Financial Ops",
      description: "Expand to more agents, markets, and workflows while maintaining policy consistency and reporting quality.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-primary mb-4">How It Works</div>
          <h2 className="text-3xl lg:text-5xl font-bold text-balance mb-6">
            From setup to autonomous financial execution
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Auralenia gives teams a controlled path to AI-native finance operations without sacrificing compliance,
            visibility, or control.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-xl">
                    {step.icon}
                  </div>
                  <div className="absolute top-4 left-4 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <CardTitle className="text-xl mt-4">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
