import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://techpronnet.com';

  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/reviews',
    '/blog',
    '/quote',
    '/contact',
    '/faqs',
    '/careers',
    '/privacy',
    '/terms'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
