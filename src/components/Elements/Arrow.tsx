import React from "react";
import styles from "@/styles/elements.module.scss";

export const ArrowLeft = () => {
  return (
    <div className={styles["arrow-btn"] + " " + styles["arrow-btn--left"]}>
      <svg
        width="23"
        height="25"
        viewBox="0 0 23 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles['arrow']}
      >
        <path
          d="M19.565 0.356817L1.10421 10.8903C-0.368069 11.73 -0.368069 13.0926 1.10421 13.9323L19.565 24.4657C21.0372 25.3054 22.2307 24.6125 22.2307 22.9175V1.90495C22.2297 0.210027 21.0372 -0.482891 19.565 0.356817Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export const ArrowRight = () => {
  return (
    <div className={styles["arrow-btn"] + " " + styles["arrow-btn--right"]}>
      <svg
        width="23"
        height="25"
        viewBox="0 0 23 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles['arrow']}
      >
        <path
          d="M21.896 10.8903L3.43516 0.356817C1.96303 -0.482891 0.769531 0.210027 0.769531 1.90495V22.9167C0.769531 24.6116 1.96303 25.3047 3.43516 24.4648L21.896 13.9323C23.3683 13.0918 23.3683 11.7299 21.896 10.8903Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

const Arrow = ({ direction }: { direction: "LEFT" | "RIGHT" }) => {
  return direction == "LEFT" ? <ArrowLeft /> : <ArrowRight />;
};

export default Arrow;
