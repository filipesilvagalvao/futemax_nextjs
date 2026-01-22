"use client"
import styles from "./Slider.module.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Link from "next/link"
import { Grid, Keyboard, Mousewheel, Navigation } from "swiper/modules"
import { useState } from "react"
import Channels from "@/functions/Channels"

function Slider() {
  const [ready, setReady] = useState(false)
  return (
    <section className={styles.slider}>
      <Swiper
        slidesPerView={14}
        grid={{ rows: 2, fill: "row" }}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Mousewheel, Keyboard, Grid]}
        onInit={() => setReady(true)}
        className={`${styles.mySwiper} ${ready ? styles.initialized : ""}`}

        breakpoints={{
          0: {
            slidesPerView: 3,
            grid: { rows: 2 }
          },
          640: {
            slidesPerView: 5,
            grid: { rows: 2 }
          },
          1024: {
            slidesPerView: 7,
            grid: { rows: 2 }
          },
          1280: {
            slidesPerView: 12,
            grid: { rows: 2 }
          },
          1875: {
            slidesPerView: 14,
            grid: { rows: 2 }
          }
        }}
      >
        {Channels.map((channel) => (
          <SwiperSlide key={channel.name} className={styles.slider__item}>
            <Link href={"/canais/"+channel.slug}>
              <img src={`/thumb/${channel.path_img}`} alt={channel.name} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Slider