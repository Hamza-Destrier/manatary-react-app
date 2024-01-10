"use client";
import React from "react";
import PageLayout from "../Elements/PageLayout";
import styles from "@/styles/work.module.scss";
import blurImg from "../../../public/assets/common/blur-img.png";
import Image from "next/image";
import TextWithCircle from "../Elements/TextWithCircle";
import HeroBlogImg from "./sub/HeroBlogImg";
import LinkSvg from "./sub/LinkSvg";
import Link from "next/link";
import { EditPencilButton } from "../LandingPage/sections/Hero";
import ViewAllProjectsSVG from "./sub/ViewAllProjectsSVG";
import BigAnimatedHeading from "../Elements/BigAnimatedHeading";
import img1 from "../../../public/assets/work/hero-img-1.png";
import img2 from "../../../public/assets/work/hero-img-2.png";
import img3 from "../../../public/assets/work/hero-img-3.png";
import img4 from "../../../public/assets/work/hero-img-4.png";
import img5 from "../../../public/assets/work/hero-img-5.png";
import gsap from "gsap";
// import { SCROLL_DOWN_EVENT } from "@/helpers/constants";

const projectLink = "/work/1";

const TRANSLATE_AMOUNT = 50;
const DEG = 50;

const allProjectsData = [
  {
    title: "Your Only Limit",
    featuredImage: img1,
    tags: ["Website Design", "Animation", "Creative Development", "Marketing"],
  },
  {
    title: "Power is Power",
    featuredImage: img2,
    tags: ["Website Design", "Marketing", "Animation", "Creative Development"],
  },
  {
    title: "Elmakan",
    featuredImage: img3,
    tags: [
      "Creative Development",
      "Website Design",
      "Animation",
      "Creative Development",
      "Marketing",
    ],
  },
  {
    title: "Frigologix",
    featuredImage: img4,
    tags: ["Website Design", "Creative Development", "Marketing"],
  },
  {
    title: "Vikings",
    featuredImage: img5,
    tags: ["Website Design", "Animation", "Creative Development", "Marketing"],
  },
];

const projectsCount = allProjectsData.length;

const ThinArrow = ({
  isLeft = false,
  handleClick,
}: {
  isLeft?: boolean;
  handleClick?: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) => {
  return (
    <div className={styles["control-btn"]} onClick={handleClick}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 16 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: isLeft ? "scaleX(-1)" : "",
        }}
      >
        <path
          d="M15 5C13.6667 4.66667 11 3 11 1"
          stroke="white"
          stroke-linecap="round"
        />
        <path
          d="M15 5C13.6667 5.33333 11 7 11 9"
          stroke="white"
          stroke-linecap="round"
        />
        <path d="M1 5L15 5" stroke="white" stroke-linecap="round" />
      </svg>
    </div>
  );
};

