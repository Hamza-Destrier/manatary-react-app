import React from "react";
import styles from "@/styles/work.module.scss";
import HeroBlogImg from "../../sub/HeroBlogImg";
import { EditPencilButton } from "@/components/LandingPage/sections/Hero";
import BigAnimatedHeading from "@/components/Elements/BigAnimatedHeading";

interface IProps {
  title: string;
}

const Hero = ({ title }: IProps) => {
  return (
    <div className={styles["hero"]}>
      <div className={styles["hero__title"]}>
        <BigAnimatedHeading direction="right">{title}</BigAnimatedHeading>
      </div>
      <div className={styles["hero__scroll"]}>
        <BigAnimatedHeading>Scroll For Details</BigAnimatedHeading>
      </div>
      <div className={styles["hero__contact-btn"]}>
        <EditPencilButton />
      </div>
      <HeroBlogImg />
    </div>
  );
};

export default Hero;
