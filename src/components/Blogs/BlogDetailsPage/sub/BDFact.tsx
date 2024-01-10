import { ContentText } from "@/types";
import React from "react";
import styles from "@/styles/blogs.module.scss";
import searchIcon from "../../../../../public/assets/common/search-icon.svg";
import Image from "next/image";

const BDFact = ({ data }: ContentText) => {
  return (
    <div className={styles["bd-fact"]}>
      <Image src={searchIcon} alt="" />
      <div>{data}</div>
    </div>
  );
};

export default BDFact;
