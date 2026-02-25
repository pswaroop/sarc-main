"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { MapPin, Briefcase, Clock, Send } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const openings = [
  {
    title: "Full Stack Developer",
    location: "Visakhapatnam / Remote",
    type: "Full-time",
    description:
      "3+ years experience with React, Node.js, and cloud platforms. Build scalable web applications.",
  },
  {
    title: "UI/UX Designer",
    location: "Hyderabad",
    type: "Full-time",
    description:
      "Proficiency in Figma, Adobe XD. Create intuitive and visually stunning interfaces.",
  },
  {
    title: "Digital Marketing Executive",
    location: "Visakhapatnam",
    type: "Full-time",
    description:
      "Experience with SEO, Google Ads, Meta Ads, and analytics platforms.",
  },
  {
    title: "HR & Recruitment Specialist",
    location: "Hyderabad",
    type: "Full-time",
    description:
      "Talent acquisition experience with strong communication and negotiation skills.",
  },
  {
    title: "Content Writer",
    location: "Remote",
    type: "Contract",
    description:
      "Create compelling blog posts, case studies, and marketing copy for tech audiences.",
  },
  {
    title: "Data Analyst Intern",
    location: "Visakhapatnam",
    type: "Internship",
    description:
      "Knowledge of Python, SQL, and data visualization. Great learning opportunity.",
  },
];

export default function CareersPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success(
      "Your application has been submitted successfully! We'll review it and get back to you.",
    );
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <div className="pt-20">
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              Join Our Team
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Build Your Career at StaffArc
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Join a team of passionate professionals who are transforming
              businesses through technology and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Open Positions"
            title="Current Openings"
            description="Explore exciting opportunities to grow with us."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {openings.map((job, i) => (
              <AnimatedSection key={job.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/30">
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        job.type === "Full-time"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : job.type === "Contract"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                            : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                      }`}
                    >
                      {job.type}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                    {job.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {job.type}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            label="Apply Now"
            title="Submit Your Application"
            description="Interested in joining StaffArc? Fill out the form below and upload your resume."
          />

          <AnimatedSection>
            <div className="rounded-2xl border border-border bg-card p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="applicant-name"
                      className="mb-1.5 block text-sm font-medium text-card-foreground"
                    >
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="applicant-name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="applicant-email"
                      className="mb-1.5 block text-sm font-medium text-card-foreground"
                    >
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="applicant-email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                {/* <div>
                  <label
                    htmlFor="position"
                    className="mb-1.5 block text-sm font-medium text-card-foreground"
                  >
                    Position Applied For{" "}
                    <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a position</option>
                    {openings.map((job) => (
                      <option key={job.title} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </div> */}
                <div>
                  <label
                    htmlFor="position"
                    className="mb-1.5 block text-sm font-medium text-card-foreground"
                  >
                    Position Applied For{" "}
                    <span className="text-destructive">*</span>
                  </label>
                  <Select name="position" required>
                    <SelectTrigger id="position">
                      <SelectValue placeholder="Select a position" />
                    </SelectTrigger>
                    <SelectContent>
                      {openings.map((job) => (
                        <SelectItem key={job.title} value={job.title}>
                          {job.title}
                        </SelectItem>
                      ))}
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label
                    htmlFor="cover-letter"
                    className="mb-1.5 block text-sm font-medium text-card-foreground"
                  >
                    Cover Letter / Message
                  </label>
                  <textarea
                    id="cover-letter"
                    name="message"
                    rows={4}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell us why you'd be a great fit..."
                  />
                </div>

                <div>
                  <label
                    htmlFor="resume"
                    className="mb-1.5 block text-sm font-medium text-card-foreground"
                  >
                    Upload Resume <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground file:mr-4 file:rounded-md file:border-0 file:bg-primary file:px-3 file:py-1 file:text-sm file:font-medium file:text-primary-foreground hover:file:bg-primary/90"
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    PDF, DOC, or DOCX (max 5MB)
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base py-3"
                  size="lg"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Application
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
