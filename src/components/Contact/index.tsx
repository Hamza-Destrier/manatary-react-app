"use client";
import React from "react";
import PageLayout from "../Elements/PageLayout";
import styles from "@/styles/contact.module.scss";
import TextWithCircle from "../Elements/TextWithCircle";
import Image from "next/image";
import blurImg from "../../../public/assets/common/blur-img.png";
import Navbar from "../Navbar";
import BigAnimatedHeading from "../Elements/BigAnimatedHeading";
import gsap from "gsap";

const btnsData = [
  {
    insideText: "start a project",
    outsideText: "let'stalk@Mantaraydigital.tec",
    link: "mailto:letstalk@Mantaraydigital.tec",
  },
  {
    insideText: "join our team",
    outsideText: "+971 56 955 1452",
    link: "https://wa.me/971569551452",
    target: "_blank",
  },
  {
    insideText: "drop us a line",
    outsideText: "Compass Building, RAK, UAE",
    link: "https://maps.app.goo.gl/DbKiPTtvGXHFGXMCA",
    target: "_blank",
  },
];

const Contact = () => {
  const btnsRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    const btnsEls = btnsRef.current;
    if (!btnsEls) return;

    gsap.fromTo(
      btnsEls.children,
      { x: "-=100px", opacity: 0, duration: 0 },
      { x: "0", opacity: 1, duration: 1, stagger: 0.25 }
    );
  }, []);

  return (
    <PageLayout hideFooter className={styles["contact-page--wrapper"]}>
      <div className={styles["contact-page"]}>
        <div className={styles["contact-page__title"]}>
          <BigAnimatedHeading>How can we help?</BigAnimatedHeading>
        </div>
        <div className={styles["contact-page__btns"]} ref={btnsRef}>
          {btnsData.map(({ insideText, outsideText, link, target }, i) => {
            return (
              <div className={styles["contact-btn"]} key={i}>
                <a href={link} target={target}>
                  <div className={styles["contact-btn__upper"]}>
                    <TextWithCircle
                      textRight={insideText}
                      fontSize={24}
                      containerStyles={{
                        alignItems: "center",
                      }}
                    />
                  </div>
                </a>
                <div className={styles["contact-btn__lower"]}>
                  {outsideText}
                </div>
              </div>
            );
          })}
        </div>
      </div>
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
    </PageLayout>
  );
};

export default Contact;
