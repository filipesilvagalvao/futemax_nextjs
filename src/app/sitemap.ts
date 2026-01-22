import { MetadataRoute } from "next";
import Channels from "@/functions/Channels";
import { filter_games } from "@/functions/FilterGames";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date()

    const allChannels: any = Channels.map((channel) => {
        return {
            url: `${baseUrl}/canais/${channel.slug}`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7
        }
    })

    const allGames: any = (await filter_games()).map((game) => {
        return {
            url: `${baseUrl}/jogos-de-hoje/${game.id}`,
            lastModified: now,
            changeFrequency: "daily",
            priority: 1
        }
    })
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        ...allChannels,
        ...allGames
    ]
}
