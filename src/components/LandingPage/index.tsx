"use client";
import React from "react";
import styles from "@/styles/landingpage.module.scss";
import Hero from "./sections/Hero";
import AboutUs from "./sections/AboutUs";
import WhatWeDo from "./sections/WhatWeDo";
import blurImg from "../../../public/assets/common/blur-img.png";
import Image from "next/image";
import PageLayout from "../Elements/PageLayout";
import HorizontalLine from "../Elements/HorizontalLine";
import { ALL_BLOGS } from "../Blogs/blogsData";
import HorizontalScroll from "../Elements/HorizontalScroll";

const LandingPage = () => {
  return (
    <PageLayout className={styles["landing-page"]}>
      <div className={styles["landing-page__content"]}>
        <Hero />
        <AboutUs />
        <WhatWeDo />
        <HorizontalLine />
        {/* Blogs section */}
        <HorizontalScroll
          cards={ALL_BLOGS.map(({ details }, i) => ({
            title: details.title,
            description: details.subTitle,
            headerText: `Blog No.${i + 1}`,
          }))}
          bgTitle="BLOGS"
          titleFontSize={500}
          blurImg="white"
          headerTitle="Blogs"
        />
        {/* <HorizontalScroll
          cards={ALL_BLOGS.map(({ details }, i) => ({
            title: details.title,
            description: details.subTitle,
            headerText: `Blog No.${i + 1}`,
          }))}
        /> */}
        <HorizontalLine />
        {/* blur imgs */}
        {[1, 2, 3].map((n) => {
          return (
            <Image
              key={n}
              className={`${styles["blur-img"]} ${styles[`blur-img--${n}`]}`}
              src={blurImg}
              alt=""
            />
          );
        })}
        {/* /blur imgs */}
      </div>
    </PageLayout>
  );
};

export default LandingPage;
