"use client";
import React from "react";
import PageLayout from "../Elements/PageLayout";
import styles from "@/styles/servicespage.module.scss";
import Hero from "./sections/Hero";
import WhatWeDo from "../LandingPage/sections/WhatWeDo";
import HorizontalLine from "../Elements/HorizontalLine";
import SelectedContent from "./sections/SelectedContent";
import { ALL_SERVICES } from "./servicesData";
import Filler from "./sections/Filler";
import blurImg from "../../../public/assets/common/blur-img.png";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { MENUS } from "@/helpers/constants";
import HorizontalScroll from "../Elements/HorizontalScroll";
import gsap from "gsap";

const index = () => {
  const selectedContentRef = React.useRef<HTMLDivElement>(null);

  const [selectedServiceIndex, setSelectedServiceIndex] = React.useState(0);

  const selectedCardProps = React.useMemo(() => {
    const {
      description: selectedDescription,
      features: selectedFeatures,
      title: selectedTitle,
    } = ALL_SERVICES[selectedServiceIndex];

    return { selectedDescription, selectedFeatures, selectedTitle };
  }, [selectedServiceIndex, ALL_SERVICES]);

  const menuItemId = useSearchParams().get("selected");

  React.useEffect(() => {
    if (menuItemId == null) {
      return;
    }

    const _menuItemId = Number(menuItemId);

    if (typeof _menuItemId == "number" && !isNaN(_menuItemId)) {
      const linkIndex = MENUS.findIndex((m) => m._id == _menuItemId);

      if (linkIndex > -1) {
        setSelectedServiceIndex(linkIndex);

        // To handle the load error!
        setTimeout(() => {
          scrollToSelectedContent();
        }, 100);
        scrollToSelectedContent();
      }
    }
  }, [menuItemId]);

  const scrollToSelectedContent = () => {
    const selectedContentEl = selectedContentRef.current;
    if (selectedContentEl) {
      selectedContentEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PageLayout className={styles["services-page"]}>
      <div className={styles["services-page__content"]}>
        <Hero />
        <WhatWeDo
          isServicePage
          onLinkClick={(selectedLinkIndex?: number) => {
            if (typeof selectedLinkIndex != "number") return;
            setSelectedServiceIndex(selectedLinkIndex);
          }}
          selectedIndex={selectedServiceIndex}
          description={selectedCardProps.selectedDescription}
          scrollToSelectedContent={scrollToSelectedContent}
        />
        <HorizontalLine />
        <SelectedContent
          {...selectedCardProps}
          selectedContentRef={selectedContentRef}
        />
        <div className={styles["hr-space-container"]}>
          <HorizontalLine />
        </div>
        {/* Benefit section */}
        <HorizontalScroll
          cards={ALL_SERVICES[selectedServiceIndex].benefit.map(
            ({ description, title }) => ({ description, title })
          )}
          bgTitle="BENIFITS"
          titleFontSize={250}
          blurImg="green"
        />
        {/* <HorizontalScroll
          cards={ALL_SERVICES[selectedServiceIndex].benefit.map(
            ({ description, title }) => ({ description, title })
          )}
        /> */}
        <HorizontalLine />
        <Filler />

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
      </div>
    </PageLayout>
  );
};

export default index;
