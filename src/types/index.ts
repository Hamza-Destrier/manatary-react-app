export * from "./work";

import { StaticImageData } from "next/image";

export type GenericElements =
  | React.ReactElement
  | React.ReactElement[]
  | React.ReactNode
  | React.ReactNode[]
  | JSX.Element
  | JSX.Element[];

export interface CardProps {
  title: string;
  description: string;
  headerText?: string;
}

export interface ExtendedCardProps extends CardProps {
  isActive?: boolean;
  onCardClick?: (x?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export interface ContentParagraph {
  type: "TEXT";
  data: string;
  isItalic?: boolean;
}

export interface ContentText {
  type: "HEADING" | "FACT";
  data: string;
}

export interface ContentImage {
  type: "IMAGE";
  data: StaticImageData;
  alt: string;
}

type BlogDetailsContent = ContentText | ContentImage | ContentParagraph;

export interface BlogDetails {
  title: string;
  subTitle: string;
  editor: string;
  featuredImg: StaticImageData;
  content: BlogDetailsContent[];
  excerpt: string;
  footerNote: string;
}

export interface BlogsCardResponse {
  id: number;
  thumbnail: StaticImageData;
  title: string;
  date: string;
  details: BlogDetails;
  nextBlogId: number;
  prevBlogId: number;
}
