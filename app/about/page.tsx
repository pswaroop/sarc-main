// import { Metadata } from "next";
// import {
//   Target,
//   Eye,
//   Heart,
//   Award,
//   Users,
//   Briefcase,
//   TrendingUp,
//   Clock,
// } from "lucide-react";
// import { AnimatedSection } from "@/components/animated-section";
// import { SectionHeading } from "@/components/section-heading";
// import { ContactCTA } from "@/components/home/contact-cta";

// export const metadata: Metadata = {
//   title: "About Us",
//   description:
//     "Learn about StaffArc's mission, vision, values, and the team behind your tech & business success.",
// };

// const values = [
//   {
//     icon: Target,
//     title: "Innovation",
//     description:
//       "Constantly pushing boundaries with cutting-edge technology and creative thinking.",
//   },
//   {
//     icon: Heart,
//     title: "Client First",
//     description:
//       "Every decision we make is driven by our commitment to client success and satisfaction.",
//   },
//   {
//     icon: Award,
//     title: "Excellence",
//     description:
//       "We don't settle for good enough. We deliver premium quality in everything we do.",
//   },
//   {
//     icon: Users,
//     title: "Collaboration",
//     description:
//       "We work as an extension of your team, fostering transparent and open partnerships.",
//   },
// ];

// const milestones = [
//   {
//     year: "2022",
//     title: "StaffArc Founded",
//     description:
//       "Started with a vision to democratize access to premium business & staffing solutions.",
//   },
//   {
//     year: "2023",
//     title: "50 Clients Milestone",
//     description:
//       "Rapidly grew our client base by delivering exceptional results across multiple industries.",
//   },
//   {
//     year: "2024",
//     title: "Expanded Services",
//     description:
//       "Added Graphic designing, GST management, and corporate services to our portfolio.",
//   },
//   {
//     year: "2025",
//     title: "IT solutions",
//     description:
//       "Launched our IT solutions division, bringing intelligent solutions to clients.",
//   },
//   {
//     year: "2026",
//     title: "100+ Clients",
//     description:
//       "Crossed the 100-client mark within IT solutions and staffing domains.",
//   },
//   {
//     year: "2027",
//     title: "Future Focus",
//     description:
//       "Became a complete technology and business partner for startups to enterprises.",
//   },
// ];

// const team = [
//   {
//     name: "Venkat P",
//     role: "Founder",
//     bio: "Visionary leader with 10+ years in IT consulting and business strategy.",
//   },
//   {
//     name: "Sai Swaroop",
//     role: "Head of Technology",
//     bio: "Full-stack architect passionate about building scalable, elegant solutions.",
//   },
//   {
//     name: "Vikram Patel",
//     role: "Marketing Director",
//     bio: "Digital marketing expert with a track record of 500+ successful campaigns.",
//   },
//   {
//     name: "Deepika Sharma",
//     role: "HR & Staffing Lead",
//     bio: "Talent acquisition specialist connecting the right people with the right opportunities.",
//   },
//   {
//     name: "Karthik Naidu",
//     role: "Finance & Compliance",
//     bio: "Chartered accountant ensuring seamless GST compliance and financial advisory.",
//   },
//   {
//     name: "Ravi Teja",
//     role: "Creative Director",
//     bio: "Award-winning designer crafting visual identities that leave lasting impressions.",
//   },
// ];

