import React from "react";
import styles from "@/styles/pagelayout.module.scss";
import Image, { StaticImageData } from "next/image";
import envelopIcon from "../../../../public/assets/common/envelope.png";
import chatIcon from "../../../../public/assets/common/chat.png";
import pinIcon from "../../../../public/assets/common/pin.png";
import TextWithCircle from "@/components/Elements/TextWithCircle";
import BigAnimatedHeading from "@/components/Elements/BigAnimatedHeading";

const LetsTalkCard = ({
  headerText,
  footerText,
  img,
}: {
  headerText: string;
  footerText: string;
  img: StaticImageData;
}) => {
  return (
    <div className={styles["lets-talk-card"]}>
      <div className={styles["lets-talk-card__header"]}>
        <Image src={img} alt="" />
        <div>{headerText}</div>
      </div>
      <div className={styles["lets-talk-card__footer"]}>
        <TextWithCircle
          textRight={footerText}
          fontSize={26}
          textClass={styles["talk-card-text"]}
        />
      </div>
    </div>
  );
};

const LetsTalk = () => {
  return (
    <div className={styles["lets-talk-section"]}>
      <div className={styles["lets-talk-section__content"]}>
        <h2>
          <BigAnimatedHeading>Let&apos;s Talk</BigAnimatedHeading>
        </h2>
        <div className={styles["lets-talk-section__content__row"]}>
          <div className={`${styles["col"]} ${styles["col-1"]}`}>
            <LetsTalkCard
              headerText="Email Us At"
              footerText="let'stalk@Mantaraydigital.tec"
              img={envelopIcon}
            />
          </div>
          <div className={`${styles["col"]} ${styles["col-2"]}`}></div>
          <div className={`${styles["col"]} ${styles["col-3"]}`}>
            <LetsTalkCard
              headerText="Whatsapp"
              footerText="+971 56 955 1452"
              img={chatIcon}
            />
          </div>
          <div className={`${styles["col"]} ${styles["col-4"]}`}></div>
          <div className={`${styles["col"]} ${styles["col-5"]}`}>
            <LetsTalkCard
              headerText="Visit us"
              footerText="Compass Building, RAK, UAE"
              img={pinIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
