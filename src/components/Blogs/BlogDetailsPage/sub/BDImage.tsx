import { ContentImage } from "@/types";
import React from "react";
import styles from "@/styles/blogs.module.scss";
import Image from "next/image";

const BDImage = ({ data, alt }: ContentImage) => {
  return (
    <div className={styles["bd-image"]}>
      <Image src={data} alt={alt} layout="responsive" />
    </div>
  );
};

export default BDImage;
