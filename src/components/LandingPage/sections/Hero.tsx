import React from "react";
import styles from "@/styles/landingpage.module.scss";
import TextWithCircle from "@/components/Elements/TextWithCircle";
import heroObject from "../../../../public/assets/common/hero-object.png";
import Image from "next/image";
import blurImage from "../../../../public/assets/common/blur-img.png";
import meshBg from "../../../../public/assets/common/mesh-bg.svg";
import Link from "next/link";
import gsap from "gsap";
import useIsMobile from "@/helpers/hooks/useIsMobile";

// hsr = hero section row
const hsr = "hero-section__row";

const EditPencilIcon = () => {
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.923 9.72015C13.075 9.59743 13.2978 9.62106 13.4206 9.77319L23.1351 21.8049C23.1365 21.8066 23.1377 21.8086 23.1391 21.8104C23.1416 21.8137 23.1439 21.8171 23.1464 21.8205C23.1526 21.829 23.1583 21.8376 23.1636 21.8466C23.1657 21.8501 23.1678 21.8536 23.1698 21.8572C23.1766 21.8695 23.1828 21.8819 23.188 21.8949C23.1883 21.8959 23.1886 21.8968 23.189 21.8978C23.1938 21.91 23.1977 21.9225 23.2012 21.9351C23.2023 21.9392 23.2032 21.9433 23.2041 21.9473C23.2066 21.9582 23.2086 21.9691 23.2101 21.9802C23.2105 21.9827 23.2112 21.985 23.2115 21.9875L23.7609 26.867C23.7837 27.0697 23.7026 27.2672 23.5438 27.3953C23.4363 27.4821 23.3052 27.5274 23.1718 27.5274C23.1082 27.5274 23.0441 27.5171 22.9817 27.4961L18.3275 25.9308C18.3253 25.9301 18.3232 25.9289 18.3209 25.9281C18.3102 25.9243 18.2999 25.92 18.2896 25.9152C18.2859 25.9134 18.2822 25.9118 18.2786 25.9098C18.2667 25.9037 18.2552 25.8971 18.244 25.8897C18.2433 25.8892 18.2426 25.8889 18.2419 25.8884C18.2303 25.8806 18.2193 25.8718 18.2087 25.8626C18.2057 25.86 18.2028 25.8572 18.1998 25.8545C18.1921 25.8473 18.1848 25.8399 18.1777 25.832C18.175 25.829 18.1722 25.826 18.1695 25.8229C18.168 25.8211 18.1664 25.8195 18.1649 25.8177L16.3822 23.6097C16.2595 23.4577 16.2833 23.2349 16.4353 23.1122C16.5874 22.9894 16.8101 23.0131 16.9329 23.1652L18.4934 25.0978L20.4278 23.5359L22.3622 21.974L12.87 10.2177C12.7472 10.0657 12.771 9.84291 12.923 9.72015ZM20.8723 24.0867L19.1643 25.4657L23.0374 26.7682L22.5803 22.7076L20.8723 24.0867Z"
        fill="white"
      />
      <path
        d="M3.99104 6.04214L6.79063 3.78181C7.38903 3.29861 8.26895 3.39238 8.7522 3.99083L10.8288 6.56284L12.0156 8.03271C12.1384 8.18479 12.1147 8.40757 11.9626 8.53034C11.8106 8.65305 11.5878 8.62942 11.465 8.4773L10.5004 7.28269L8.56602 8.84455L6.63159 10.4065L15.5191 21.4139C15.6419 21.566 15.6181 21.7887 15.4661 21.9115C15.4006 21.9644 15.3221 21.9901 15.244 21.9901C15.1408 21.9901 15.0383 21.945 14.9684 21.8585L5.85865 10.5757L3.78202 8.00372C3.29891 7.40527 3.39264 6.5253 3.99104 6.04214ZM4.33269 7.55913L6.18705 9.85578L8.12148 8.29393L10.0559 6.73202L8.20153 4.43537C7.96357 4.14056 7.52998 4.09433 7.23521 4.33244L4.43567 6.59282C4.14086 6.83078 4.09468 7.26432 4.33269 7.55913Z"
        fill="white"
      />
    </svg>
  );
};

export const EditPencilButton = ({
  className,
  animationDelay = 0,
}: {
  className?: string;
  animationDelay?: number;
}) => {
  const btnRef = React.useRef<HTMLAnchorElement>(null);

  React.useLayoutEffect(() => {
    const btnEl = btnRef.current;

    if (!btnEl) return;

    gsap.fromTo(
      btnEl,
      {
        scale: 0,
        y: 100,
        duration: 0,
      },
      {
        scale: 1,
        y: 0,
        duration: 2,
        delay: animationDelay,
        ease: "elastic.inOut",
      }
    );
  }, [animationDelay]);

  return (
    <Link href={"contact"} ref={btnRef}>
      <div className={`${styles["edit-pencil-button"]} ${className}`}>
        <EditPencilIcon />
      </div>
    </Link>
  );
};

