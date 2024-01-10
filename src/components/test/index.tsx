"use client";
import React from "react";
import PageLayout from "../Elements/PageLayout";
import styles from "./test.module.scss";
import HorizontalScroll from "../Elements/HorizontalScroll";
import { ALL_BLOGS } from "../Blogs/blogsData";
import HorizontalLine from "../Elements/HorizontalLine";

const Test = () => {
  return (
    <PageLayout>
      <div className={styles["upper"]}>upper</div>
      <div className={styles["center"]}>
        <HorizontalScroll
          cards={ALL_BLOGS.slice(0).map(({ details }, i) => ({
            title: details.title,
            description: details.subTitle,
            headerText: `Blog No.${i + 1}`,
          }))}
          bgTitle="BLOGS"
          headerTitle="BLOGS"
          titleFontSize={500}
          // blurImg="white"
          blurImg="green"
        />
      </div>
      <HorizontalLine />
      <div className={styles["lower"]}>lower</div>
    </PageLayout>
  );
};

export default Test;
