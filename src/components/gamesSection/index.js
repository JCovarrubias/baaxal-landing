import * as React from "react"
import * as styles from "./styles.module.scss"
import '../../sass/basics.scss'
import 'swiper/css';
import "swiper/css/pagination";

import Container from "../container"
import GameCard from "../gameCard"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const GamesSection = () => {
  const games = [
    { name: 'Driver Truck', img: require("../../images/motoCircleCard.png").default },
    { name: 'Moto Circle', img: require("../../images/motoCircleCard.png").default },
    { name: 'Almacen Runner', img: require("../../images/motoCircleCard.png").default },
  ]
  console.log(games.length)
  return (
    // <Container>
      <div id="games" className={styles.container}>
        <Swiper
          slidesPerView={2}
          pagination={{
            clickable: false,
          }}
          modules={[Pagination]}
        >
          {
            games.map((game, index) => (
              <SwiperSlide>
                <GameCard gameImage={game.img} key={index}/>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    // </Container>
  )
}

export default GamesSection