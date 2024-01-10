import React from "react";
import { BlogsCardResponse } from "@/types";
import styles from "@/styles/blogs.module.scss";
import Image from "next/image";
import TextWithCircle from "@/components/Elements/TextWithCircle";
import Link from "next/link";

const BlogCard = ({ date, id, thumbnail, title }: BlogsCardResponse) => {
  return (
    <div className={styles["blog-card"]}>
      <div className={styles["blog-card__thumbnail"]}>
        <Link href={"blogs/" + id}>
          <Image src={thumbnail} alt="" layout="responsive" />
        </Link>
      </div>
      <div className={styles["blog-card__content"]}>
        <div className={styles["blog-card__content__date"]}>{date}</div>
        <div className={styles["blog-card__content__title"]}>
          <Link href={"blogs/" + id}>{title}</Link>
        </div>
        <div className={styles["blog-card__content__read-more"]}>
          <Link href={"blogs/" + id}>
            <TextWithCircle
              textRight="Read More"
              fontColor="DARK"
              outerCircleDim={16}
              innerCircleDim={6}
              fontSize={24}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
