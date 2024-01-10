import React from "react";
import styles from "@/styles/elements.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hexagon = () => {
  return (
    <svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.559017 6L3.30902 0.5H10.691L13.441 6L10.691 11.5H3.30902L0.559017 6Z"
        stroke="white"
      />
    </svg>
  );
};

const HorizontalLine = () => {
  const lineRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lineEl = lineRef.current;
    const tween = gsap.to(lineEl, {
      width: `calc(100% - 28px - 50px)`,
      duration: 0.1,
      ease: "power4.out",
    });

    if (lineEl) {
      ScrollTrigger.create({
        trigger: lineEl,
        animation: tween,
        start: "-30px 95%",
        end: "-30px 95%",
        scroller: ".__plc__",
        toggleActions: "restart none reverse none",
      });
    }
  }, []);

  const shapeClass = "horizontal-line__shape";
  const shapeLeftClass = `${styles[shapeClass]} ${
    styles[shapeClass + "--left"]
  }`;
  const shapeRightClass = `${styles[shapeClass]} ${
    styles[shapeClass + "--right"]
  }`;

  return (
    <div className={styles["horizontal-line"]}>
      <div className={shapeLeftClass}>
        <Hexagon />
      </div>
      <div className={styles["horizontal-line__line"]} ref={lineRef} />
      <div className={shapeRightClass}>
        <Hexagon />
      </div>
    </div>
  );
};

export default HorizontalLine;