const Work = () => {
  const [projectIndex, setProjectIndex] = React.useState(0);
  const [fImgIndex, setFImgIndex] = React.useState(0);

  const [showAll, setShowAll] = React.useState(false);

  const titleRef = React.useRef<HTMLDivElement>(null);
  const fImageRefOuter = React.useRef<HTMLDivElement>(null);
  const fImageRef = React.useRef<HTMLDivElement>(null);

  const linkBtnRef = React.useRef<HTMLAnchorElement>(null);

  const blobImgRef = React.useRef<HTMLDivElement>(null);

  const controlsRef = React.useRef<HTMLDivElement>(null);
  const footerRef = React.useRef<HTMLDivElement>(null);

  const allProjectsRef = React.useRef<HTMLDivElement>(null);
  const pageRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    const titleEl = titleRef.current;
    const controlEl = controlsRef.current;

    const fImageOuterEl = fImageRefOuter.current;
    const blobImgEl = blobImgRef.current;

    const linkBtnEl = linkBtnRef.current;
    const footerEl = footerRef.current;

    let toId: NodeJS.Timeout;

    if (
      !titleEl ||
      !controlEl ||
      !fImageOuterEl ||
      !blobImgEl ||
      !linkBtnEl ||
      !footerEl
    )
      return;

    // For control buttons
    controlEl.style.opacity = "0";
    controlEl.style.pointerEvents = "none";

    toId = setTimeout(() => {
      controlEl.style.opacity = "1";
      controlEl.style.pointerEvents = "unset";
    }, 3000);

    const tl = gsap.timeline({
      defaults: {
        ease: "power4.inOut",
      },
    });

    tl.fromTo(
      fImageOuterEl,
      {
        opacity: 0,
        duration: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
      }
    )
      .fromTo(
        blobImgEl,
        {
          opacity: 0,
          duration: 0,
          scale: 0,
          x: "50%",
          y: "-50%",
        },
        {
          opacity: 1,
          scale: 1,
          x: "50%",
          y: "-50%",
          duration: 1,
        }
      )
      .fromTo(
        titleEl,
        {
          opacity: 0,
          y: TRANSLATE_AMOUNT,
          duration: 0,
          rotate: -1 * DEG,
        },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
        }
      )
      .fromTo(
        linkBtnEl,
        {
          opacity: 0,
          scale: 0,
          duration: 0,
        },
        {
          opacity: 1,
          scale: 1,
          ease: "bounce",
        }
      )
      .fromTo(
        footerEl,
        {
          opacity: 0,
          duration: 0,
        },
        {
          opacity: 1,
        }
      );

    return () => clearTimeout(toId);
  }, []);

  const getDims = (dim: number) => {
    const _dim = dim + "px";
    return {
      width: _dim,
      height: _dim,
      minWidth: _dim,
      minHeight: _dim,
      maxWidth: _dim,
      maxHeight: _dim,
    };
  };

  const getPreviousIndex = () => {
    const temp = projectIndex - 1;
    return temp < 0 ? projectsCount - 1 : temp;
  };

  const getNextIndex = () => {
    return (projectIndex + 1) % projectsCount;
  };

  const handleFImageChange = (isLeft: boolean) => {
    const newPrev = fImgIndex - 1 < 0 ? projectsCount - 1 : fImgIndex - 1;
    const newNext = (fImgIndex + 1) % projectsCount;
    const newIndex = isLeft ? newPrev : newNext;

    const imageEl = fImageRef.current;
    const outerImageEl = fImageRefOuter.current;
    if (!imageEl || !outerImageEl) return;

    imageEl.style.transformOrigin = "center top";

    outerImageEl.style.backgroundImage = `url(${allProjectsData[newIndex].featuredImage.src})`;

    const tl = gsap.timeline({
      defaults: {
        ease: "linear",
      },
    });

    tl.to(imageEl, {
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      onComplete: () => {
        setFImgIndex(newIndex);
      },
    }).to(imageEl, {
      opacity: 1,
      duration: 0.1,
    });
  };

  const handleClick = (direction: "left" | "right") => () => {
    const isLeft = direction === "left";
    const newSetter = isLeft ? getPreviousIndex : getNextIndex;
    handleFImageChange(isLeft);

    const controlEl = controlsRef.current;

    if (controlEl) {
      controlEl.style.opacity = "0.1";
      controlEl.style.pointerEvents = "none";
      setTimeout(() => {
        controlEl.style.opacity = "1";
        controlEl.style.pointerEvents = "unset";
      }, 1300);
    }

    const titleEl = titleRef.current;
    if (!titleEl) return;

    const tl = gsap.timeline({
      defaults: {
        ease: "power4.inOut",
      },
    });

    const m1 = isLeft ? 1 : -1;
    const m2 = isLeft ? -1 : 1;

    tl.to(titleEl, {
      opacity: 0,
      top: TRANSLATE_AMOUNT * m1,
      rotate: DEG * m2,
      duration: 0.5,
    })
      .to(titleEl, {
        top: TRANSLATE_AMOUNT * m2,
        rotate: DEG * m1,
        duration: 0,
        onComplete: () => {
          setProjectIndex(newSetter());
        },
      })
      .to(titleEl, {
        opacity: 1,
        top: 0,
        rotate: 0,
        duration: 0.5,
        delay: 0.5,
      });
  };

  const handleShowAll = () => {
    const show = !showAll;

    const allProjectsEl = allProjectsRef.current;
    if (!allProjectsEl) return;

    const tl = gsap.timeline({
      defaults: {
        ease: "power4.inOut",
      },
    });

    const DIM = 150;
    const _DIM = 10;

    if (show) {
      tl.fromTo(
        allProjectsEl.children,
        { ...getDims(_DIM), opacity: 0, duration: 0 },
        { ...getDims(DIM), opacity: 1, duration: 1 }
      );
    } else {
      tl.fromTo(
        allProjectsEl.children,
        { ...getDims(DIM), opacity: 1, duration: 0 },
        { ...getDims(_DIM), opacity: 0, duration: 1 }
      );
    }
    setShowAll(show);
  };

  return (
    <PageLayout hideFooter className={styles["work-page-wrapper"]}>
      <div className={styles["work-page"]} ref={pageRef}>
        <div className={styles["work-page__header"]}>
          <TextWithCircle textLeft="Mantaray" textRight="Work" />
        </div>
        <div className={styles["work-page__body"]}>
          <div className={styles["work-page__body__left-col"]}>
            <div
              className={styles["hero-featured-img-container"]}
              style={{
                backgroundImage: `url(${allProjectsData[fImgIndex].featuredImage.src})`,
              }}
              ref={fImageRefOuter}
            >
              <div
                className={styles["hero-featured-img-container__inner"]}
                style={{
                  backgroundImage: `url(${allProjectsData[fImgIndex].featuredImage.src})`,
                }}
                ref={fImageRef}
              />
            </div>
            <HeroBlogImg containerRef={blobImgRef} />
          </div>
          <div className={styles["work-page__body__right-col"]}>
            <div className={styles["wph-control-btns"]} ref={controlsRef}>
              <ThinArrow handleClick={handleClick("left")} isLeft />
              <ThinArrow handleClick={handleClick("right")} />
            </div>
            <div className={styles["project-title"]}>
              <div className={styles["project-title__title"]}>
                <Link href={projectLink}>
                  <div className={styles["pt-aniamtion-conatiner"]}>
                    <div
                      className={styles["pt-aniamtion-conatiner__curr"]}
                      ref={titleRef}
                    >
                      {allProjectsData[projectIndex].title}
                    </div>
                  </div>
                </Link>
              </div>
              <Link
                className={styles["project-title__btn__container"]}
                href={projectLink}
                ref={linkBtnRef}
              >
                <div className={styles["project-title__btn"]}>
                  <LinkSvg />
                </div>
              </Link>
            </div>
            <div className={styles["project-types"]}>
              {allProjectsData[projectIndex].tags.map((t, i) => (
                <div
                  key={`${t}__${projectIndex}__${i}`}
                  className={styles["project-types__type"]}
                >
                  <BigAnimatedHeading duration={0.25} direction="right">
                    {t}
                  </BigAnimatedHeading>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles["work-page__footer"]} ref={footerRef}>
          <div className={styles["work-page__footer__contact"]}>
            <EditPencilButton />
          </div>
          <div className={styles["work-page__footer__view-all"]}>
            <div
              className={styles["work-page__footer__view-all-btn"]}
              onClick={handleShowAll}
            >
              <span>
                <ViewAllProjectsSVG />
              </span>
              <span>{showAll ? "Close" : "view all projects"}</span>
            </div>
          </div>
          <div
            className={styles["work-page__footer__all-projects"]}
            ref={allProjectsRef}
          >
            {allProjectsData.map(({ featuredImage, title }, i) => {
              return (
                <div key={i} className={styles["project-tile"]}>
                  <div
                    className={styles["project-tile__img"]}
                    style={{
                      backgroundImage: `url(${featuredImage.src})`,
                    }}
                  />
                  <div className={styles["project-tile__title"]}>{title}</div>
                </div>
              );
            })}
          </div>
        </div>
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

export default Work;
