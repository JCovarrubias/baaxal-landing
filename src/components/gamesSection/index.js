import * as React from 'react';
import * as styles from "./styles.module.scss"
import '../../sass/basics.scss'
import 'swiper/css';
import "swiper/css/pagination";

import GameCard from "../gameCard"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
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
      <div id="games" className={styles.swiper}>
        <Swiper
          slidesPerView={2}
          pagination={{
            clickable: false,
          }}
          modules={[Pagination]}
          direction={direction}
          className={styles.swiper}
        >
          {
            games.map((game, index) => (
              <SwiperSlide customStyles={styles.swiper} key={index}>
                <GameCard gameImage={game.img} gameUrl={game.url} key={index}/>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}

export default GamesSection