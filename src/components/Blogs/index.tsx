"use client";
import React from "react";
import styles from "@/styles/blogs.module.scss";
import PageLayout from "../Elements/PageLayout";
import { ALL_BLOGS } from "./blogsData";
import BlogCard from "./sub/BlogCard";
import Image from "next/image";
import blurImg from "../../../public/assets/common/blur-img.png";
import TextWithCircle from "../Elements/TextWithCircle";
import HorizontalLine from "../Elements/HorizontalLine";
import BigAnimatedHeading from "../Elements/BigAnimatedHeading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getScrollTriggerConfigs } from "@/helpers/animations";
import useIsMobile from "@/helpers/hooks/useIsMobile";

const BC = "blogs-container";
const BCH = "blogs-container__header";

const getTween = (el: Element) => {
  const posVal = "100px";
  return gsap.fromTo(
    el,
    { top: posVal, opacity: 0, duration: 0 },
    { top: "0", opacity: 1, duration: 0.5 }
  );
};

const Blogs = () => {
  const blogsContainerRef = React.useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const allBlogsEls = blogsContainerRef.current;

    if (allBlogsEls) {
      Array.from(allBlogsEls.children).forEach((el) => {
        (el as HTMLDivElement).style.position = "relative";
        // el.style.display = "inline-block";
        const tween = getTween(el);
        const configs = getScrollTriggerConfigs(el, tween);
        ScrollTrigger.create(configs);
      });
    }
  }, []);

  return (
    <PageLayout hideLetsTalkSection className={styles["blogs-page-wrapper"]}>
      <div className={styles[BC]}>
        <div className={styles[BCH]}>
          <div className={styles[BCH + "__upper"]}>
            <div className={styles[BCH + "__title"]}>
              {`Our Gateway to Captivating Blog Articles!`
                .split(" ")
                .map((w, i) => {
                  return (
                    <>
                      <BigAnimatedHeading
                        direction={i % 2 != 0 ? "right" : "left"}
                      >
                        {w}
                      </BigAnimatedHeading>{" "}
                    </>
                  );
                })}
            </div>
            <div className={styles[BCH + "__get-in-touch"]}>
              <TextWithCircle
                textLeft="Get in"
                textRight="Touch with us today"
                fontSize={isMobile ? 18 : 24}
              />
            </div>
          </div>
          <div className={styles[BCH + "__sub-title"]}>
            {`A special treat for the working feathers`
              .split(" ")
              .map((w, i) => {
                return (
                  <>
                    <BigAnimatedHeading
                      direction={i % 2 != 0 || true ? "right" : "left"}
                    >
                      {w}
                    </BigAnimatedHeading>{" "}
                  </>
                );
              })}
          </div>
        </div>
        <div className={styles[BC + "__blogs"]} ref={blogsContainerRef}>
          {ALL_BLOGS.map((blogRes) => {
            return <BlogCard key={blogRes.id} {...blogRes} />;
          })}
        </div>
        <HorizontalLine />
      </div>
      {/* blur imgs */}
      {[1, 2].map((n) => {
        return (
          <Image
            key={n}
            className={`${styles["blur-img"]} ${styles[`blur-img--${n}`]}`}
            src={blurImg}
            alt=""
          />
        );
      })}
      {/* /blur imgs */}
    </PageLayout>
  );
};

export default Blogs;