const Hero = () => {
  const heading1Ref = React.useRef<HTMLDivElement>(null);
  const heading2Ref = React.useRef<HTMLDivElement>(null);
  const heading3Ref = React.useRef<HTMLDivElement>(null);

  const bannerRef = React.useRef<HTMLSpanElement>(null);
  const descRef = React.useRef<HTMLDivElement>(null);
  const descMbRef = React.useRef<HTMLDivElement>(null);

  const animatedObjectRef = React.useRef<HTMLDivElement>(null);
  const animatedObjectMeshRef = React.useRef<HTMLImageElement>(null);

  const isMobile = useIsMobile(992);

  React.useLayoutEffect(() => {
    const bannerEl = bannerRef.current;
    const descEl = descRef.current;
    const descMbEl = descMbRef.current;

    const heading1El = heading1Ref.current;
    const heading2El = heading2Ref.current;
    const heading3El = heading3Ref.current;

    const animatedObjectEl = animatedObjectRef.current;
    const animatedObjectMeshEl = animatedObjectMeshRef.current;

    if (
      !bannerEl ||
      !descEl ||
      !descMbEl ||
      !heading1El ||
      !heading2El ||
      !heading3El ||
      !animatedObjectEl ||
      !animatedObjectMeshEl
    )
      return;
    // return;

    heading3El.style.display = "inline-block";

    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power4.inOut",
      },
    });

    tl.fromTo(
      animatedObjectEl,
      {
        opacity: 0,
        duration: 0,
        scale: 3,
      },
      {
        opacity: 1,
        scale: 1,
        delay: 0.5,
        duration: isMobile ? 0 : 1,
      }
    )
      .fromTo(
        animatedObjectEl,
        {
          x: "-50%",
          y: "-50%",
          top: "50%",
          left: "50%",
          duration: 0,
        },
        {
          x: 0,
          y: 0,
          top: "150px",
          left: "0%",
          duration: isMobile ? 0 : 1.5,
          delay: isMobile ? 0 : 1,
        }
      )
      .fromTo(
        animatedObjectMeshEl,
        {
          opacity: 0,
          duration: 0,
          scale: 0,
        },
        {
          opacity: 0.3,
          scale: 1,
          duration: isMobile ? 0 : 0.5,
        }
      )
      .fromTo(
        [heading1El, heading2El, heading3El],
        {
          opacity: 0,
          duration: 0,
          scale: 2,
        },
        {
          opacity: 1,
          scale: 1,
          stagger: {
            amount: 0.5,
          },
        }
      )
      .fromTo(
        isMobile ? descMbEl : descEl,
        {
          opacity: 0,
          duration: 0,
        },
        {
          opacity: 1,
          duration: 1,
          stagger: {
            amount: 0,
          },
        },
        "<1.5"
      )
      .fromTo(
        bannerEl,
        {
          width: 0,
          opacity: 1,
          duration: 0,
        },
        {
          width: "46vw",
          opacity: 1,
          duration: 1.5,
        },
        "<0.5"
      );
  }, [isMobile]);

  return (
    <div className={styles["hero-section"]}>
      <div className={styles["hero-section__content"]}>
        <div className={`${styles[hsr]} ${styles[hsr + "--1"]}`}>
          <div className={styles["hero-section__big-text"]} ref={heading1Ref}>
            EMPOWER
          </div>
          <TextWithCircle
            fontSize={isMobile ? 14 : 24}
            textLeft={isMobile ? "We Are" : "Get in"}
            textRight={
              isMobile ? "Innovative Digital Solutions" : "Touch with us today"
            }
            animationDelay={isMobile ? 3 : 8}
          />
        </div>
        <div className={`${styles[hsr]} ${styles[hsr + "--2"]}`}>
          <div className={styles["hero-section__big-text"]} ref={heading2Ref}>
            YOUR
          </div>
          <div className={styles["row-2-text"]} ref={descRef}>
            we are dedicated to empowering businesses with innovative digital
            solutions.
          </div>
        </div>
        <div className={`${styles[hsr]} ${styles[hsr + "--3"]}`}>
          <div className={styles["hero-section__big-text"]}>
            <span>
              <span className={styles["text"]} ref={heading3Ref}>
                BUSINESS
              </span>
              <span className={styles["banner"]} ref={bannerRef}></span>
            </span>
          </div>
          <EditPencilButton animationDelay={5} />
        </div>
        <div className={`${styles[hsr]} ${styles[hsr + "--4"]}`}>
          <div className={styles["row-4-text"]} ref={descMbRef}>
            we are dedicated to empowering businesses with innovative digital
            solutions.
          </div>
        </div>
        <div className={styles["animated-object"]} ref={animatedObjectRef}>
          {[0, -50, 50, 70].map((n) => {
            return (
              <Image
                key={n}
                className={styles["animated-object__blur-img"]}
                src={blurImage}
                alt=""
                width={480}
                style={{
                  left: n,
                  right: n,
                }}
              />
            );
          })}
          <Image
            className={styles["animated-object__main-object"]}
            src={heroObject}
            alt=""
            width={480}
          />
          <Image
            className={styles["animated-object__mesh-bg"]}
            src={meshBg}
            alt=""
            width={250}
            ref={animatedObjectMeshRef}
          />

          <div className={styles["animated-object__text"]}>
            <TextWithCircle
              textLeft="We are"
              textRight="Innovative Digital Solutions"
              fontSize={24}
              animationDelay={1.5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
