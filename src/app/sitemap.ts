import { MetadataRoute } from 'next';
import { COMPANY } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY.seo.siteUrl;

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-10-18'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}#about`,
      lastModified: new Date('2026-10-18'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}#services`,
      lastModified: new Date('2026-10-18'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}#vehicles`,
      lastModified: new Date('2026-10-18'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}#quote`,
      lastModified: new Date('2026-10-18'),
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}#locations`,
      lastModified: new Date('2026-10-18'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}#industries`,
      lastModified: new Date('2026-10-18'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}#partner`,
      lastModified: new Date('2026-10-18'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}#contact`,
      lastModified: new Date('2026-10-18'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}#business-info`,
      lastModified: new Date('2026-10-18'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];
}
