import gsap from "gsap";

export const getScrollTriggerConfigs = (
  el: Element,
  tween: gsap.core.Tween
) => {
  return {
    trigger: el,
    animation: tween,
    start: "top 95%",
    end: "top 95%",
    scroller: ".__plc__",
    toggleActions: "restart none reverse none",
    scrub: 2,
  };
};
