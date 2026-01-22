import styles from "./Search.module.css"
import { filter_games } from "@/functions/FilterGames"
import Channels from "@/functions/Channels"
import Game from "@/components/game/Game"
import Post_chanel from "@/components/post_channel/Post_channel"
import Titleh1 from "@/components/titleh1/Titleh1"
import Titleh2 from "@/components/titleh2/Titleh2"
import normalizarString from "@/functions/Normalize"

type SearchParamsProps = {
    q: string
}

async function page({ searchParams }: { searchParams: SearchParamsProps }) {
    const { q } = await searchParams

    const games = (await filter_games()).filter((game) => {
        return (
            game.time_casa.nome.toLowerCase().includes(normalizarString(q.toLocaleLowerCase())) ||
            game.time_visitante.nome.toLowerCase().includes(normalizarString(q.toLocaleLowerCase())) ||
            game.canais[0]?.toLocaleLowerCase().includes(normalizarString(q.toLocaleLowerCase())) ||
            game.canais[1]?.toLocaleLowerCase().includes(normalizarString(q.toLocaleLowerCase()))
        )
    })

    const channels = Channels.filter((channel) => {
        return channel.name.toLocaleLowerCase().includes(q.toLocaleLowerCase())
    })


    if (channels.length === 0 && games.length === 0) {
        return (
            <main className={styles.search__notFound}>
                <p>Nenhum resultado para a pesquisa: {q}</p>
            </main>
        )
    }

    return (
        <main className={styles.search}>

            <section className={styles.search__container}>
                <Titleh1 text={`Resultados para: ${q}`} />

                {
                    games.length > 0 &&
                    <>
                        <Titleh2 text="Futebol" />
                        <div className={styles.search__results}>
                            {
                                games.map((game) => (
                                    <Game
                                        campeonato={game.campeonato}
                                        hora={game.hora}
                                        slug={game.id}
                                        time_casa={game.time_casa}
                                        time_visitante={game.time_visitante}
                                        key={game.id}
                                    />
                                ))
                            }
                        </div>
                    </>
                }

                {
                    channels.length > 0 &&
                    <>
                        <Titleh2 text="Canais de TV" />
                        <div className={styles.search__results}>
                            {
                                channels.map((channel) => (
                                    <Post_chanel
                                        alt_img={channel.name}
                                        img_link={channel.path_img}
                                        link_post={channel.slug}
                                        title={channel.name}
                                        key={channel.slug}
                                    />
                                ))
                            }
                        </div>
                    </>
                }

            </section>
        </main>
    )
}

export default page