import Option_player from "@/components/option_player/Option_player"
import styles from "./Jogos_de_hoje.module.css"
import { filter_games } from "@/functions/FilterGames"
import { Players } from "@/functions/Players"
import Script from "next/script"

type PropsPageGames = {
    params: {
        id: string
    }
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!

export const generateMetadata = async ({ params }: PropsPageGames) => {
    const { id } = await params
    const dataGame = (await filter_games()).find((game) => {
        return game.id === id
    })

    const canonicalUrl = `${baseUrl}/jogos-de-hoje/${id}`

    return {
        title: `${dataGame?.time_casa.nome} vs ${dataGame?.time_visitante.nome}`,
        description: `Informações sobre a paratida: ${dataGame?.time_casa.nome} vs ${dataGame?.time_visitante.nome}, campeonato: ${dataGame?.campeonato}, horário: ${dataGame?.hora}. Não perca Essa partida!`,
        openGraph: {
            images: [
                {
                    url: "/logo/futemax.webp",
                    width: 300,
                    height: 256,
                    alt: `${dataGame?.time_casa.nome} vs ${dataGame?.time_visitante.nome}`,
                },
            ],
        },
        alternates: {
            canonical: canonicalUrl,
        }
    }
}

async function page({ params }: PropsPageGames) {
    const slug = await params
    const games = await filter_games()

    const game = games.find((match) => {
        return match.id === slug.id
    })

    const channels: string[] = []

    game?.canais.forEach((channel) => {
        if (Players[channel])
            channels.push(...Players[channel])
    })

    return (
        <section className={styles.match}>

            <div className={styles.match__container}>

                <header className={styles.match__title}>
                    <h1 >{game?.time_casa.nome} VS {game?.time_visitante.nome}</h1>
                    <p>Campeonato: {game?.campeonato}</p>

                    <div className={styles.match__social}>
                        <a href={`https://api.whatsapp.com/send?text=Confira%20este%20link:%20${baseUrl}`} target="_blank">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>

                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${baseUrl}`} target="_blank">
                            <i className="fa-brands fa-facebook"></i>
                        </a>

                        <a href={`https://t.me/share/url?url=${baseUrl}&text=Confira%20este%20conteúdo`} target="_blank">
                            <i className="fa-brands fa-telegram"></i>
                        </a>
                    </div>
                </header>

                <Option_player channels={channels} />
                <div className={styles.match__info}>
                    <h2>Informarções da partida</h2>
                    <ul className={styles.match__infolist}>
                        <li><strong>Quais canais vai passar:</strong> {game?.canais.join(", ")}</li>
                        <li><strong>Qual o campeonato:</strong> {game?.campeonato}</li>
                        <li><strong>Qual o horário:</strong> às {game?.hora.replace(":", "h")}</li>
                        <li><strong>Time Casa:</strong> {game?.time_casa.nome}</li>
                        <li><strong>Time visitante:</strong> {game?.time_visitante.nome}</li>
                    </ul>
                </div>
            </div>
            <Script
                src="/meu-anuncio.js"
                strategy="afterInteractive"
                data-cfasync="false"
            />
            <Script
                src="//jnbhi.com/tag.min.js"
                data-zone="10517656"
                data-cfasync="false"
                strategy="afterInteractive"
            />
        </section>
    )
}

export default page