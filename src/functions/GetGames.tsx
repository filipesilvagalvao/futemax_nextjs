import fs from "fs/promises"
import path from "path"

type TeamProps = {
    nome: string,
    img: string
}

type GetApiProps = {
    id: string,
    campeonato: string,
    hora: string,
    time_casa: TeamProps,
    time_visitante: TeamProps,
    canais: string[]
}

const GetGames = async (date: string) => {
  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "jogos",
      date,
      "jogos.json"
    )

    const file = await fs.readFile(filePath, "utf-8")
    const data:GetApiProps[] = JSON.parse(file)
    return data
  } catch (err) {
    console.error("Erro ao ler jogos:", err)
    return null
  }
}

export default GetGames
