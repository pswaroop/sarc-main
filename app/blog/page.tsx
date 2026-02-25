import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { ContactCTA } from "@/components/home/contact-cta"

export const metadata: Metadata = {
  title: "Blog",
  description: "StaffArc's insights on IT, digital marketing, AI, staffing, and business growth strategies.",
}

const posts = [
  {
    title: "How AI is Revolutionizing Small Business Operations in 2025",
    excerpt: "Discover how artificial intelligence tools are helping SMEs automate processes, reduce costs, and make smarter decisions.",
    category: "AI & Technology",
    author: "Srinivas Rao",
    date: "Feb 15, 2025",
    readTime: "5 min read",
    slug: "ai-revolutionizing-small-business",
    image: "/images/blog/ai-business.jpg",
  },
  {
    title: "The Ultimate SEO Checklist for Indian Startups",
    excerpt: "A comprehensive guide to on-page and off-page SEO strategies specifically tailored for the Indian market.",
    category: "Digital Marketing",
    author: "Vikram Patel",
    date: "Feb 8, 2025",
    readTime: "8 min read",
    slug: "seo-checklist-indian-startups",
    image: "/images/blog/seo-guide.jpg",
  },
  {
    title: "Why Every Business Needs a Mobile App in 2025",
    excerpt: "Mobile-first strategies are no longer optional. Here is why investing in a mobile app delivers massive ROI.",
    category: "IT Solutions",
    author: "Ananya Reddy",
    date: "Jan 28, 2025",
    readTime: "6 min read",
    slug: "business-mobile-app-2025",
    image: "/images/blog/mobile-app.jpg",
  },
  {
    title: "5 Common GST Filing Mistakes and How to Avoid Them",
    excerpt: "Learn about the most frequent GST compliance errors that cost businesses money and how to stay on track.",
    category: "GST & Compliance",
    author: "Karthik Naidu",
    date: "Jan 20, 2025",
    readTime: "4 min read",
    slug: "gst-filing-mistakes",
    image: "/images/blog/gst-compliance.jpg",
  },
  {
    title: "Building a Strong Employer Brand to Attract Top Talent",
    excerpt: "In a competitive job market, your employer brand is everything. Here are proven strategies to stand out.",
    category: "Staffing",
    author: "Deepika Sharma",
    date: "Jan 12, 2025",
    readTime: "7 min read",
    slug: "employer-brand-top-talent",
    image: "/images/blog/employer-brand.jpg",
  },
  {
    title: "Cloud Migration Strategy: A Step-by-Step Guide",
    excerpt: "Planning to move to the cloud? This guide covers everything from assessment to migration and optimization.",
    category: "IT Solutions",
    author: "Ananya Reddy",
    date: "Jan 5, 2025",
    readTime: "10 min read",
    slug: "cloud-migration-strategy",
    image: "/images/blog/cloud-migration.jpg",
  },
]

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-background py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              Blog & Insights
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Expert Insights & Industry Trends
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Stay ahead with our latest articles on technology, marketing, compliance, and business growth strategies.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Featured Post */}
          <AnimatedSection>
            <article className="mb-16 group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:border-primary/30">
              <div className="flex flex-col lg:flex-row">
                <div className="relative h-64 lg:h-auto lg:w-2/5">
                  <Image
                    src={posts[0].image}
                    alt={posts[0].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20 lg:bg-gradient-to-l" />
                </div>
                <div className="flex flex-1 flex-col justify-center p-8 lg:p-12">
                  <span className="mb-3 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {posts[0].category}
                  </span>
                  <h2 className="text-2xl font-bold text-card-foreground lg:text-3xl text-balance group-hover:text-primary transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {posts[0].excerpt}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <User className="h-4 w-4" />
                      {posts[0].author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {posts[0].date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {posts[0].readTime}
                    </span>
                  </div>
                  <span className="mt-6 inline-flex items-center text-sm font-semibold text-primary group-hover:underline">
                    Read Full Article
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </article>
          </AnimatedSection>

          {/* Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(1).map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 100}>
                <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {post.category}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors text-balance">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                    </div>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Read More
                      <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </span>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  )
}
