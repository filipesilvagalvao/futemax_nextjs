import Game__list from "@/components/game__list/Game__list";
import Slider from "@/components/slider/Slider";
import Titleh1 from "@/components/titleh1/Titleh1";
import Titleh2 from "@/components/titleh2/Titleh2";
import { filter_games } from "@/functions/FilterGames";
import Text from "@/components/text/Text";
import Titlteh3 from "@/components/titleh3/Titlteh3";

export default function Home() {
  filter_games()
  return (
    <main>
      <Titleh1 text="Futemax é: jogos de hoje, futebol ao vivo e canais de tv" />
      <Slider />
      <Titleh2 text="Lista dos jogos de hoje" />
      <Game__list />
      <Text paragraphs={[
        "Quer saber onde assistir futebol ao vivo grátis? O FuteMAX oficial é o melhor site para ver todos os jogos online com imagem em alta qualidade e sem travar. Aqui você encontra Campeonato Brasileiro (Séries A, B, C e D), Copa do Brasil, Libertadores, Sul-Americana e os maiores campeonatos da Europa: Premier League, La Liga, Bundesliga, Serie A Italiana e Ligue 1, além de Champions League, Europa League, Nations League, Eliminatórias e amistosos internacionais.",

        "E não é só futebol: o FuteMAX também transmite NBA, NBB, vôlei, tênis, Fórmula 1 e muito mais — tudo grátis e com links alternativos para você nunca perder o jogo do seu time."
      ]}

      />
      <Titlteh3/>
      <Text paragraphs={["⚠️ Aviso: o site contém anúncios pop-up que ajudam a manter o FuteMAX no ar gratuitamente. Basta abrir o pop-up e depois fechá-lo para continuar assistindo sem problemas."]}/>
    </main>
  );
}
