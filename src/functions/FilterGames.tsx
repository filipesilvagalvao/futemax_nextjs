import path from "path"
import DateToday from "./DateToday"
import { Players } from "./Players"
import fs from "fs"

type TeamProps = {
    nome: string,
    img: string
}

type GameApiProps = {
    id: string,
    campeonato: string,
    hora: string,
    time_casa: TeamProps,
    time_visitante: TeamProps,
    canais: string[]
}

const apiUrl = process.env.API_URL!

export const filter_games = async () => {

    const response = await fetch(apiUrl, {
        next: { revalidate: 18000 } //5 horas
    })

    const data: GameApiProps[] = await response.json()

    const games = data.filter((game) => {

        return Object.entries(Players).some(([key]) => {
            return game.canais.includes(key)
        })

    })

    const gamePath = path.join(process.cwd(), "src", "jogos", DateToday())


    !fs.existsSync(gamePath) && fs.mkdirSync(gamePath)

    fs.writeFileSync(`${gamePath}/jogos.json`, JSON.stringify(games, null, 2), "utf-8")
    return games
}

