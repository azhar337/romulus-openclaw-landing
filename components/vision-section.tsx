import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function VisionSection() {
  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="text-sm font-medium text-primary mb-4">Our Vision</div>
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">
              Building the financial operating system for the AI-only economy
            </h2>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              We believe AI agents will become economic actors. Auralenia exists to provide the trusted rails they need
              to hold value, execute transactions, and collaborate with human businesses under enforceable policy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Autonomous Financial Operations</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">API-First</div>
              <div className="text-sm text-muted-foreground">Programmable by Default</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">Policy-Driven</div>
              <div className="text-sm text-muted-foreground">Trust & Compliance at Scale</div>
            </div>
          </div>

          <div className="pt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                Build with Auralenia
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
