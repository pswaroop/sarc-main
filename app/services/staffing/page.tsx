import { Metadata } from "next"
import { ServiceDetail } from "@/components/service-detail"

export const metadata: Metadata = {
  title: "Staffing Solutions",
  description: "Permanent and contract staffing, RPO, and technical hiring support from StaffArc.",
}

const services = [
  { title: "Permanent Staffing", description: "Find the perfect full-time employees through our rigorous screening process that matches talent with your company culture and requirements." },
  { title: "Contract Staffing", description: "Flexible workforce solutions for project-based needs, seasonal demands, or specialized skill requirements without long-term commitments." },
  { title: "Recruitment Process Outsourcing (RPO)", description: "Outsource your entire recruitment function to us for end-to-end talent acquisition that saves time and reduces hiring costs." },
  { title: "Candidate Screening & Evaluation", description: "Comprehensive assessment services including skill tests, background checks, and behavioral interviews for quality hiring." },
  { title: "Technical Hiring Support", description: "Specialized recruitment for IT and tech roles with deep industry knowledge and access to a vetted talent network." },
]

export default function StaffingPage() {
  return (
    <ServiceDetail
      label="Staffing Solutions"
      title="Right Talent. Right Time. Every Time."
      description="We connect businesses with exceptional talent through our proven recruitment methodology and extensive candidate network."
      services={services}
    />
  )
}
