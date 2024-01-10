import React from "react";
import styles from "@/styles/work.module.scss";
import Image from "next/image";
import greenblob1 from "../../../../public/assets/work/greenblob1.png";
import greenblob2 from "../../../../public/assets/work/greenblob2.png";
import greenblob3 from "../../../../public/assets/work/greenblob3.png";
import redblob1 from "../../../../public/assets/work/redblob1.png";
import redblob2 from "../../../../public/assets/work/redblob2.png";
import redblob3 from "../../../../public/assets/work/redblob3.png";

const imgsIndex = 0;

const HeroBlogImg = ({
  containerRef,
}: {
  containerRef?: React.LegacyRef<HTMLDivElement>;
}) => {
  return (
    <div className={styles["hero-blob-img-container"]} ref={containerRef}>
      {[
        [redblob1, greenblob1],
        [redblob2, greenblob2],
        [redblob3, greenblob3],
      ].map((img, i) => {
        const imgToShow = img[imgsIndex];
        return (
          <Image
            key={i}
            className={styles["blob-" + (i + 1)]}
            src={imgToShow}
            alt=""
            layout="responsive"
          />
        );
      })}
    </div>
  );
};

export default HeroBlogImg;
