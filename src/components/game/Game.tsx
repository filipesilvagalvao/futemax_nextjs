import Link from "next/link"
import styles from "./Game.module.css"
import HourLive from "../hourLive/HourLive"
type TeamProps = {
    nome: string,
    img: string
}
type GameProps = {
    slug: string,
    campeonato: string,
    hora: string,
    time_casa: TeamProps,
    time_visitante: TeamProps
}

function Game({ campeonato, hora, time_casa, time_visitante, slug }: GameProps) {
    return (
        <article className={styles.game}>

            <HourLive hour={hora} />

            <div className={styles.game__container}>

                <figure className={styles.game__fc}>
                    <img src={time_casa?.img || "/img_unknow/unknow.png"} alt={"Escudo " + time_casa?.nome} />
                    <figcaption>
                        {time_casa?.nome}
                    </figcaption>
                </figure>

                <div className={styles.game__versus} aria-hidden="true">
                    <i className="fa-solid fa-xmark"></i>
                </div>

                <figure className={styles.game__fc}>
                    <img src={time_visitante?.img || "/img_unknow/unknow.png"} alt={"Escudo " + time_visitante?.nome} />
                    <figcaption>
                        {time_visitante?.nome}
                    </figcaption>
                </figure>
            </div>

            <p className={styles.game__champeonship}>{campeonato}</p>
            <Link href={`/jogos-de-hoje/${slug}`} className={styles.game__link}>
                <i className="fa-solid fa-circle-play"></i>
            </Link>
        </article>
    )
}

export default Game