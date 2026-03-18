import type { MetadataRoute } from "next";

const baseUrl = "https://www.ojala-solutions.fi";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages = [
    {
      fi: "/fi",
      en: "/en",
    },
    {
      fi: "/fi/projects",
      en: "/en/projects",
    },
  ];

  return pages.flatMap((page) => [
    {
      url: baseUrl + page.fi,
      lastModified,
      alternates: {
        languages: {
          fi: baseUrl + page.fi,
          en: baseUrl + page.en,
          "x-default": baseUrl + page.fi,
        },
      },
    },
    {
      url: baseUrl + page.en,
      lastModified,
      alternates: {
        languages: {
          fi: baseUrl + page.fi,
          en: baseUrl + page.en,
          "x-default": baseUrl + page.fi,
        },
      },
    },
  ]);
}
