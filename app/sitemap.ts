import type { MetadataRoute } from "next";

const baseUrl = "https://www.ojala-solutions.fi";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
    },
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
