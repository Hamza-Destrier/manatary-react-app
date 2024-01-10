import React from "react";
import styles from "@/styles/servicespage.module.scss";
import Image from "next/image";
import meshImg from "../../../../public/assets/common/mesh-bg.svg";
import BigAnimatedHeading from "@/components/Elements/BigAnimatedHeading";

const Filler = () => {
  return (
    <div className={styles["filler-container"]}>
      <div className={styles["filler-container__text"]}>
        {`Looking to transform your online presence with`
          .split(" ")
          .map((w, i) => {
            return (
              <>
                <BigAnimatedHeading direction={i % 2 != 0 ? "right" : "left"}>
                  {w}
                </BigAnimatedHeading>{" "}
              </>
            );
          })}

        <br />
        <span className="color-secondary">
          {`captivating designs?`.split(" ").map((w, i) => {
            return (
              <>
                <BigAnimatedHeading direction={i % 2 != 0 ? "right" : "left"}>
                  {w}
                </BigAnimatedHeading>{" "}
              </>
            );
          })}
        </span>
      </div>

      <div className={styles["filler-container__img"]}>
        <Image src={meshImg} alt="" width={240} />
      </div>
    </div>
  );
};

export default Filler;
