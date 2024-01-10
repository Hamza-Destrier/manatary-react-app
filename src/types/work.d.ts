import { StaticImageData } from "next/image";

export interface Intro {
  description: string;
}
export interface Details {
  colLeftImg: StaticImageData;
  colRightImg: StaticImageData;
  heading: string;
  description: string;
  subHeading?: string; // default = CHALLENGE
}

export interface Showcase {
  img1: StaticImageData;
  img2: StaticImageData;
  img3: StaticImageData;
  heading: string;
  description: string;
  subHeading?: string; // defalut = MOOD
}
export interface Work {
  id: number;
  title: string;
  tags: string[];
  heroImage: StaticImageData;
  intro: Intro;
  details: Details;
  showcase: Showcase;
}

export interface WorkResponse {
  id: number;
  title: string;
  tags: string[];
  heroImage: StaticImageData; // Just image name.
  intro: {
    description: string;
  };
  details: {
    colLeftImg: StaticImageData; // Just image name.
    colRightImg: StaticImageData; // Just image name.
    heading: string;
    subHeading?: string; // default = CHALLENGE
    description: string;
  };
  showcase: {
    img1: StaticImageData; // Just image name.
    img2: StaticImageData; // Just image name.
    img3: StaticImageData; // Just image name.
    heading: string;
    subHeading?: string; // defalut = MOOD
    description: string;
  };
}
