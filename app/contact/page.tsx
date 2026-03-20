"use client";

import type React from "react";

import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MessageCircle } from "lucide-react";

export default function ContactPage() {
  const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone number is required"),
    company: z.string().optional().or(z.literal("")),
    inquiryType: z.string().min(1, "Please select an inquiry type"),
    message: z.string().optional().or(z.literal("")),
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");
    setFieldErrors({});

    try {
      const validation = contactSchema.safeParse(formData);
      if (!validation.success) {
        const errors: Record<string, string> = {};
        for (const issue of validation.error.issues) {
          const path = issue.path[0] as string;
          if (path && !errors[path]) errors[path] = issue.message;
        }
        setFieldErrors(errors);
        setSubmitStatus("error");
        setErrorMessage("Please fix the errors below.");
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validation.data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          inquiryType: "",
          message: "",
        });
        setFieldErrors({});
      } else {
        const errorData = await response.json();
        setSubmitStatus("error");
        setErrorMessage(
          errorData.error || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Ready to build AI-native financial operations? Let's discuss how Auralenia can power your accounts, payments, and compliance stack.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                      <p className="text-green-800">
                        Thank you! Your message has been sent successfully.
                        We'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-red-800">{errorMessage}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                      />
                      {fieldErrors.name && (
                        <p className="text-sm text-red-600 mt-1">
                          {fieldErrors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        required
                      />
                      {fieldErrors.email && (
                        <p className="text-sm text-red-600 mt-1">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                      {fieldErrors.phone && (
                        <p className="text-sm text-red-600 mt-1">
                          {fieldErrors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                      />
                      {fieldErrors.company && (
                        <p className="text-sm text-red-600 mt-1">
                          {fieldErrors.company}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="inquiryType"
                        className="block text-sm font-medium text-foreground mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        required>
                        <option value="">Select your inquiry type</option>
                        <option value="tokenization">
                          AI-Native Finance Infrastructure
                        </option>
                        <option value="infrastructure">
                          Payment Infrastructure Access
                        </option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="integration">API Integration</option>
                        <option value="join-us">Join Us</option>
                        <option value="other">Other</option>
                      </select>
                      {fieldErrors.inquiryType && (
                        <p className="text-sm text-red-600 mt-1">
                          {fieldErrors.inquiryType}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project and how we can help..."
                        rows={4}
                      />
                      {fieldErrors.message && (
                        <p className="text-sm text-red-600 mt-1">
                          {fieldErrors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-secondary text-primary-foreground">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {/* <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-6 h-6 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">
                            Email
                          </h3>
                          <p className="text-muted-foreground">
                            hello@auralenia.com
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            We'll respond within 24 hours
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card> */}

                  {/* <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-6 h-6 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">
                            Office
                          </h3>
                          <p className="text-muted-foreground">
                            San Francisco, CA
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Available for in-person meetings
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-6 h-6 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">
                            Response Time
                          </h3>
                          <p className="text-muted-foreground">
                            Within 24 hours
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Monday - Friday, 9 AM - 6 PM PST
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card> */}
                </div>
              </div>

              {/* CTA Section */}
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Ready to Build with Auralenia?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Schedule a demo to see how Auralenia can power programmable accounts, payments, and compliance for your AI operations.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-secondary text-primary-foreground">
                    <a
                      href="https://wa.me/+60105424256"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat on WhatsApp">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
