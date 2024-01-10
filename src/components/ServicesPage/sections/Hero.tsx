import React from "react";
import styles from "@/styles/servicespage.module.scss";
import TextWithCircle from "@/components/Elements/TextWithCircle";
import Image from "next/image";
import blurImage from "../../../../public/assets/common/blur-img.png";
import { EditPencilButton } from "@/components/LandingPage/sections/Hero";
import gsap from "gsap";
import BigAnimatedHeading from "@/components/Elements/BigAnimatedHeading";

const Hero = () => {
  const heading1Ref = React.useRef<HTMLDivElement>(null);
  const heading2Ref = React.useRef<HTMLDivElement>(null);
  const heading3Ref = React.useRef<HTMLDivElement>(null);
  const heading4Ref = React.useRef<HTMLDivElement>(null);
  const bannerRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    const heading1El = heading1Ref.current;
    const heading2El = heading2Ref.current;
    const heading3El = heading3Ref.current;
    const heading4El = heading4Ref.current;
    const bannerEl = bannerRef.current;

    if (!heading1El || !heading2El || !heading3El || !heading4El || !bannerEl)
      return;

    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power4.inOut",
      },
    });

    tl.fromTo(
      [heading1El, heading2El, heading3El, heading4El],
      {
        opacity: 0,
        duration: 0,
        scale: 2,
      },
      {
        opacity: 1,
        scale: 1,
        delay: 1,
        stagger: {
          amount: 0.5,
        },
      }
    ).fromTo(
      bannerEl,
      {
        width: 0,
        opacity: 1,
        duration: 0,
      },
      {
        width: "50vw",
        opacity: 1,
        duration: 1.5,
        transformOrigin: "left 50%",
      },
      "<1"
    );
  }, []);

  return (
    <div className={styles["sp-hero-section"]}>
      <div className={styles["sph-row--1"]}>
        <div className={styles["big-text"]}>
          <div ref={heading1Ref}>Goal-Oriented</div>
          <div className={styles["line-2"]} ref={heading2Ref}>
            Websites
          </div>
        </div>
        <div className={styles["row1-text"]}>
          {`Revolutionizing Your Business with Cutting-Edge Technology Solutions`
            .split(" ")
            .map((w, i) => {
              return (
                <>
                  <BigAnimatedHeading
                    delay={4}
                    direction={i % 2 != 0 ? "right" : "left"}
                  >
                    {w}
                  </BigAnimatedHeading>{" "}
                </>
              );
            })}
        </div>
      </div>
      <div className={styles["sph-row--2"]}>
        <div className={styles["animation-object"]}>
          <TextWithCircle
            textLeft="Get in"
            textRight="Touch with us today"
            fontSize={24}
            containerStyles={{
              position: "relative",
              zIndex: 1,
            }}
            animationDelay={3.2}
          />
          <Image
            className={styles["animation-object__blur-img"]}
            src={blurImage}
            alt=""
            width={400}
          />
        </div>
        <div className={styles["big-text"]} ref={heading3Ref}>
          that help your
        </div>
        <div className={styles["bg-box"]} ref={bannerRef}></div>
      </div>
      <div className={styles["sph-row--3"]}>
        <div className={styles["big-text"]} ref={heading4Ref}>
          business
        </div>
        <EditPencilButton animationDelay={4.5} />
      </div>
    </div>
  );
};

export default Hero;
