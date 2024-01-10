import React from "react";
import styles from "@/styles/elements.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BigAnimatedHeading from "./BigAnimatedHeading";

const getDimObj = (dim: number) => {
  return {
    minWidth: dim,
    width: dim,
    maxWidth: dim,
    minHeight: dim,
    height: dim,
    maxHeight: dim,
  };
};

interface Props {
  textLeft?: string;
  textRight?: string;
  outerCircleDim?: number;
  innerCircleDim?: number;
  outerCircleStyles?: React.CSSProperties;
  innerCircleStyles?: React.CSSProperties;
  textLeftStyles?: React.CSSProperties;
  textRightStyles?: React.CSSProperties;
  fontSize?: number;
  containerStyles?: React.CSSProperties;
  fontColor?: "LIGHT" | "DARK";
  textClass?: string;
  containerRef?: React.RefObject<HTMLDivElement>;
  animationDelay?: number;
  onLeftTextClick?: (x?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onRightTextClick?: (x?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const TextWithCircle: React.FC<Props> = ({
  textLeft = "",
  textRight = "",
  outerCircleDim = 20,
  innerCircleDim = 7,
  textLeftStyles = {},
  textRightStyles = {},
  fontSize = 29,
  containerStyles = {},
  outerCircleStyles = {},
  innerCircleStyles = {},
  fontColor = "LIGHT",
  textClass,
  containerRef,
  animationDelay = 0,
  onLeftTextClick,
  onRightTextClick,
}) => {
  const outerCircleRef = React.useRef<HTMLDivElement>(null);
  const innerCircleRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const outerCircleEl = outerCircleRef.current;
    const innerCircleEl = innerCircleRef.current;

    if (outerCircleEl && innerCircleEl) {
      const tl = gsap.timeline({
        defaults: {
          repeat: 2,
          ease: "bounce",
        },
        delay: animationDelay,
      });

      ScrollTrigger.create({
        trigger: outerCircleEl,
        start: "top 98%",
        scroller: ".__plc__",
        onEnter: () => {
          gsap.fromTo(
            outerCircleEl,
            {
              opacity: 0,
              duration: 0,
            },
            {
              opacity: 1,
              duration: 1,
              delay: animationDelay || 0.5,
              ease: "bounce",
            }
          );

          tl.to(innerCircleEl, {
            opacity: 0,
            duration: 0.5,
          }).to(innerCircleEl, {
            opacity: 1,
            duration: 1,
          });
        },
      });
    }
  }, []);

  return (
    <div
      className={
        styles["TextWithCircle"] +
        " " +
        styles[fontColor === "DARK" ? "dark-color" : "light-color"]
      }
      style={containerStyles}
      ref={containerRef}
    >
      {textLeft && (
        <div
          className={styles["TextWithCircle__left"] + " " + textClass}
          style={{ ...textLeftStyles, fontSize }}
          onClick={onLeftTextClick}
        >
          <BigAnimatedHeading direction="left" delay={animationDelay}>
            {textLeft}
          </BigAnimatedHeading>
        </div>
      )}
      <div
        className={styles["TextWithCircle__circle"]}
        style={{
          ...getDimObj(outerCircleDim),
          ...outerCircleStyles,
        }}
        ref={outerCircleRef}
      >
        <div
          className={styles["TextWithCircle__circle__inner"]}
          style={{
            ...getDimObj(innerCircleDim),
            ...innerCircleStyles,
          }}
          ref={innerCircleRef}
        ></div>
      </div>
      {textRight && (
        <div
          className={styles["TextWithCircle__right"] + " " + textClass}
          style={{ ...textRightStyles, fontSize }}
          onClick={onRightTextClick}
        >
          <BigAnimatedHeading direction="right" delay={animationDelay}>
            {textRight}
          </BigAnimatedHeading>
        </div>
      )}
    </div>
  );
};

export default TextWithCircle;
