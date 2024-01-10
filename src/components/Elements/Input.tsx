import React from "react";
import styles from "@/styles/elements.module.scss";

const Arrow = ({ className }: { className: string }) => {
  return (
    <svg
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.64021 8.31223L2.09712 14.8163C1.61729 15.2302 0.839327 15.2302 0.359728 14.8163C-0.119909 14.4027 -0.119909 13.7319 0.359728 13.3184L7.0342 7.56327L0.359922 1.80837C-0.119715 1.39462 -0.119715 0.723895 0.359922 0.310312C0.83956 -0.103437 1.61749 -0.103437 2.09732 0.310312L9.64041 6.81448C9.88023 7.02137 10 7.29223 10 7.56324C10 7.83437 9.87999 8.10544 9.64021 8.31223Z"
        fill="white"
      />
    </svg>
  );
};

const Input = () => {
  return (
    <div className={styles["input-comp"]}>
      <input
        className={styles["input-comp__input"]}
        type="text"
        placeholder="YOUR EMAIL"
      />
      <div className={styles["input-comp__underline"]} />
      <div className={styles["input-comp__arrow__container"]}>
        <Arrow className={styles["input-comp__arrow__container__arrow"]} />
      </div>
    </div>
  );
};

export default Input;
