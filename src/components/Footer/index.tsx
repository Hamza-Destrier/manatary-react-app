import React from "react";
import styles from "@/styles/pagelayout.module.scss";
import LetsTalk from "./sub/LetsTalk";
import HorizontalLine from "../Elements/HorizontalLine";
import FooterServices from "./sub/FooterServices";
import FooterWork from "./sub/FooterWork";

const Footer = ({
  hideLetsTalkSection = false,
}: {
  hideLetsTalkSection?: boolean;
}) => {
  return (
    <div className={styles["footer"]}>
      {!hideLetsTalkSection && (
        <>
          <LetsTalk />
          <HorizontalLine />
        </>
      )}
      <FooterServices />
      <HorizontalLine />
      <FooterWork />
    </div>
  );
};

export default Footer;
