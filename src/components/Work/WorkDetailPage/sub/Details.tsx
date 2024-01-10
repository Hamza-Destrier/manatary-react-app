import React from "react";
import styles from "@/styles/work.module.scss";
import Image from "next/image";
import detailImgLeft from "../../../../../public/assets/work/details-img-left.png";
import detailImgRight from "../../../../../public/assets/work/details-img-right.png";
import TextWithCircle from "@/components/Elements/TextWithCircle";
import BigAnimatedHeading from "@/components/Elements/BigAnimatedHeading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getScrollTriggerConfigs } from "@/helpers/animations";
import { Details } from "@/types";

const getTween = (el: Element) => {
  const posVal = "100px";
  return gsap.fromTo(
    el,
    { top: posVal, opacity: 0, duration: 0 },
    { top: "0", opacity: 1, duration: 0.5 }
  );
};

const Details = ({ details }: { details: Details }) => {
  const img1Ref = React.useRef<HTMLImageElement>(null);
  const img2Ref = React.useRef<HTMLImageElement>(null);
  const descRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const img1El = img1Ref.current;
    const img2El = img2Ref.current;
    const descEl = descRef.current;

    if (img1El && img2El && descEl) {
      [img1El, img2El, descEl].forEach((el) => {
        el.style.position = "relative";
        el.style.display = "inline-block";
        const tween = getTween(el);
        const configs = getScrollTriggerConfigs(el, tween);
        ScrollTrigger.create(configs);
      });
    }
  }, []);

  return (
    <div className={styles["details"]}>
      <div className={styles["details__col-left"]}>
        <Image
          src={details.colLeftImg}
          alt=""
          layout="responsive"
          ref={img1Ref}
        />
      </div>
      <div className={styles["details__col-right"]}>
        <Image
          src={details.colRightImg}
          alt=""
          layout="responsive"
          ref={img2Ref}
        />
        <div className={styles["details__col-right__title"]}>
          {details.heading.split(" ").map((w, i) => {
            return (
              <>
                <BigAnimatedHeading direction={i % 2 != 0 ? "right" : "left"}>
                  {w}
                </BigAnimatedHeading>{" "}
              </>
            );
          })}
        </div>
        <div className={styles["details__col-right__description"]}>
          <TextWithCircle
            textRight={(details.subHeading || "Challenge").toUpperCase()}
            fontSize={24}
          />
          <span ref={descRef}>{details.description}</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
