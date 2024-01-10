import React from "react";
import styles from "@/styles/work.module.scss";
import { MENUS } from "@/helpers/constants";
import AnimatedLink from "@/components/Elements/AnimatedLink";
import BigAnimatedHeading from "@/components/Elements/BigAnimatedHeading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getScrollTriggerConfigs } from "@/helpers/animations";
import { Intro } from "@/types";

const getTween = (el: Element) => {
  const pos = "top";
  const posVal = "100px";
  return gsap.fromTo(
    el,
    { [pos]: posVal, opacity: 0, duration: 0 },
    { [pos]: "0", opacity: 1, duration: 0.5 }
  );
};

const Intro = ({ intro }: { intro: Intro }) => {
  const linksContainerRef = React.useRef<HTMLDivElement>(null);
  const descriptionRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const allLinksEl = linksContainerRef.current;
    const descEl = descriptionRef.current;

    const linksChildren = (allLinksEl?.children || []) as Element[];

    const allEls = [...linksChildren];

    if (descEl) {
      descEl.style.position = "relative";
      allEls.push(descEl);
    }

    allEls.forEach((el) => {
      const tween = getTween(el);
      const configs = getScrollTriggerConfigs(el, tween);
      ScrollTrigger.create(configs);
    });
  }, []);

  return (
    <div className={styles["intro"]}>
      <div className={styles["intro__services"]}>
        <div className={styles["intro__heading"]}>
          <BigAnimatedHeading direction="right">Services</BigAnimatedHeading>
        </div>
        <div
          className={styles["intro__services__links"]}
          ref={linksContainerRef}
        >
          {MENUS.map((menu, i) => {
            return (
              <AnimatedLink
                {...menu}
                simplerLink
                key={`introLinkIndex__` + i}
              />
            );
          })}
        </div>
      </div>
      <div className={styles["intro__project"]}>
        <div className={styles["intro__heading"]}>
          <BigAnimatedHeading direction="right">The Project</BigAnimatedHeading>
        </div>
        <div
          className={styles["intro__project__description"]}
          ref={descriptionRef}
        >
          {intro.description}
        </div>
      </div>
    </div>
  );
};

export default Intro;
