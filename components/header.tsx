import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image src="/auralenia-logo.png" alt="Auralenia" width={32} height={32} className="h-8 w-8" />
          <span className="text-xl font-bold text-foreground">Auralenia</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</a>
          <a href="/#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="/#infrastructure" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Infrastructure</a>
          <a href="/#integration" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Integrations</a>
          <a href="/#vision" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Vision</a>
          <a href="/whitepaper" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Whitepaper</a>
          <a href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </nav>

        <Link href="/contact">
          <Button className="bg-primary hover:bg-secondary text-primary-foreground">Get Infrastructure Access</Button>
        </Link>
      </div>
    </header>
  );
}
