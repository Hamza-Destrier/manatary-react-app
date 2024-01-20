import React from "react";
import styles from "@/styles/pagelayout.module.scss";
import Image from "next/image";
// import mantarayLogo from "../../../../public/assets/common/mantaray-logo-white.png";
import mantarayLogo from "../../../../public/assets/common/white-logo-full.svg";
import { MENUS } from "@/helpers/constants";
import AnimatedLink from "@/components/Elements/AnimatedLink";
import TextWithCircle from "@/components/Elements/TextWithCircle";

const FooterServices = () => {
  return (
    <div id="asdf" className={styles["footer-services"]}>
      <div className={styles["footer-services__content"]}>
        <div
          className={`${styles["footer-services__col"]} ${styles["col-logo"]}`}
        >
          <Image src={mantarayLogo} width={360} alt="" />
          <p>Compass Building, rak, uae</p>
        </div>
        <div
          className={`${styles["footer-services__col"]} ${styles["col-links"]}`}
        >
          {MENUS.map((menu, i) => {
            return (
              <div key={i} className={styles["col-links__link"]}>
                <AnimatedLink {...menu} simplerLink />
              </div>
            );
          })}
        </div>
        <div
          className={`${styles["footer-services__col"]} ${styles["col-big-link"]}`}
        >
          <TextWithCircle
            textLeft="SERVICES"
            textLeftStyles={{
              fontFamily: "Bebas Neue",
            }}
            fontSize={100}
            textClass={styles["footer-work__content__title__text"]}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterServices;
