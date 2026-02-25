import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/private/',
        '/admin/',
        '/api/',
        '/dashboard/',
      ],
    },
    sitemap: 'https://staffarc.in/sitemap.xml',  // Update with your domain
  }
}
