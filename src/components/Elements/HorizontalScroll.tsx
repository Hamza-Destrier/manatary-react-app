import { ExtendedCardProps } from "@/types";
import React from "react";
import styles from "@/styles/elements.module.scss";
import Card from "./Card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextWithCircle from "./TextWithCircle";
import greenBlur from "../../../public/assets/common/blur-2.png";
import whiteBlur from "../../../public/assets/common/blur-img.png";
import Image from "next/image";
import useIsMobile from "@/helpers/hooks/useIsMobile";

interface Props {
  cards: ExtendedCardProps[];
  bgTitle?: string;
  headerTitle?: string;
  scrollTowards?: "left" | "right";
  titleFontSize?: number;

  blurImg?: "white" | "green";
}

// BCN = base class name
const BCN = `horizontal-scroll-`;

const HorizontalScroll: React.FC<Props> = ({
  cards,
  scrollTowards = "left",
  bgTitle,
  headerTitle,
  titleFontSize,
  blurImg,
}) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const getScrollAmount = () => {
    let racesWidth = containerRef.current?.scrollWidth || 0;
    return -(racesWidth - window.innerWidth);
  };

  React.useLayoutEffect(() => {
    const wrapperEl = wrapperRef.current;
    const containerEl = containerRef.current;

    if (!wrapperEl || !containerEl) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tween = gsap.to(containerEl, {
        x: () => getScrollAmount(),
        duration: 3,
        ease: "none",
        smoothChildTiming: true,
      });

      ScrollTrigger.create({
        trigger: wrapperEl,
        start: "top 30%",
        scroller: ".__plc__",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
      });
    });

    return () => {
      ctx.revert();
    };
  }, [cards, scrollTowards]);

  return (
    <div className={styles["hs-wrapper"]} ref={wrapperRef}>
      {bgTitle && !isMobile && (
        <div
          className={styles[BCN + "title"]}
          style={{
            fontSize: titleFontSize + "px",
            lineHeight: titleFontSize + "px",
          }}
        >
          {bgTitle}
        </div>
      )}
      {headerTitle && (
        <div className={styles[BCN + "header"]}>
          <TextWithCircle textRight={headerTitle} />
        </div>
      )}
      {blurImg && (
        <div className={styles[BCN + "img-blur"]}>
          <Image src={blurImg == "green" ? greenBlur : whiteBlur} alt="" />
        </div>
      )}
      <div className={styles[BCN + "wrapper"]}>
        <div className={styles[BCN + "container"]} ref={containerRef}>
          {cards.map((cardProps, i) => {
            return <Card key={i} {...cardProps} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;

// onUpdate: (self) => {
//   // console.log(Math.floor(self.progress * 100) + "% scrolled");
//   const MAX = 5000;
//   const SMAX = 0.7;
//   let v = Math.abs(self.getVelocity());
//   v > MAX && (v = MAX);
//   // const s = 1 + __v / MAX;
//   let s = 1 - v / MAX;
//   s < SMAX && (s = SMAX);

//   console.log({ s, v });

//   Array.from(containerEl.children).forEach((el) => {
//     gsap.to(el, {
//       scale: s,
//       duration: 0.1,
//       overwrite: true,
//     });
//   });
// },
// onScrubComplete: () => {
//   console.log("Scroll has stopped!");
//   Array.from(containerEl.children).forEach((el) => {
//     gsap.to(el, {
//       scale: 1,
//       duration: 0.5,
//       ease: "power1.out",
//       overwrite: true,
//     });
//   });
// },
