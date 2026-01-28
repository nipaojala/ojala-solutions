import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Use ONE canonical host consistently (avoid www/non-www duplicates)
  const baseUrl = 'https://ojala-solutions.fi';
  const lastModified = new Date();

  // Hand-written routes (explicit URLs)
  return [
    // Root
    { url: baseUrl, lastModified },

    // Home
    {
      url: `${baseUrl}/fi`,
      lastModified,
      alternates: {
        languages: {
          fi: `${baseUrl}/fi`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified,
      alternates: {
        languages: {
          fi: `${baseUrl}/fi`,
          en: `${baseUrl}/en`,
        },
      },
    },

    // Projects
    {
      url: `${baseUrl}/fi/projects`,
      lastModified,
      alternates: {
        languages: {
          fi: `${baseUrl}/fi/projects`,
          en: `${baseUrl}/en/projects`,
        },
      },
    },
    {
      url: `${baseUrl}/en/projects`,
      lastModified,
      alternates: {
        languages: {
          fi: `${baseUrl}/fi/projects`,
          en: `${baseUrl}/en/projects`,
        },
      },
    },
  ];
}
