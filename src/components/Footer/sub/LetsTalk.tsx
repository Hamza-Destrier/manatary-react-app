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
  link,
  linkTarget = "",
}: {
  headerText: string;
  footerText: string;
  img: StaticImageData;
  link: string;
  linkTarget?: "_blank" | "";
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
          rightLink={link}
          rightLinkTarget={linkTarget}
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
              footerText="letstalk@Mantaraydigital.tec"
              img={envelopIcon}
              link="mailto:letstalk@Mantaraydigital.tec"
            />
          </div>
          <div className={`${styles["col"]} ${styles["col-2"]}`}></div>
          <div className={`${styles["col"]} ${styles["col-3"]}`}>
            <LetsTalkCard
              headerText="Whatsapp"
              footerText="+971 56 955 1452"
              img={chatIcon}
              link="https://wa.me/971569551452"
              linkTarget="_blank"
            />
          </div>
          <div className={`${styles["col"]} ${styles["col-4"]}`}></div>
          <div className={`${styles["col"]} ${styles["col-5"]}`}>
            <LetsTalkCard
              headerText="Visit us"
              footerText="Compass Building, RAK, UAE"
              img={pinIcon}
              link="https://maps.app.goo.gl/DbKiPTtvGXHFGXMCA"
              linkTarget="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