// export default function AboutPage() {
//   return (
//     <div className="pt-20">
//       {/* Hero */}
//       <section className="bg-background py-24">
//         <div className="mx-auto max-w-7xl px-6">
//           <div className="mx-auto max-w-3xl text-center">
//             <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
//               About StaffArc
//             </span>
//             <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
//               Your Technology & Business Partner Since 2022
//             </h1>
//             <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
//               We started with a simple belief: every business deserves access to
//               world-class technology and strategic support. Today, we serve 200+
//               happy clients across industries.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Mission, Vision, Values */}
//       <section className="bg-secondary py-24">
//         <div className="mx-auto max-w-7xl px-6">
//           <div className="grid gap-8 lg:grid-cols-2">
//             <AnimatedSection>
//               <div className="rounded-2xl border border-border bg-card p-8">
//                 <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
//                   <Eye className="h-6 w-6 text-primary" />
//                 </div>
//                 <h3 className="mb-3 text-xl font-semibold text-card-foreground">
//                   Our Mission
//                 </h3>
//                 <p className="leading-relaxed text-muted-foreground">
//                   To empower businesses of all sizes with innovative, reliable,
//                   and affordable technology and business solutions that drive
//                   measurable growth and operational excellence.
//                 </p>
//               </div>
//             </AnimatedSection>
//             <AnimatedSection delay={100}>
//               <div className="rounded-2xl border border-border bg-card p-8">
//                 <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
//                   <Target className="h-6 w-6 text-primary" />
//                 </div>
//                 <h3 className="mb-3 text-xl font-semibold text-card-foreground">
//                   Our Vision
//                 </h3>
//                 <p className="leading-relaxed text-muted-foreground">
//                   To become India&apos;s most trusted one-stop technology and
//                   business partner, enabling digital transformation for 1,000+
//                   businesses by 2027.
//                 </p>
//               </div>
//             </AnimatedSection>
//           </div>

//           <div className="mt-16">
//             <SectionHeading
//               title="Our Core Values"
//               description="The principles that guide everything we do at StaffArc."
//             />
//             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//               {values.map((value, i) => (
//                 <AnimatedSection key={value.title} delay={i * 100}>
//                   <div className="rounded-2xl border border-border bg-card p-6 text-center">
//                     <div className="mx-auto mb-4 inline-flex rounded-xl bg-accent p-3">
//                       <value.icon className="h-6 w-6 text-primary" />
//                     </div>
//                     <h3 className="mb-2 font-semibold text-card-foreground">
//                       {value.title}
//                     </h3>
//                     <p className="text-sm leading-relaxed text-muted-foreground">
//                       {value.description}
//                     </p>
//                   </div>
//                 </AnimatedSection>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Timeline */}
//       <section className="bg-background py-24">
//         <div className="mx-auto max-w-7xl px-6">
//           <SectionHeading
//             label="Our Journey"
//             title="Growth & Milestones"
//             description="From a small team with big dreams to a full-service technology partner."
//           />

//           <div className="relative mx-auto max-w-3xl">
//             {/* Line */}
//             <div
//               className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px"
//               aria-hidden="true"
//             />

//             {milestones.map((milestone, i) => (
//               <AnimatedSection key={milestone.year} delay={i * 100}>
//                 <div
//                   className={`relative flex gap-6 pb-12 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
//                 >
//                   <div className="hidden md:block md:w-1/2" />
//                   <div className="absolute left-4 top-0 md:left-1/2 md:-translate-x-1/2 z-10">
//                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
//                       {milestone.year.slice(2)}
//                     </div>
//                   </div>
//                   <div
//                     className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
//                   >
//                     <div className="rounded-xl border border-border bg-card p-5">
//                       <div className="text-xs font-semibold text-primary">
//                         {milestone.year}
//                       </div>
//                       <h3 className="mt-1 font-semibold text-card-foreground">
//                         {milestone.title}
//                       </h3>
//                       <p className="mt-1 text-sm text-muted-foreground">
//                         {milestone.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team */}
//       {/* <section className="bg-secondary py-24">
//         <div className="mx-auto max-w-7xl px-6">
//           <SectionHeading
//             label="Our Team"
//             title="Meet the People Behind StaffArc"
//             description="Passionate professionals dedicated to your business growth."
//           />

