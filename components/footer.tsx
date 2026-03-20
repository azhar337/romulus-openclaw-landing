import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to power AI-native financial operations?</h2>
            <p className="text-lg text-background/80 text-pretty">
              Launch programmable accounts, payments, and policy automation with Auralenia infrastructure.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact"><Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">Book a Demo <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link href="/contact"><Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10 bg-transparent">Speak With Sales</Button></Link>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/auralenia-logo.png" alt="Auralenia" width={24} height={24} className="h-6 w-6" />
              <span className="text-lg font-bold">Auralenia</span>
            </div>
            <p className="text-sm text-background/70">AI-native banking and financial infrastructure.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Platform</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#how-it-works" className="hover:text-background transition-colors">How It Works</a></li>
              <li><a href="#infrastructure" className="hover:text-background transition-colors">Infrastructure</a></li>
              <li><a href="#integration" className="hover:text-background transition-colors">Integrations</a></li>
              <li><a href="#vision" className="hover:text-background transition-colors">Vision</a></li>
              <li><a href="/whitepaper" className="hover:text-background transition-colors">Whitepaper</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Use Cases</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">AI Agent Treasury</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Automated Payouts</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Policy-Controlled Spend</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Cross-Rail Settlement</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="https://wa.me/+60105424256" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-background transition-colors" aria-label="Chat on WhatsApp">
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background/70">© 2026 Auralenia. All rights reserved.</div>
            <div className="flex space-x-6 text-sm text-background/70">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-background transition-colors">Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
