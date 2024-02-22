import React from "react";
import styles from "@/styles/elements.module.scss";
import Card from "./Card";
import { ALL_BLOGS } from "../Blogs/blogsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const CardsCarousel = () => {
  return (
    <Swiper
      breakpoints={{
        1440: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1000: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        800: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      style={{
        paddingLeft: "20px",
      }}
      wrapperClass={styles["carousel-wrapper-classname"]}
    >
      {ALL_BLOGS.map(({ id, details }, i) => {
        const cardProps = {
          title: details.title,
          description: details.subTitle,
          headerText: `Blog No.${i + 1}`,
        };

        return (
          <SwiperSlide key={id} className={styles["asdfasdfasdf"]}>
            <Card
              {...cardProps}
              link={"/blogs/" + id}
              cardClassName={styles["slider-blog-card"]}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CardsCarousel;
