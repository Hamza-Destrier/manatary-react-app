import { Work } from "@/types";
import w1_FeatureImg from "../../../public/assets/work/hero-img-1.png";
import w1_DetailImgLeft from "../../../public/assets/work/details-img-left.png";
import w1_DetailImgRight from "../../../public/assets/work/details-img-right.png";
import w1_showcaseImg1 from "../../../public/assets/work/showcase-img-1.png";
import w1_showcaseImg2 from "../../../public/assets/work/showcase-img-2.png";
import w1_showcaseImg3 from "../../../public/assets/work/showcase-img-3.png";

const ALL_WORKS: Work[] = [
  {
    id: 1,
    title: "Your Only Limit",
    heroImage: w1_FeatureImg,
    tags: ["Website Design", "Animation", "Creative Development", "Marketing"],
    intro: {
      description: `Only limit is a cutting-edge group of fashion pioneers creating gaming
      apparel and utilizing 3D technology to create every unique garment.
      Our mission encompassed the creation of a futuristic website to
      introduce this brand to the market. We are thrilled to declare:
      mission accomplished.`,
    },
    details: {
      colLeftImg: w1_DetailImgLeft,
      colRightImg: w1_DetailImgRight,
      heading: `Amazing Posters`,
      description: `Introducing a digital realm where imagination meets technology -
      this website is an immersive journey powered by techy animations.
      Step into a space where innovation unfolds at every click, and your
      interaction with the digital landscape is redefined. This website is
      an immersive journey powered by techy animations. Step into a space
      where innovation unfolds at every click, and your interaction with
      the digital landscape is redefined.`,
    },
    showcase: {
      img1: w1_showcaseImg1,
      img2: w1_showcaseImg2,
      img3: w1_showcaseImg3,
      heading: `Unique & Engaging Visuals`,
      description: `Our mood are a glimpse into the soul company, a visual encapsulation
      of our aspirations, and a roadmap to our future endeavors. We use a
      black background, image distortion, integrate floating 3D elements,
      utilize oversized fonts, and a vibrant pop of color to stand out
      against the dark background. This creates an immersive experience
      that envelops users in the brand's narrative while evoking emotions.`,
    },
  },
];

export default ALL_WORKS;
