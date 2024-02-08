import React from "react";
import styles from "@/styles/pagelayout.module.scss";
import TextWithCircle from "@/components/Elements/TextWithCircle";
import AnimatedLink from "@/components/Elements/AnimatedLink";
import { SOCIAL_MENUS } from "@/helpers/constants";
import Input from "@/components/Elements/Input";
import Image from "next/image";
import blurImage from "../../../../public/assets/common/blur-img.png";

const FooterWork = () => {
  return (
    <div className={styles["footer-work"]}>
      <Image
        className={styles["footer-work__blur-img"]}
        src={blurImage}
        alt=""
      />
      <div className={styles["footer-work__content"]}>
        <div className={styles["footer-work__content__title"]}>
          <TextWithCircle
            textLeft="WORK"
            textLeftStyles={{
              fontFamily: "Bebas Neue",
            }}
            fontSize={100}
            textClass={styles["footer-work__content__title__text"]}
            leftLink="/work"
          />
        </div>
        <div className={styles["footer-work__content__news-letter"]}>
          <AnimatedLink title="NEWSLETTER" link="#" simplerLink />
        </div>
        <div className={styles["footer-work__content__email-links"]}>
          <div className={styles["footer-work__email-col"]}>
            <Input />
          </div>
          <div className={styles["footer-work__links-col"]}>
            {SOCIAL_MENUS.map((menu, i) => {
              return (
                <div key={i} className={styles["social-media-link"]}>
                  <AnimatedLink {...menu} simplerLink />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles["footer-work__content__copyright"]}>
          @2024 Mantaray Digital Solutions
        </div>
      </div>
    </div>
  );
};

export default FooterWork;
