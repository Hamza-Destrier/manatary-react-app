import React from "react";
import styles from "@/styles/landingpage.module.scss";
import TextWithCircle from "@/components/Elements/TextWithCircle";
import AnimatedLink from "@/components/Elements/AnimatedLink";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getScrollTriggerConfigs } from "@/helpers/animations";

const MENUS = [
  { title: "About Us", link: "#" },
  { title: "Services", link: "#" },
];

const getTween = (el: Element, isForLink = false) => {
  const pos = isForLink ? "left" : "top";
  const posVal = isForLink ? "200px" : "50px";
  return gsap.fromTo(
    el,
    { [pos]: posVal, opacity: 0, duration: 0 },
    { [pos]: "0", opacity: 1, duration: 0.5 }
  );
};

const AboutUs = () => {
  const col1Ref = React.useRef<HTMLDivElement>(null);
  const col2Ref = React.useRef<HTMLDivElement>(null);
  const col3Ref = React.useRef<HTMLDivElement>(null);
  const footerRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const col1El = col1Ref.current;
    if (col1El) {
      const tween = getTween(col1El);
      const configs = getScrollTriggerConfigs(col1El, tween);
      ScrollTrigger.create(configs);
    }

    const col2El = col2Ref.current;
    if (col2El) {
      const tween = getTween(col2El);
      const configs = getScrollTriggerConfigs(col2El, tween);
      ScrollTrigger.create(configs);
    }

    const col3El = col3Ref.current;
    if (col3El) {
      Array.from(col3El.children).forEach((span) => {
        const tween = getTween(span);
        const configs = getScrollTriggerConfigs(span, tween);
        ScrollTrigger.create(configs);
      });
    }

    const footerEl = footerRef.current;
    if (footerEl) {
      Array.from(footerEl.children).forEach((linkItem) => {
        (linkItem as HTMLAnchorElement).style.position = "relative";
        const tween = getTween(linkItem, true);
        const configs = getScrollTriggerConfigs(linkItem, tween);
        ScrollTrigger.create(configs);
      });
    }
  }, []);

  return (
    <div className={styles["section-about-us"]}>
      <div className={styles["section-about-us-content"]}>
        <div className={styles["section-about-us-content__col1"]}>
          <TextWithCircle textRight="ABOUT US" containerRef={col1Ref} />
        </div>
        <div className={styles["section-about-us-content__col2"]} ref={col2Ref}>
          WITH A DECADE OF EXPERIENCE UNDER OUR BELTS, Mantaray HAS BECOME A
          WORLD - RENOWNED solution agency.
        </div>
        <div className={styles["section-about-us-content__col3"]} ref={col3Ref}>
          <span>At Mantaray Digital Solutions, </span>
          <span>we are dedicated to </span>
          <span>empowering businesses with </span>
          <span>innovative digital solutions. </span>
          <span>Our team of experts leverages </span>
          <span>cutting-edge technology to </span>
          <span>revolutionize the way you do </span>
          <span>business and drive growth. </span>
        </div>
      </div>
      <div className={styles["section-about-us-footer"]} ref={footerRef}>
        {MENUS.map((menu, i) => (
          <AnimatedLink {...menu} key={i} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
