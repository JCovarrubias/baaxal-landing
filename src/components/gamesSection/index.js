import React, { useState, useEffect } from 'react';
import * as styles from "./styles.module.scss"
import '../../sass/basics.scss'
import 'swiper/css';
import "swiper/css/pagination";

import GameCard from "../gameCard"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const GamesSection = () => {
  const games = [
    { name: 'Driver Truck', img: require("../../images/driverTruckCard.png").default },
    { name: 'Moto Circle', img: require("../../images/motoCircleCard.png").default },
    { name: 'Almacen Runner', img: require("../../images/almacenRunnerCard.png").default },
    { name: 'Shake Soda', img: require("../../images/shakeSodaCard.png").default },
  ]

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let direction = windowWidth > 912 ? "horizontal" : "vertical"

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
              <SwiperSlide key={index}>
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