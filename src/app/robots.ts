import { MetadataRoute } from 'next';
import { COMPANY } from '@/lib/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${COMPANY.seo.siteUrl}/sitemap.xml`,
  };
}
