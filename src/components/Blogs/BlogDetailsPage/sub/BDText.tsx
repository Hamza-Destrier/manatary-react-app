import { ContentParagraph } from "@/types";
import React from "react";
import styles from "@/styles/blogs.module.scss";

const BDText = ({ data, isItalic }: ContentParagraph) => {
  return (
    <div
      className={
        styles["bd-text"] + " " + styles[isItalic ? "bd-text--italic" : ""]
      }
    >
      {data}
    </div>
  );
};

export default BDText;
