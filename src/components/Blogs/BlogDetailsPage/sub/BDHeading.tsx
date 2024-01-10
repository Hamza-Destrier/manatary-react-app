import { ContentText } from "@/types";
import React from "react";
import styles from "@/styles/blogs.module.scss";

const BDHeading = ({ data }: ContentText) => {
  return <div className={styles['bd-heading']}>{data}</div>;
};

export default BDHeading;
