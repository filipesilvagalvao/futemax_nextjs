import { filter_games } from "@/functions/FilterGames"
import Game from "../game/Game"
import styles from "./Game__list.module.css"

type TeamProps = {
    nome: string,
    img: string
}
type GameListProps = {
    id:string,
    campeonato: string,
    hora: string,
    time_casa: TeamProps,
    time_visitante: TeamProps
}

async function Game__list() {

    const data: GameListProps[] = await filter_games()

    return (
        <section className={styles.gameList}>
            <div className={styles.gameList__container}>
                {
                    data?.map(({id,campeonato, hora, time_casa, time_visitante }) => (
                        <Game
                            key={id}
                            slug={id}
                            campeonato={campeonato}
                            hora={hora}
                            time_casa={time_casa}
                            time_visitante={time_visitante}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Game__list