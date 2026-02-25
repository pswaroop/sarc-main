import { Metadata } from "next"
import { ServiceDetail } from "@/components/service-detail"

export const metadata: Metadata = {
  title: "GST Management",
  description: "GST registration, filing, tax compliance advisory, and periodic reporting services from StaffArc.",
}

const services = [
  { title: "GST Registration", description: "Complete assistance with GST registration including documentation, application filing, and follow-up until certificate issuance." },
  { title: "GST Return Filing", description: "Timely and accurate filing of GSTR-1, GSTR-3B, GSTR-9, and all other applicable returns to keep you compliant." },
  { title: "Tax Compliance & Advisory", description: "Expert guidance on GST compliance, input tax credit optimization, and tax planning strategies to minimize liability." },
  { title: "Monthly/Quarterly Tax Reports", description: "Detailed periodic reports with insights into your tax position, compliance status, and optimization opportunities." },
  { title: "GST Audit Support", description: "Comprehensive audit preparation, documentation review, and representation to ensure smooth completion of GST audits." },
]

export default function GSTManagementPage() {
  return (
    <ServiceDetail
      label="GST Management"
      title="Stress-Free Business Compliance"
      description="Our certified tax professionals handle all your GST requirements so you can focus entirely on growing your business."
      services={services}
    />
  )
}
