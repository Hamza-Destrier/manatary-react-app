import React from "react";
import styles from "@/styles/work.module.scss";
import img1 from "../../../../public/assets/work/hero-img-1.png";
import img2 from "../../../../public/assets/work/hero-img-2.png";
import Image from "next/image";

const showingImgIndex = 0;

const HeroFeaturedImg = () => {
  return (
    <div className={styles["hero-featured-img-container"]}>
      <Image src={[img1, img2][showingImgIndex]} alt="" layout="responsive" />
    </div>
  );
};

export default HeroFeaturedImg;
