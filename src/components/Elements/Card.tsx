import React from "react";
import styles from "@/styles/elements.module.scss";
import TextWithCircle from "./TextWithCircle";
import { ExtendedCardProps } from "@/types";

const Card: React.FC<ExtendedCardProps> = ({
  description,
  title,
  headerText,
  isActive = false,
  onCardClick,
}) => {
  return (
    <div
      className={`${styles["card"]} ${isActive && styles["card--active"]}`}
      onClick={onCardClick}
    >
      {headerText && (
        <div className={styles["card__number"]}>
          <TextWithCircle
            textRight={headerText}
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
      <div className={styles["card__title"]}>{title}</div>
      <div className={styles["card__description"]}>{description}</div>
    </div>
  );
};

export default Card;
