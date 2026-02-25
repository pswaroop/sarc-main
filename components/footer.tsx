// import Link from "next/link";
// import Image from "next/image";
// import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

// const services = [
//   { name: "IT Solutions", href: "/services/it-solutions" },
//   { name: "Graphic Designing", href: "/services/graphic-designing" },
//   { name: "Marketing", href: "/services/marketing" },
//   { name: "Staffing Solutions", href: "/services/staffing" },
//   { name: "GST Management", href: "/services/gst-management" },
//   { name: "Corporate Services", href: "/services/corporate-services" },
// ];

// const company = [
//   { name: "About Us", href: "/about" },
//   { name: "Portfolio", href: "/portfolio" },
//   { name: "Blog", href: "/blog" },
//   { name: "Careers", href: "/careers" },
//   { name: "Contact", href: "/contact" },
// ];

// const legal = [
//   { name: "Privacy Policy", href: "/privacy" },
//   { name: "Terms of Service", href: "/terms" },
// ];

// export function Footer() {
//   return (
//     <footer className="border-t border-border bg-card">
//       <div className="mx-auto max-w-7xl px-6 py-16">
//         <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
//           {/* Brand */}
//           <div className="space-y-4">
//             <Link href="/" className="flex items-center gap-2">
//               <Image
//                 src="/images/staffarc-logo.png"
//                 alt="StaffArc Logo"
//                 width={36}
//                 height={36}
//                 className="h-9 w-9"
//               />
//               <span className="text-lg font-bold text-card-foreground">
//                 Staff<span className="text-primary">Arc</span>
//               </span>
//             </Link>
//             <p className="text-sm leading-relaxed text-muted-foreground">
//               Your Tech & Business Partner. Smart Solutions for Complete Growth
//               across IT, Marketing, Staffing, and Compliance.
//             </p>
//             <div className="space-y-3 pt-2">
//               <a
//                 href="tel:+918639619426"
//                 className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
//               >
//                 <Phone className="h-4 w-4" />
//                 +91 8639619426
//               </a>
//               <a
//                 href="mailto:procurement@staffarc.in"
//                 className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
//               >
//                 <Mail className="h-4 w-4" />
//                 procurement@staffarc.in
//               </a>
//               <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                 <MapPin className="h-4 w-4 shrink-0" />
//                 Visakhapatnam | Hyderabad
//               </div>
//               <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                 <Clock className="h-4 w-4 shrink-0" />
//                 Mon-Sat: 9:00 AM - 6:00 PM
//               </div>
//             </div>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-card-foreground">
//               Services
//             </h3>
//             <ul className="space-y-3">
//               {services.map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     href={item.href}
//                     className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
//                   >
//                     {item.name}
//                     <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-card-foreground">
//               Company
//             </h3>
//             <ul className="space-y-3">
//               {company.map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     href={item.href}
//                     className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
//                   >
//                     {item.name}
//                     <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             {/* <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-card-foreground">
//               Stay Updated
//             </h3>
//             <p className="mb-4 text-sm text-muted-foreground">
//               Subscribe to our newsletter for the latest insights and updates.
//             </p> */}
//             {/* <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
//               <input
//                 type="email"
//                 placeholder="your@email.com"
//                 className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
//               />
//               <button
//                 type="submit"
//                 className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
//               >
//                 Join
//               </button>
//             </form> */}
//             <div className="mt-6 flex gap-3">
//               {legal.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className="text-xs text-muted-foreground transition-colors hover:text-primary"
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="mt-12 border-t border-border pt-8 text-center">
//           <p className="text-sm text-muted-foreground">
//             &copy; {new Date().getFullYear()} StaffArc. All rights reserved. |
//             Your Tech & Business Partner
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const services = [
  { name: "IT Solutions", href: "/services/it-solutions" },
  { name: "Graphic Designing", href: "/services/graphic-designing" },
  { name: "Marketing", href: "/services/marketing" },
  { name: "Staffing Solutions", href: "/services/staffing" },
  { name: "GST Management", href: "/services/gst-management" },
  { name: "Corporate Services", href: "/services/corporate-services" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1A3JaeDBxN/",
    icon: Facebook,
  },
  {
    name: "X/Twitter",
    href: "https://x.com/StaffArc?t=TBIlR139p4ZWMzVc8YuGbw&s=08",
    icon: Twitter,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/staffarc/",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/staffarc?igsh=OGY2bDRkdmdtOWJp",
    icon: Instagram,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/staffarc-logo.png"
                alt="StaffArc Logo"
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <span className="text-lg font-bold text-card-foreground">
                Staff<span className="text-primary">Arc</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Your Tech & Business Partner. Smart Solutions for Complete Growth
              across IT, Marketing, Staffing, and Compliance.
            </p>
            <div className="space-y-3 pt-2">
              <a
                href="tel:+918639619426"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                +91 8639619426
              </a>
              <a
                href="mailto:procurement@staffarc.in"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                procurement@staffarc.in
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                Visakhapatnam | Hyderabad
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 shrink-0" />
                Mon-Sat: 9:00 AM - 6:00 PM
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-card-foreground">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-card-foreground">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-card-foreground">
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-3">
                {socials.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground hover:border-primary/50"
                    aria-label={name}
                  >
                    <Icon className="h-4 w-4 shrink-0 group-hover:scale-110" />
                    <span className="hidden sm:inline">{name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div className="pt-4">
              <div className="flex flex-wrap gap-3">
                {legal.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-xs text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} StaffArc. All rights reserved. |
            Your Tech & Business Partner
          </p>
        </div>
      </div>
    </footer>
  );
}
