import { MetadataRoute } from 'next';
import { routing } from './i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ojala-solutions.fi';
  
  // Get all routes
  const routes = [
    '', // Home page
    '/projects', // Projects page
  ];

  // Generate sitemap entries for each route and locale
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    const urls = routing.locales.map((locale) => `${baseUrl}/${locale}${route}`);
    
    // Add each locale version with alternates
    for (const locale of routing.locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((loc) => [loc, `${baseUrl}/${loc}${route}`])
          ),
        },
      });
    }
  }

  // Add root URL (might redirect to /fi)
  sitemapEntries.push({
    url: baseUrl,
    lastModified: new Date(),
  });

  return sitemapEntries;
}
