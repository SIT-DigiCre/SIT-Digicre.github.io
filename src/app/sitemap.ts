import type { MetadataRoute } from "next";
import { teams } from "./(content)/welcome/_components/TeamsSection";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const teamPages: MetadataRoute.Sitemap = teams.map((team) => ({
    url: `https://digicre.net/about/${team.href}`,
    lastModified: new Date(),
  }));

  const sitemap: MetadataRoute.Sitemap = [
    {
      url: "https://digicre.net",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://digicre.net/welcome",
      lastModified: new Date(),
    },
    ...teamPages,
  ];

  return sitemap;
}