//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {team.map((member, i) => (
//               <AnimatedSection key={member.name} delay={i * 100}>
//                 <div className="rounded-2xl border border-border bg-card p-6">
//                   <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-primary">
//                     {member.name
//                       .split(" ")
//                       .map((n) => n[0])
//                       .join("")}
//                   </div>
//                   <h3 className="font-semibold text-card-foreground">
//                     {member.name}
//                   </h3>
//                   <p className="text-sm font-medium text-primary">
//                     {member.role}
//                   </p>
//                   <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
//                     {member.bio}
//                   </p>
//                 </div>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* Stats */}
//       <section className="bg-background py-24">
//         <div className="mx-auto max-w-7xl px-6">
//           <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
//             {[
//               { icon: Users, value: "200+", label: "Happy Clients" },
//               { icon: Briefcase, value: "500+", label: "Projects Completed" },
//               { icon: TrendingUp, value: "40%", label: "Avg. Revenue Growth" },
//               { icon: Clock, value: "24/7", label: "Dedicated Support" },
//             ].map((stat, i) => (
//               <AnimatedSection key={stat.label} delay={i * 100}>
//                 <div className="text-center">
//                   <stat.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
//                   <div className="text-3xl font-bold text-foreground lg:text-4xl">
//                     {stat.value}
//                   </div>
//                   <div className="mt-1 text-sm text-muted-foreground">
//                     {stat.label}
//                   </div>
//                 </div>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       <ContactCTA />
//     </div>
//   );
// }
import { Metadata } from "next";
import Image from "next/image";
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Briefcase,
  TrendingUp,
  Clock,
  Quote,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { ContactCTA } from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: "About Us - StaffArc",
  description:
    "Learn about StaffArc founder Harshith Pentakota, our mission, values, and journey since 2022.",
  openGraph: {
    title: "About StaffArc - Technology & Business Partner",
    description: "Meet our founder and learn our story.",
  },
};

const values = [
  {
    icon: Target,
    title: "Innovation",
    description:
      "Constantly pushing boundaries with cutting-edge technology and creative thinking.",
  },
  {
    icon: Heart,
    title: "Client First",
    description:
      "Every decision we make is driven by our commitment to client success and satisfaction.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We don't settle for good enough. We deliver premium quality in everything we do.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work as an extension of your team, fostering transparent and open partnerships.",
  },
];

// Founder data
const founder = {
  name: "Harshith Pentakota",
  role: "Founder & CEO",
  bio: "Visionary entrepreneur with 3+ years in technology leadership. Built StaffArc from a simple idea into a multi-service powerhouse serving 200+ clients across India.",
};

const founderQuotes = [
  {
    quote:
      "Technology should solve problems, not create them. We build solutions that scale with your ambition.",
  },
  {
    quote:
      "Great companies aren't built on code alone—they're built on trust, execution, and relentless focus on the customer.",
  },
  {
    quote:
      "The future belongs to those who can bridge technology with business outcomes. That's what StaffArc does every day.",
  },
];

