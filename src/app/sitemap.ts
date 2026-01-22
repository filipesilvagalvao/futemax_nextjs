import { MetadataRoute } from "next";
import Channels from "@/functions/Channels";
import { filter_games } from "@/functions/FilterGames";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const allChannels:any = Channels
    .filter((channel) => channel?.slug)
    .map((channel) => ({
      url: `${baseUrl}/canais/${channel.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  const games = await filter_games();

  const allGames:any = games
    .filter((game) => game?.id)
    .map((game) => ({
      url: `${baseUrl}/jogos-de-hoje/${game.id}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    }));

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    ...allChannels,
    ...allGames,
  ];
}
