import React from "react";
import styles from "@/styles/pagelayout.module.scss";

import Link from "next/link";

const MENUS = [
  { title: "Work", link: "/work/" },
  { title: "Services", link: "/services/" },
  { title: "Blogs", link: "/blogs/" },
  { title: "Contact", link: "/contact/" },
];

const Navbar = ({
  handleNavBtnClick,
  menusContainerRef,
  isMenuExpanded,
}: {
  isMenuExpanded: boolean;
  handleNavBtnClick: React.MouseEventHandler<HTMLDivElement>;
  menusContainerRef: React.LegacyRef<HTMLDivElement>;
}) => {
  const fillStrokeColor = React.useMemo(() => {
    return isMenuExpanded ? "primary" : "white";
  }, [isMenuExpanded]);

  return (
    <div className={styles["navbar-wrapper"]}>
      <div className={styles["navbar-container"]}>
        <div className={styles["navbar-container__logo"]}>
          <Link href={"/"}>
            <LogoIcon color={fillStrokeColor} />
          </Link>
        </div>

        <div
          className={styles["navbar-container__menus"]}
          ref={menusContainerRef}
        >
          {MENUS.map(({ link, title }, i) => (
            <Link
              key={title + i}
              href={link}
              className={styles["navbar-container__menus__menu"]}
            >
              {title}
            </Link>
          ))}
        </div>

        <div
          className={styles["navbar-container__hamIcon"]}
          onClick={handleNavBtnClick}
        >
          <HamburgerIcon color={fillStrokeColor} />
        </div>
      </div>
    </div>
  );
};

function HamburgerIcon({ color }: { color: "white" | "primary" }) {
  const strokeColor = {
    white: "#fff",
    primary: "#0a3031",
  }[color];

  return (
    <svg
      width="51"
      height="19"
      viewBox="0 0 51 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[
        "M1 1.26459C21.1119 -0.601888 24.7687 8.26387 50 1.26459",
        "M1 8.26459C21.1119 6.39811 24.7687 15.2639 50 8.26459",
        "M1 15.2646C21.1119 13.3981 24.7687 22.2639 50 15.2646",
      ].map((p, i) => {
        return (
          <path key={i} d={p} stroke={strokeColor} stroke-linecap="round" />
        );
      })}
    </svg>
  );
}

function LogoIcon({ color }: { color: "white" | "primary" }) {
  const fillColor = {
    white: "#fff",
    primary: "#0a3031",
  }[color];

  return (
    <svg
      width="70"
      height="41"
      viewBox="0 0 70 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 40.4754C0 40.4754 4.27883 33.1725 19.7115 27.6967C21.7295 26.9797 23.5162 25.7308 24.875 24.0771C27.9512 20.336 32.3977 12.6919 32.0912 0C32.0912 0 40.2152 2.57308 44.5287 11.2637C45.6794 13.5824 47.0556 15.7912 48.7729 17.734C51.797 21.1513 56.4054 25.4417 59.973 24.7131C65.7783 23.5336 66.663 17.0344 66.663 17.0344C66.663 17.0344 63.8355 21.7064 56.8217 21.955L55.0408 20.0931C55.0408 20.0931 66.2004 19.3704 69.5946 4.46386C69.5946 4.46386 72.5493 22.1805 62.5056 27.1995C54.3122 31.2933 45.6794 18.9714 42.7767 14.2994C42.3142 13.5535 41.8863 12.7902 41.4757 12.0154C40.6662 10.4889 38.1972 6.36042 34.9997 5.64343C34.9997 5.64343 34.9997 16.7742 28.4773 25.4995C28.4773 25.4995 36.0058 23.7995 43.459 24.3951L45.2284 26.6849C45.2284 26.6849 17.734 27.026 0 40.4754Z"
        fill={fillColor}
      />
    </svg>
  );
}

export default Navbar;
