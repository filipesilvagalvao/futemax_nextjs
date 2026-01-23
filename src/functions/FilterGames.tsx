import { Players } from "./Players"

type TeamProps = {
    nome: string,
    img: string
}

type GameApiProps = {
    id:string,
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

    const games = data.filter((game)=>{
        
       return Object.entries(Players).some(([key,value])=>{   
            return game.canais.includes(key)
        })
        
    })
    
    return games
}