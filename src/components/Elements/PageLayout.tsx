import React from "react";
import styles from "@/styles/pagelayout.module.scss";
import Navbar from "../Navbar";
import { GenericElements } from "@/types";
import Footer from "../Footer";
import gsap from "gsap";
import { SOCIAL_MENUS, VP_GAP } from "@/helpers/constants";
import useViewportHeight from "@/helpers/hooks/useViewportHeight";
import AnimatedLink from "./AnimatedLink";

interface Props {
  children: GenericElements;
  className?: string;
  hideLetsTalkSection?: boolean;
  hideFooter?: boolean;
}

const PageLayout: React.FC<Props> = ({
  children,
  className = "",
  hideLetsTalkSection = false,
  hideFooter = false,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const vh = useViewportHeight();

  const pageLayoutRef = React.useRef<HTMLDivElement>(null);
  const pageLayoutWrapperRef = React.useRef<HTMLDivElement>(null);

  const menusContainerRef = React.useRef<HTMLDivElement>(null);
  const socialMenusRef = React.useRef<HTMLDivElement>(null);

  const handleNavBtnClick = () => {
    const opening = !isExpanded;
    console.log(`${opening ? "Opening" : "Closing"} the topbar`);

    const pageLayoutWrapperEl = pageLayoutWrapperRef.current;
    const pageLayoutEl = pageLayoutRef.current;
    const menusContainerEl = menusContainerRef.current;
    const socialMenusEl = socialMenusRef.current;
    if (
      !pageLayoutEl ||
      !pageLayoutWrapperEl ||
      !menusContainerEl ||
      !socialMenusEl
    )
      return;

    // Enabling/Disabling the content scroll
    const overflowY = opening ? "hidden" : "scroll";
    pageLayoutWrapperEl.style.overflowY = overflowY;

    const tl = gsap.timeline();

    // Page content animations
    const pageContent = Array.from(pageLayoutEl.children).slice(1);
    const pageContentOpacity = opening ? 0 : 1;
    const pageContentTween = gsap.to(pageContent, {
      opacity: pageContentOpacity,
      duration: opening ? 0.15 : 0.25,
      ease: "power4.inOut",
    });

    // Wrapper animations
    const containerTop = (opening ? vh / 1.5 : VP_GAP) + "px";
    const heightTween = gsap.to(pageLayoutWrapperEl, {
      top: containerTop,
      duration: 0.85,
      ease: "power4.inOut",
    });

    // Menu items animations
    const menusY = opening ? 0 : -100;
    const menusOpacity = opening ? 1 : 0;
    const menusStagger = opening ? 0.05 : 0;
    const menusTween = gsap.to(menusContainerEl.children, {
      opacity: menusOpacity,
      y: menusY,
      ease: "power4.inOut",
      stagger: menusStagger,
    });

    // social links tween
    const smlY = opening ? 0 : -50;

    const smlTween = gsap.to(socialMenusEl.children, {
      opacity: menusOpacity,
      y: smlY,
      stagger: menusStagger / 5,
      duration: opening ? 0.5 : 0,
    });

    // const d1 = opening ? "" : "<=0.1";
    // const d2 = opening ? "<=0.5" : "";
    // const d3 = opening ? "<=0.5" : "";
    // const d4 = opening ? "<=0.5" : "";

    // const tweens = [
    //   [pageContentTween, d1],
    //   [heightTween, d2],
    //   [menusTween, d3],
    //   [smlTween, d4],
    // ];

    const tweens = [pageContentTween, heightTween, menusTween, smlTween];

    !opening && tweens.reverse();

    tweens.forEach((t) => tl.add(t));

    setIsExpanded(opening);
  };

  return (
    <div
      className={`${styles["page-layout-wrapper"]} __plc__`}
      ref={pageLayoutWrapperRef}
    >
      <div className={styles["pl-header-social-links"]} ref={socialMenusRef}>
        {SOCIAL_MENUS.map((menu, i) => {
          return (
            <div key={i}>
              <AnimatedLink {...menu} simplerLink />
            </div>
          );
        })}
      </div>
      <div
        className={`${styles["page-layout"]} ${className}`}
        ref={pageLayoutRef}
      >
        <Navbar
          handleNavBtnClick={handleNavBtnClick}
          menusContainerRef={menusContainerRef}
          isMenuExpanded={isExpanded}
        />
        {children}
        {!hideFooter && <Footer hideLetsTalkSection={hideLetsTalkSection} />}
      </div>
    </div>
  );
};

export default PageLayout;
