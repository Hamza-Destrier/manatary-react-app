"use client";
import React from "react";
import PageLayout from "@/components/Elements/PageLayout";
import styles from "@/styles/blogs.module.scss";
import { useRouter, useParams } from "next/navigation";
import { ALL_BLOGS } from "../blogsData";
import Image from "next/image";
import BDImage from "./sub/BDImage";
import BDHeading from "./sub/BDHeading";
import BDText from "./sub/BDText";
import BDFact from "./sub/BDFact";
import blurImg from "../../../../public/assets/common/blur-img.png";
import { ArrowLeft, ArrowRight } from "@/components/Elements/Arrow";
import Link from "next/link";
import HorizontalLine from "@/components/Elements/HorizontalLine";
import BigAnimatedHeading from "@/components/Elements/BigAnimatedHeading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getScrollTriggerConfigs } from "@/helpers/animations";

const ComponentMap = {
  IMAGE: BDImage,
  HEADING: BDHeading,
  TEXT: BDText,
  FACT: BDFact,
};

const BDP = "blogs-details-page";
const BDPH = "blogs-details-page__header";

const getAnimatedText = (text: string) => {
  return text.split(" ").map((w, i) => {
    return (
      <>
        <BigAnimatedHeading direction={i % 2 != 0 ? "right" : "left"}>
          {w}
        </BigAnimatedHeading>{" "}
      </>
    );
  });
};

const getTween = (el: Element) => {
  const posVal = "100px";
  return gsap.fromTo(
    el,
    { top: posVal, opacity: 0, duration: 0 },
    { top: "0", opacity: 1, duration: 0.5 }
  );
};

const BlogDetailsPage = () => {
  const featureImgRef = React.useRef<HTMLImageElement>(null);
  const bodyRef = React.useRef<HTMLDivElement>(null);
  const footerRef = React.useRef<HTMLDivElement>(null);
  const controlsRef = React.useRef<HTMLDivElement>(null);

  const _router = useRouter();

  const redirectToAllBlogsPage = () => {
    _router.push("/blogs/");
  };

  const _params = useParams();

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const bodyEl = bodyRef.current;
    const footerEl = footerRef.current;
    const controlsEl = controlsRef.current;
    const featureImgEl = featureImgRef.current;

    if (!bodyEl || !footerEl || !controlsEl || !featureImgEl) return;

    featureImgEl.style.display = "inline-block";
    featureImgEl.style.position = "relative";

    const allEls = [
      ...Array.from(bodyEl.children),
      footerEl,
      controlsEl,
      featureImgEl,
    ] as HTMLElement[];

    allEls.forEach((el) => {
      el.style.position = "relative";
      const tween = getTween(el);
      const configs = getScrollTriggerConfigs(el, tween);
      ScrollTrigger.create(configs);
    });
  }, []);

  const blogRes = React.useMemo(() => {
    return ALL_BLOGS.find(({ id }) => id === Number(_params.blogId));
  }, [_params.blogId, ALL_BLOGS]);

  if (!blogRes) {
    redirectToAllBlogsPage();
    return <div>Invalid Blog. You are being redirected to blogs page!</div>;
  }
  const { date, details, nextBlogId, prevBlogId } = blogRes;
  const { content, editor, featuredImg, subTitle, title, excerpt, footerNote } =
    details;

  return (
    <PageLayout
      hideLetsTalkSection
      className={styles["blog-details-page-wrapper"]}
    >
      <div className={styles[BDP]}>
        <div className={styles[BDPH]}>
          <div className={styles[BDPH + "__title"]}>
            {getAnimatedText(title + ":")}
          </div>
          <div className={styles[BDPH + "__sub-title"]}>
            {getAnimatedText(subTitle)}
          </div>
          <div className={styles[BDPH + "__by-date"]}>
            {getAnimatedText(`By ${editor} / ${date}`)}
          </div>
          <div className={styles[BDPH + "__excerpt"]}>
            {getAnimatedText(excerpt)}
          </div>
          <div className={styles[BDPH + "__featured-img"]}>
            <Image
              src={featuredImg}
              alt=""
              layout="responsive"
              ref={featureImgRef}
            />
          </div>
        </div>

        <div className={styles[BDP + "__body"]} ref={bodyRef}>
          {content.map((content, i) => {
            const { type } = content;
            type ComponentType = React.ComponentType<
              { key: number } & typeof content
            >;
            const Component = ComponentMap[type] as ComponentType;
            return <Component key={i} {...content} />;
          })}
        </div>

        <div className={styles[BDP + "__footer"]} ref={footerRef}>
          {footerNote + " "} <Link href={"/contact/"}>Get in touch</Link> with
          our team at Mantaray Digital today!
        </div>

        <div className={styles[BDP + "__controls"]} ref={controlsRef}>
          <Link href={"/blogs/" + prevBlogId}>
            <ArrowLeft />
          </Link>
          <Link href={"/blogs/" + nextBlogId}>
            <ArrowRight />
          </Link>
        </div>

        <HorizontalLine />
      </div>

      {/* blur imgs */}
      {[1, 2, 3].map((n) => {
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

export default BlogDetailsPage;
