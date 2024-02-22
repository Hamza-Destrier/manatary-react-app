import React from "react";
import styles from "@/styles/elements.module.scss";
import TextWithCircle from "./TextWithCircle";
import { ExtendedCardProps } from "@/types";
import Link from "next/link";

const Card: React.FC<ExtendedCardProps> = ({
  description,
  title,
  headerText,
  isActive = false,
  onCardClick,
  link,
  cardClassName,
}) => {
  return (
    <div
      className={`${styles["card"]} ${isActive && styles["card--active"]} ${
        cardClassName || ""
      }`}
      onClick={onCardClick}
    >
      {headerText && (
        <div className={styles["card__number"]}>
          <TextWithCircle
            textRight={headerText}
            rightLink={link}
            outerCircleDim={16}
            innerCircleDim={5}
            fontSize={25}
            containerStyles={{ gap: "15px" }}
            innerCircleStyles={{
              backgroundColor: "#fff",
            }}
          />
        </div>
      )}
      <div className={styles["card__title"]}>
        {typeof link === "string" && link.length > 0 ? (
          <Link href={link}>{title}</Link>
        ) : (
          title
        )}
      </div>
      <div className={styles["card__description"]}>{description}</div>
    </div>
  );
};

export default Card;
