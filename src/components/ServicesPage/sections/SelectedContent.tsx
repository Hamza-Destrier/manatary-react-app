import React from "react";
import styles from "@/styles/servicespage.module.scss";
import BigAnimatedHeading from "@/components/Elements/BigAnimatedHeading";
import HorizontalScroll from "@/components/Elements/HorizontalScroll";

interface SelectedFeature {
  title: string;
  description: string;
}
interface Props {
  selectedTitle: [string, string];
  selectedFeatures: SelectedFeature[];
  selectedContentRef?: React.RefObject<HTMLDivElement>;
}

const SelectedContent: React.FC<Props> = ({
  selectedTitle,
  selectedFeatures,
  selectedContentRef,
}) => {
  return (
    <div
      className={styles["selected-content-section"]}
      ref={selectedContentRef}
    >
      <div className={styles["selected-content-section__title"]}>
        <div className={styles["title_row--1"]}>
          <BigAnimatedHeading direction="right">
            {selectedTitle[0]}
          </BigAnimatedHeading>
        </div>
        <div className={styles["title_row--2"]}>
          <BigAnimatedHeading>{selectedTitle[1]}</BigAnimatedHeading>
        </div>
      </div>
      {/* <HorizontalScroll
        cards={selectedFeatures.map(({ description, title }, i) => {
          return {
            description,
            title,
            headerText: "NO." + (i + 1),
          };
        })}
        headerTitle="Features"
        titleFontSize={250}
        blurImg="white"
      /> */}
      <HorizontalScroll
        cards={selectedFeatures.map(({ description, title }, i) => {
          return {
            description,
            title,
            headerText: "NO." + (i + 1),
          };
        })}
      />
    </div>
  );
};

export default SelectedContent;
