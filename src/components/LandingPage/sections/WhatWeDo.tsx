"use client";
import React from "react";
import styles from "@/styles/landingpage.module.scss";
import TextWithCircle from "@/components/Elements/TextWithCircle";
import AnimatedLink from "@/components/Elements/AnimatedLink";
import { MENUS } from "@/helpers/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getScrollTriggerConfigs } from "@/helpers/animations";

interface Props {
  isServicePage?: boolean;
  onLinkClick?: (
    n?: number,
    x?: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
  selectedIndex?: number;
  description?: string;
  scrollToSelectedContent?: () => void;
}

const getTween = (el: Element, isForLink = false) => {
  const pos = isForLink ? "left" : "top";
  const posVal = isForLink ? "200px" : "100px";
  return gsap.fromTo(
    el,
    { [pos]: posVal, opacity: 0, duration: 0 },
    { [pos]: "0", opacity: 1, duration: 0.5 }
  );
};

const WhatWeDo = ({
  isServicePage = false,
  onLinkClick,
  selectedIndex,
  description,
  scrollToSelectedContent,
}: Props) => {
  const allLinksRef = React.useRef<HTMLDivElement>(null);
  const col1Ref = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const allLinksEl = allLinksRef.current;
    const col1El = col1Ref.current;

    const linksChildren = (allLinksEl?.children || []) as Element[];
    const col1Children = (col1El?.children || []) as Element[];

    const allEls = [...linksChildren, ...col1Children];

    allEls.forEach((el) => {
      const tween = getTween(el);
      const configs = getScrollTriggerConfigs(el, tween);
      ScrollTrigger.create(configs);
    });
  }, []);

  return (
    <div className={styles["WhatWeDo-section"]}>
      <div className={styles["WhatWeDo-section__content"]}>
        <div
          className={styles["WhatWeDo-section__content__col1"]}
          ref={col1Ref}
        >
          <TextWithCircle
            textRight="What We Do"
            containerStyles={{
              marginBottom: "66px",
            }}
          />
          {!isServicePage && (
            <div className={styles["col-text"]}>
              At mantaray, we excel in constructing website ecosystems that
              seamlessly weave brand narratives, enhance conversions, and
              cultivate trust.
            </div>
          )}
          {isServicePage && (
            <>
              <div
                className={styles["col-text"]}
                style={{
                  fontSize: "20px",
                  marginBottom: "20px",
                }}
              >
                {description}
              </div>
              <TextWithCircle
                containerStyles={{ paddingLeft: "44px", cursor: "pointer" }}
                textRight="Learn More"
                fontSize={16}
                outerCircleDim={12}
                innerCircleDim={3}
                onRightTextClick={scrollToSelectedContent}
              />
            </>
          )}
        </div>
        <div
          className={styles["WhatWeDo-section__content__col2"]}
          ref={allLinksRef}
        >
          {MENUS.map((menu, i) => {
            return (
              <div key={i} className={styles["col2-links"]}>
                <AnimatedLink
                  {...menu}
                  link={isServicePage ? "" : menu.link}
                  onLinkClick={onLinkClick}
                  linkNumber={menu._id}
                  nonRedirecting={isServicePage}
                  isActive={menu._id === selectedIndex}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
