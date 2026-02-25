import { MetadataRoute } from 'next'

const baseUrl = 'https://staffarc.in';  // Update with your domain

// Static pages
const staticPages = [
  '/',
  '/about',
  '/careers',
  '/contact',
];

// Services (from your navbar)
const services = [
  '/services/it-solutions',
  '/services/graphic-designing',
  '/services/marketing',
  '/services/staffing',
  '/services/gst-management',
  '/services/corporate-services',
];

// Blog pages (if you have)
const blogPages: string[] = [
  // '/blog',
  // '/blog/post-1',
  // '/blog/post-2',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();

  const pages: MetadataRoute.Sitemap = [
    ...staticPages.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: today,
      changeFrequency: route === '/' ? ('yearly' as const) : ('monthly' as const),
      priority: route === '/' ? 1.0 : 0.8,
    })),
    
    ...services.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    
    ...blogPages.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ];

  return pages;
}
