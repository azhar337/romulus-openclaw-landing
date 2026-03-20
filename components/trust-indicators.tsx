export function TrustIndicators() {
  const companies = ["AI Startups", "Fintech Teams", "Automation Ops", "SaaS Platforms", "Marketplaces", "Enterprise Builders"]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-muted-foreground mb-8">
            Infrastructure trusted by teams building AI-native financial operations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <div key={index} className="text-muted-foreground font-medium text-sm">
                {company}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center space-y-2">
            <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center text-xl mx-auto">🏦</div>
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm text-muted-foreground">Autonomous Finance Ops</div>
          </div>
          <div className="text-center space-y-2">
            <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center text-xl mx-auto">🔌</div>
            <div className="text-2xl font-bold">API-First</div>
            <div className="text-sm text-muted-foreground">Programmable by Design</div>
          </div>
          <div className="text-center space-y-2">
            <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center text-xl mx-auto">🛡️</div>
            <div className="text-2xl font-bold">Policy</div>
            <div className="text-sm text-muted-foreground">Built-in Risk Controls</div>
          </div>
          <div className="text-center space-y-2">
            <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center text-xl mx-auto">📈</div>
            <div className="text-2xl font-bold">99.9%</div>
            <div className="text-sm text-muted-foreground">Infrastructure Uptime</div>
          </div>
        </div>
      </div>
    </section>
  )
}