const milestones = [
  // ... your existing milestones
  {
    year: "2022",
    title: "StaffArc Founded",
    description:
      "Started with a vision to democratize access to premium business & staffing solutions.",
  },
  {
    year: "2023",
    title: "50 Clients Milestone",
    description:
      "Rapidly grew our client base by delivering exceptional results across multiple industries.",
  },
  {
    year: "2024",
    title: "Expanded Services",
    description:
      "Added Graphic designing, GST management, and corporate services to our portfolio.",
  },
  {
    year: "2025",
    title: "IT solutions",
    description:
      "Launched our IT solutions division, bringing intelligent solutions to clients.",
  },
  {
    year: "2026",
    title: "100+ Clients",
    description:
      "Crossed the 100-client mark within IT solutions and staffing domains.",
  },
  {
    year: "2027",
    title: "Future Focus",
    description:
      "Became a complete technology and business partner for startups to enterprises.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero - unchanged */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              About StaffArc
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Your Technology & Business Partner Since 2022
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              We started with a simple belief: every business deserves access to
              world-class technology and strategic support. Today, we serve 200+
              happy clients across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values - unchanged */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <AnimatedSection>
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                  Our Mission
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  To empower businesses of all sizes with innovative, reliable,
                  and affordable technology and business solutions that drive
                  measurable growth and operational excellence.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                  Our Vision
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  To become India&apos;s most trusted one-stop technology and
                  business partner, enabling digital transformation for 1,000+
                  businesses by 2027.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <div className="mt-16">
            <SectionHeading
              title="Our Core Values"
              description="The principles that guide everything we do at StaffArc."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, i) => (
                <AnimatedSection key={value.title} delay={i * 100}>
                  <div className="rounded-2xl border border-border bg-card p-6 text-center">
                    <div className="mx-auto mb-4 inline-flex rounded-xl bg-accent p-3">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 font-semibold text-card-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section - NEW */}
      <section className="bg-gradient-to-r from-primary/5 via-background to-secondary/5 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Our Visionary"
            title="Harshith Pentakota"
            description="Founder & CEO of StaffArc, leading the company since 2022."
          />

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            {/* Left: Bio & Quotes */}
            <AnimatedSection>
              <div className="space-y-6">
                <div className="relative h-20 w-20 rounded-2xl shadow-lg overflow-hidden">
                  <Image
                    src="/founder1.jpeg"
                    alt={founder.name}
                    fill
                    className="object-cover rounded-2xl brightness-75 contrast-125"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary shadow-inner" /> */}
                  {/* <div className="absolute inset-0 flex items-center justify-center"></div> */}
                </div>
                <div>
                  <h3 className="mb-2 text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                    {founder.name}
                  </h3>
                  <p className="text-xl font-semibold text-primary">
                    {founder.role}
                  </p>
                </div>
                <p className="leading-relaxed text-muted-foreground">
                  {founder.bio}
                </p>

                {/* Quotes */}
                <div className="mt-8 space-y-4">
                  <div className="space-y-2">
                    {founderQuotes.slice(0, 2).map((q, i) => (
                      <div
                        key={i}
                        className="flex gap-3 pl-6 border-l-4 border-primary/20"
                      >
                        <Quote className="h-5 w-5 mt-1 text-primary/60 shrink-0" />
                        <p className="italic text-muted-foreground font-medium">
                          "{q.quote}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Scrollable Photos */}
            <AnimatedSection delay={200}>
              <div className="relative h-96 rounded-2xl border border-border bg-gradient-to-br from-muted to-muted/50 overflow-hidden shadow-2xl">
                {/* Main Photo - founder1.jpeg */}
                <Image
                  src="/founder2.jpeg"
                  alt="Harshith Pentakota"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />

                {/* Overlay Gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Decorative glows */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-lg animate-pulse delay-1000" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline - unchanged */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Our Journey"
            title="Growth & Milestones"
            description="From a small team with big dreams to a full-service technology partner."
          />
          {/* Your existing timeline code here */}
          <div className="relative mx-auto max-w-3xl">
            <div
              className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px"
              aria-hidden="true"
            />
            {milestones.map((milestone, i) => (
              <AnimatedSection key={milestone.year} delay={i * 100}>
                <div
                  className={`relative flex gap-6 pb-12 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 top-0 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {milestone.year.slice(2)}
                    </div>
                  </div>
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
                  >
                    <div className="rounded-xl border border-border bg-card p-5">
                      <div className="text-xs font-semibold text-primary">
                        {milestone.year}
                      </div>
                      <h3 className="mt-1 font-semibold text-card-foreground">
                        {milestone.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - unchanged */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { icon: Users, value: "200+", label: "Happy Clients" },
              { icon: Briefcase, value: "500+", label: "Projects Completed" },
              { icon: TrendingUp, value: "40%", label: "Avg. Revenue Growth" },
              { icon: Clock, value: "24/7", label: "Dedicated Support" },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <stat.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <div className="text-3xl font-bold text-foreground lg:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
