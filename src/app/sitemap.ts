import { MetadataRoute } from "next";
import Channels from "@/functions/Channels";
import { filter_games } from "@/functions/FilterGames";
import DateToday from "@/functions/DateToday";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date().toISOString()

    const allGames: any = (await filter_games()).map((game) => (
        {
            url: `${baseUrl}/futebol/${game.id}/${DateToday()}`,
            lastModified: now,
            changeFrequency: "daily",
            priority: 1
        }
    ))

    const allChannels: any = Channels.map((channel) => (
        {
            url: `${baseUrl}/canais/${channel.slug}`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7
        }
    ))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        ...allGames,
        ...allChannels
    ]
}
