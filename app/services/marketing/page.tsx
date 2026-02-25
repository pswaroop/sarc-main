import { Metadata } from "next"
import { ServiceDetail } from "@/components/service-detail"

export const metadata: Metadata = {
  title: "Digital Marketing",
  description: "SEO, Google Ads, Meta Ads, PPC, social media marketing, and content strategy from StaffArc.",
}

const services = [
  { title: "SEO (On-page & Off-page)", description: "Comprehensive search engine optimization to boost your organic rankings, drive qualified traffic, and increase domain authority." },
  { title: "Google & Meta Ads", description: "Strategic paid advertising campaigns on Google Search, Display, YouTube, Facebook, and Instagram for maximum ROAS." },
  { title: "PPC Campaigns", description: "Data-driven pay-per-click campaigns with advanced targeting, A/B testing, and continuous optimization for cost efficiency." },
  { title: "Social Media Strategy", description: "End-to-end social media management including content calendars, community engagement, and brand reputation building." },
  { title: "Content & Video Marketing", description: "Compelling blog posts, articles, infographics, and video content that educates, entertains, and converts your audience." },
  { title: "Email & Influencer Marketing", description: "Targeted email campaigns and strategic influencer partnerships to nurture leads and expand your brand reach." },
]

export default function MarketingPage() {
  return (
    <ServiceDetail
      label="Digital Marketing"
      title="Digital Growth, Guaranteed Results"
      description="Our marketing experts craft data-driven strategies that increase visibility, generate leads, and deliver measurable ROI."
      services={services}
    />
  )
}
