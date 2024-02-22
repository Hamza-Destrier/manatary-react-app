import React from "react";
import styles from "@/styles/elements.module.scss";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import TextWithCircle from "./TextWithCircle";
import Image from "next/image";
import greenBlur from "/public/assets/common/blur-2.png";
import whiteBlur from "/public/assets/common/blur-img.png";
import { ALL_BLOGS } from "../Blogs/blogsData";

const CardsCarousel = ({ blurImg }: { blurImg?: "white" | "green" }) => {
  return (
    <div className={styles["cards-carousel"]}>
      <div className={styles["cards-carousel__header"]}>
        <TextWithCircle textRight={"Blogs"} rightLink="/blogs/" />
      </div>

      <div className={styles["cards-carousel__bg-text"]}>BLOGS</div>

      <div className={styles["cards-carousel__img-blur"]}>
        <Image src={blurImg == "white" ? whiteBlur : greenBlur} alt="" />
      </div>

      <Swiper
        breakpoints={{
          1850: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
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
        className={styles["swiper-container-classname"]}
      >
        {ALL_BLOGS.map(({ id, details }, i) => {
          const cardProps = {
            title: details.title,
            description: details.subTitle,
            headerText: `Blog No.${i + 1}`,
          };

          return (
            <SwiperSlide key={id}>
              <Card
                {...cardProps}
                link={"/blogs/" + id}
                cardClassName={styles["slider-blog-card"]}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CardsCarousel;
