import Link from "next/link";
import React from "react";
import styles from "@/styles/elements.module.scss";

interface Props {
  link: string;
  title: string;
  simplerLink?: boolean;
  onLinkClick?: (
    n?: number,
    x?: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
  linkNumber?: number;
  isActive?: boolean;
  nonRedirecting?: boolean;
}

const AnimatedLink: React.FC<Props> = ({
  link,
  title,
  simplerLink = false,
  onLinkClick,
  linkNumber,
  isActive = false,
  nonRedirecting = false,
}) => {
  const simplerClass = styles[simplerLink ? "--simpler" : ""];
  const activeClass = styles[isActive ? "--active" : ""];
  const baseClass = styles["AnimatedLink"];
  const classNames = `${baseClass} ${simplerClass} ${activeClass}`;
  return nonRedirecting ? (
    <a
      className={classNames}
      onClick={(e) => {
        onLinkClick?.(linkNumber, e);
      }}
    >
      {title}
    </a>
  ) : (
    <Link
      href={link}
      className={classNames}
      onClick={(e) => {
        onLinkClick?.(linkNumber, e);
      }}
    >
      {title}
    </Link>
  );
};

export default AnimatedLink;
