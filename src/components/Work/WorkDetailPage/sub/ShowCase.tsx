import React from "react";
import styles from "@/styles/work.module.scss";
import showcaseImg1 from "../../../../../public/assets/work/showcase-img-1.png";
import showcaseImg2 from "../../../../../public/assets/work/showcase-img-2.png";
import showcaseImg3 from "../../../../../public/assets/work/showcase-img-3.png";
import Image from "next/image";
import TextWithCircle from "@/components/Elements/TextWithCircle";
import blurImgOrange from "../../../../../public/assets/common/blur-3.png";
import BigAnimatedHeading from "@/components/Elements/BigAnimatedHeading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getScrollTriggerConfigs } from "@/helpers/animations";
import { Showcase } from "@/types";

const descText = `Our mood are a glimpse into the soul company, a visual encapsulation of our aspirations, and a roadmap to our future endeavors. We use a black background, image distortion, integrate floating 3D elements, utilize oversized fonts, and a vibrant pop of color to stand out against the dark background. This creates an immersive experience that envelops users in the brand's narrative while evoking emotions.`;

const getTween = (el: Element) => {
  const posVal = "100px";
  return gsap.fromTo(
    el,
    { top: posVal, opacity: 0, duration: 0 },
    { top: "0", opacity: 1, duration: 0.5 }
  );
};

const ShowCase = ({ showcase }: { showcase: Showcase }) => {
  const img1Ref = React.useRef<HTMLImageElement>(null);
  const img2Ref = React.useRef<HTMLImageElement>(null);
  const img3Ref = React.useRef<HTMLImageElement>(null);

  const { description, heading, img1, img2, img3, subHeading } = showcase;

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const img1El = img1Ref.current;
    const img2El = img2Ref.current;
    const img3El = img3Ref.current;

    if (img1El && img2El && img3El) {
      [img1El, img2El, img3El].forEach((el) => {
        el.style.position = "relative";
        el.style.display = "inline-block";
        const tween = getTween(el);
        const configs = getScrollTriggerConfigs(el, tween);
        ScrollTrigger.create(configs);
      });
    }
  }, []);

  return (
    <div className={styles["showcase"]}>
      <div className={styles["showcase-content"]}>
        <div className={styles["showcase-imgs-container"]}>
          <div className={styles["row"] + " " + styles["row--1"]}>
            <Image
              src={img1}
              alt=""
              className={
                styles["showcase-img"] + " " + styles["showcase-img--1"]
              }
              ref={img1Ref}
            />
            <br />
            <Image
              src={img2}
              alt=""
              className={
                styles["showcase-img"] + " " + styles["showcase-img--2"]
              }
              ref={img2Ref}
            />
          </div>
          <div className={styles["row"] + " " + styles["row--2"]}>
            <Image
              src={img3}
              alt=""
              className={
                styles["showcase-img"] + " " + styles["showcase-img--3"]
              }
              ref={img3Ref}
            />
          </div>
        </div>
        <div className={styles["showcase-title"]}>
          {heading.split(" ").map((w, i) => {
            return (
              <>
                <BigAnimatedHeading direction={i % 2 != 0 ? "right" : "left"}>
                  {w}
                </BigAnimatedHeading>{" "}
              </>
            );
          })}
        </div>

        <div className={styles["showcase-details"]}>
          <TextWithCircle
            textRight={subHeading || "MOOD"}
            fontSize={24}
            outerCircleDim={16}
            innerCircleDim={5}
            innerCircleStyles={{ backgroundColor: "#fff" }}
          />
          <span>
            {description.split(" ").map((w, i) => {
              return (
                <>
                  <BigAnimatedHeading direction={i % 2 != 0 ? "right" : "left"}>
                    {w}
                  </BigAnimatedHeading>{" "}
                </>
              );
            })}
          </span>
        </div>
      </div>
      {/* blur imgs */}
      {[1, 2].map((n) => {
        return (
          <Image
            key={n}
            className={`${styles["orange-blur-img"]} ${
              styles[`orange-blur-img--${n}`]
            }`}
            src={blurImgOrange}
            alt=""
          />
        );
      })}
      {/* /blur imgs */}
    </div>
  );
};

export default ShowCase;
