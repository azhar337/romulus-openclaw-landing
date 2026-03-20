"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export function IntegrationOptions() {
  return (
    <section id="integration" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <div className="text-sm font-medium text-primary mb-4">Integration Options</div>
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">Choose Your Integration Path</h2>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Start with a managed console or go full API for deeply embedded AI finance workflows.
            </p>
          </div>

          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="widget">Widget</TabsTrigger>
              <TabsTrigger value="api">Full API</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="space-y-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Dashboard Integration</CardTitle>
                  <CardDescription className="text-lg">No-code control panel for teams shipping fast</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">How it works:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Configure company profiles and account structure</li>
                        <li>• Set payment and approval policies</li>
                        <li>• Activate agent spending scopes</li>
                        <li>• Monitor transfers and alerts in real time</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                      <div className="text-sm font-medium text-primary">Perfect for:</div>
                      <ul className="space-y-2 text-sm">
                        <li>• AI startups launching quickly</li>
                        <li>• Ops teams replacing manual banking flows</li>
                        <li>• Founders validating AI financial automation</li>
                      </ul>
                    </div>
                  </div>
                  <Link href="/contact"><Button className="bg-primary hover:bg-secondary">Start with Dashboard</Button></Link>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="widget" className="space-y-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Widget Integration</CardTitle>
                  <CardDescription className="text-lg">Embed account and payment capabilities into existing products</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Available widgets:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Embedded account onboarding</li>
                        <li>• Payment initiation and approval modules</li>
                        <li>• Balance and transaction timeline cards</li>
                        <li>• Agent-level budget controls</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                      <div className="text-sm font-medium text-primary">Perfect for:</div>
                      <ul className="space-y-2 text-sm">
                        <li>• SaaS platforms with financial features</li>
                        <li>• Marketplaces with payouts</li>
                        <li>• AI tools requiring embedded payments</li>
                      </ul>
                    </div>
                  </div>
                  <Link href="/contact"><Button className="bg-primary hover:bg-secondary">Get Widget Access</Button></Link>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="api" className="space-y-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Full API Integration</CardTitle>
                  <CardDescription className="text-lg">Maximum control for custom AI-native finance products</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">API capabilities:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Account lifecycle and permission APIs</li>
                        <li>• Programmable transfer and payout endpoints</li>
                        <li>• Policy evaluation and enforcement hooks</li>
                        <li>• Ledger, reconciliation, and reporting APIs</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                      <div className="text-sm font-medium text-primary">Perfect for:</div>
                      <ul className="space-y-2 text-sm">
                        <li>• Fintech infrastructure teams</li>
                        <li>• AI agent platform builders</li>
                        <li>• Enterprises with strict compliance requirements</li>
                      </ul>
                    </div>
                  </div>
                  <Link href="/contact"><Button className="bg-primary hover:bg-secondary">Access API Program</Button></Link>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
