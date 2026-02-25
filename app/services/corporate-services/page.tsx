import { Metadata } from "next"
import { ServiceDetail } from "@/components/service-detail"

export const metadata: Metadata = {
  title: "Corporate Services",
  description: "Company registration, government applications, PAN/TAN/DSC, and startup registration services from StaffArc.",
}

const services = [
  { title: "Company & Firm Registration", description: "End-to-end support for registering Private Limited, LLP, Partnership, OPC, and Sole Proprietorship entities." },
  { title: "Government Application Support", description: "Expert assistance with licenses, permits, and various government applications required for business operations." },
  { title: "PAN / TAN / DSC Services", description: "Quick processing of Permanent Account Number, Tax Deduction Account Number, and Digital Signature Certificates." },
  { title: "MSME Registration", description: "Hassle-free Udyam registration to unlock government benefits, subsidies, and priority sector lending for MSMEs." },
  { title: "Startup India Registration", description: "Complete support for DPIIT recognition under Startup India, including tax benefits and compliance requirements." },
  { title: "Trademark & IP Registration", description: "Protect your brand with trademark registration and intellectual property filings handled by our expert team." },
]

export default function CorporateServicesPage() {
  return (
    <ServiceDetail
      label="Corporate Services"
      title="Your Partner in Business Registration"
      description="From company formation to regulatory compliance, we handle the paperwork so you can focus on building your business."
      services={services}
    />
  )
}
