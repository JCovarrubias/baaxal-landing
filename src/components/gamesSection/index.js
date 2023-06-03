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
    { name: 'Tino Run', img: require("../../images/tino_banner.png").default },
    { name: 'Soup', img: require("../../images/soup_banner.png").default },
    { name: 'Playful', img: require("../../images/playful_banner.png").default },
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
                <GameCard gameImage={game.img} key={index}/>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}

export default GamesSection