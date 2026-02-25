"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7842932428",
    href: "tel:+917842932428",
  },
  {
    icon: Mail,
    label: "Email",
    value: "procurement@staffarc.in",
    href: "mailto:procurement@staffarc.in",
  },
  {
    icon: MapPin,
    label: "Locations",
    value: "Visakhapatnam | Hyderabad",
    href: null,
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon-Sat: 9:00 AM - 6:00 PM",
    href: null,
  },
];

const serviceOptions = [
  "IT Solutions",
  "Graphic Designing",
  "Digital Marketing",
  "Staffing Solutions",
  "GST Management",
  "Corporate Services",
  "Other",
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      toast.success(
        "Your inquiry has been sent successfully! We'll get back to you within 24 hours.",
      );
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send your inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="pt-20">
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              Get in Touch
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              {"Let's Build Something Great Together"}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Have a project in mind? Need expert consultation? Reach out and
              our team will respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex gap-4">
                      <div className="shrink-0 rounded-xl bg-accent p-3 h-fit">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">
                          {info.label}
                        </div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="font-medium text-foreground transition-colors hover:text-primary"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="font-medium text-foreground">
                            {info.value}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick actions */}
                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href="https://wa.me/917842932428?text=Hello%20StaffArc%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-card-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <MessageCircle className="h-5 w-5 text-green-600" />
                    Chat on WhatsApp
                  </a>
                  <a
                    href="tel:+917842932428"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-card-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    Quick Call
                  </a>
                </div>

                {/* Map */}
                <div className="mt-8 overflow-hidden rounded-xl border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.34203389014!2d83.11326245!3d17.7231766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="StaffArc Office Location"
                    className="grayscale"
                  />
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={100}>
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h2 className="mb-6 text-2xl font-bold text-card-foreground">
                    Send Us Your Requirements
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-1.5 block text-sm font-medium text-card-foreground"
                        >
                          Full Name <span className="text-destructive">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-1.5 block text-sm font-medium text-card-foreground"
                        >
                          Email <span className="text-destructive">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-1.5 block text-sm font-medium text-card-foreground"
                        >
                          Phone Number{" "}
                          <span className="text-destructive">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="mb-1.5 block text-sm font-medium text-card-foreground"
                        >
                          Company Name
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      {/* <div>
                        <label
                          htmlFor="service"
                          className="mb-1.5 block text-sm font-medium text-card-foreground"
                        >
                          Service Required{" "}
                          <span className="text-destructive">*</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select a service</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div> */}
                      <div>
                        <label
                          htmlFor="service"
                          className="mb-1.5 block text-sm font-medium text-card-foreground"
                        >
                          Service Required{" "}
                          <span className="text-destructive">*</span>
                        </label>
                        <Select name="service" required>
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map((opt) => (
                              <SelectItem key={opt} value={opt}>
                                {opt}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      {/* <div>
                        <label
                          htmlFor="budget"
                          className="mb-1.5 block text-sm font-medium text-card-foreground"
                        >
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select budget range</option>
                          <option value="5k">5K INR</option>
                          <option value="under-10k">Under 10K INR</option>
                          <option value="under-20k">Under 20K INR</option>
                          <option value="20k-30k">20K - 30K INR</option>
                          <option value="30k-50k">30K - 50K INR</option>
                          <option value="50k-1l">50K - 1 Lakh INR</option>
                          <option value="1l-5l">1 - 5 Lakh INR</option>
                          <option value="5l-10l">5 - 10 Lakh INR</option>
                          <option value="above-10l">Above 10 Lakh INR</option>
                        </select>
                      </div> */}
                      <div>
                        <label
                          htmlFor="budget"
                          className="mb-1.5 block text-sm font-medium text-card-foreground"
                        >
                          Budget Range
                        </label>
                        <Select name="budget">
                          <SelectTrigger id="budget">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5k">5K INR</SelectItem>
                            <SelectItem value="under-10k">
                              Under 10K INR
                            </SelectItem>
                            <SelectItem value="under-20k">
                              Under 20K INR
                            </SelectItem>
                            <SelectItem value="20k-30k">
                              20K - 30K INR
                            </SelectItem>
                            <SelectItem value="30k-50k">
                              30K - 50K INR
                            </SelectItem>
                            <SelectItem value="50k-1l">
                              50K - 1 Lakh INR
                            </SelectItem>
                            <SelectItem value="1l-5l">
                              1 - 5 Lakh INR
                            </SelectItem>
                            <SelectItem value="5l-10l">
                              5 - 10 Lakh INR
                            </SelectItem>
                            <SelectItem value="above-10l">
                              Above 10 Lakh INR
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="requirements"
                        className="mb-1.5 block text-sm font-medium text-card-foreground"
                      >
                        Detailed Requirements{" "}
                        <span className="text-destructive">*</span>
                      </label>
                      <textarea
                        id="requirements"
                        name="requirements"
                        rows={5}
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                        placeholder="Tell us about your project requirements, goals, and timeline..."
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="file"
                        className="mb-1.5 block text-sm font-medium text-card-foreground"
                      >
                        Attach Requirement Document
                      </label>
                      <input
                        id="file"
                        name="file"
                        type="file"
                        accept=".pdf,.doc,.docx,.txt"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground file:mr-4 file:rounded-md file:border-0 file:bg-primary file:px-3 file:py-1 file:text-sm file:font-medium file:text-primary-foreground hover:file:bg-primary/90"
                      />
                      <p className="mt-1 text-xs text-muted-foreground">
                        PDF, DOC, DOCX, or TXT (max 10MB)
                      </p>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base py-3"
                      size="lg"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Submit Inquiry
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
