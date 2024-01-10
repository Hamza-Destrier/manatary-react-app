import React from "react";
import styles from "@/styles/landingpage.module.scss";
import TextWithCircle from "@/components/Elements/TextWithCircle";
import Card from "@/components/Elements/Card";
import Image from "next/image";
import blurImg from "../../../../public/assets/common/blur-2.png";
import { CardProps } from "@/types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Blogs = ({
  isServicesPage,
  cardsData,
}: {
  isServicesPage?: boolean;
  cardsData: CardProps[];
}) => {
  const cardWrapperRef = React.useRef<HTMLDivElement>(null);
  const cardsContainerRef = React.useRef<HTMLDivElement>(null);
  const compRef = React.useRef<HTMLDivElement>(null);
  const headingRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLDivElement>(null);

  function getScrollAmount(el: Element) {
    let racesWidth = el.scrollWidth;
    return -(racesWidth - window.innerWidth);
  }

  React.useLayoutEffect(() => {
    const cardsWrapperEl = cardWrapperRef.current;
    const cardsContainerEl = cardsContainerRef.current;
    const compEl = compRef.current;
    const headingEl = headingRef.current;
    const titleEl = titleRef.current;

    if (
      !cardsWrapperEl ||
      !cardsContainerEl ||
      !compEl ||
      // !headingEl ||
      !titleEl
    )
      return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headingEl,
        scroller: ".__plc__",
        pin: true,
        // markers: true,
        start: "top 10%",
        pinSpacing: false,
        end: () => "+=" + (compEl.offsetHeight - 200),
        // end: () => `+=${cardsContainerEl.offsetWidth + vw}`,
      });
      ScrollTrigger.create({
        trigger: titleEl,
        scroller: ".__plc__",
        pin: true,
        // markers: true,
        start: "top 10%",
        pinSpacing: false,
        end: () => "+=" + (compEl.offsetHeight - titleEl.offsetHeight - 200),
        // end: () => `+=${cardsContainerEl.offsetWidth + vw}`,
      });

      // horizontal scroll

      const tween = gsap.to(cardsContainerEl, {
        x: () => getScrollAmount(cardsContainerEl) * 1.5,
        duration: 3,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: cardsWrapperEl,
        start: "top 30%",
        scroller: ".__plc__",
        end: () => `+=${getScrollAmount(cardsContainerEl) * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
        markers: true,
      });

      // const card = cardsContainerEl.children;
      // ScrollTrigger.create({
      //   scroller: ".__plc__",
      //   trigger: cardsContainerEl,
      //   start: "top 20%",
      //   pin: true,
      //   scrub: true,
      //   end: () => `+=${cardsContainerEl.offsetWidth + vw}`,
      //   markers: true,
      //   animation: gsap.to(card, {
      //     xPercent: -230 * (card.length - 1),
      //     ease: "none",
      //     smoothChildTiming: true,
      //     stagger: 0,
      //   }),
      // });

      // horizontal scroll
    });

    return () => {
      ctx.revert();
    };

    //
    //
    //
  }, [cardsData]);

  return (
    <div
      className={`${styles["blogs-section"]} ${
        isServicesPage ? styles["service-page"] : ""
      }`}
      ref={compRef}
    >
      {!isServicesPage && (
        <div className={styles["blogs-section__header"]} ref={headingRef}>
          <TextWithCircle textRight="BLOGS" />
        </div>
      )}
      <div className={styles["blogs-section__title"]} ref={titleRef}>
        {isServicesPage ? "Benifits" : "Blogs"}
      </div>
      <div className={styles["blogs-section__blur-img"]}>
        <Image src={blurImg} alt="" width={500} />
      </div>
      <div className={styles["cards-container-wrapper"]} ref={cardWrapperRef}>
        <div
          className={styles["blogs-section__cards-container"]}
          ref={cardsContainerRef}
        >
          {cardsData.map((cardProps, i) => {
            return <Card key={i} {...cardProps} isActive={isServicesPage} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
