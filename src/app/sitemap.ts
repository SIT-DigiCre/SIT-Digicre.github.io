import type { MetadataRoute } from "next";
import { teams } from "./(content)/welcome/_components/TeamsSection";

export default function sitemap(): MetadataRoute.Sitemap {
  const teamPages: MetadataRoute.Sitemap = teams.map((team) => ({
    url: `https://digicre.net/about/${team.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const sitemap: MetadataRoute.Sitemap = [
    {
      url: "https://digicre.net",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://digicre.net/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://digicre.net/welcome",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...teamPages,
  ];

  return sitemap;
}
