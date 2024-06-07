import * as React from 'react';
import * as styles from "./styles.module.scss"
import '../../sass/basics.scss'

import GameCard from "../gameCard"
import * as useWindowDimensions from '../../hooks/useWindowDimensions';

const GamesSection = () => {
  const { width } = useWindowDimensions.default();
  const games = [
    { name: 'TinoRun', img: require("../../images/tino_run_banner.png").default, url: 'https://apps.apple.com/mx/app/tino-run/id6470781356' },
    { name: 'SoupKittens', img: require("../../images/soup_kittens_banner.png").default, url: 'https://apps.apple.com/mx/app/soup-kittens/id6475792970' },
  ]
  // let direction = "horizontal"
  let direction = width > 912 || width === undefined ? "horizontal" : "vertical"

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>NUESTROS <b className={styles.highlight}>JUEGOS</b></h1>
      <div id="games" className={styles.gamesGallery}>
          {
            games.map((game, index) => (
              <GameCard gameImage={game.img} gameUrl={game.url} gameName={game.name} key={index}/>
            ))
          }
      </div>
    </div>
  )
}

export default GamesSection