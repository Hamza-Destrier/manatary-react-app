import { GenericElements } from "@/types";
import React from "react";
import styles from "@/styles/elements.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Direction = "left" | "right";

const BigAnimatedHeading = ({
  children,
  direction = "left",
  delay = 0,
  duration = 1,
}: {
  children: GenericElements;
  direction?: Direction;
  delay?: number;
  duration?: number;
}) => {
  const wrapperRef = React.useRef<HTMLSpanElement>(null);
  const textRef = React.useRef<HTMLSpanElement>(null);

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wrapperEl = wrapperRef.current;
    const textEl = textRef.current;

    if (wrapperEl && textEl) {
      textEl.style[direction] = "120%";
      const tween = gsap.fromTo(
        textEl,
        {
          [direction]: `110%`,
          opacity: 1,
          duration: 0,
        },
        {
          [direction]: `0`,
          duration,
          ease: "power2",
          delay,
        }
      );

      ScrollTrigger.create({
        trigger: wrapperEl,
        animation: tween,
        start: "top 98%",
        end: "top 98%",
        scroller: ".__plc__",
        toggleActions: "restart none reverse none",
      });
    }
  }, [direction, delay, duration]);

  return (
    <span className={styles["abt-wrapper"]} ref={wrapperRef}>
      <span ref={textRef}>{children}</span>
    </span>
  );
};

export default BigAnimatedHeading;
