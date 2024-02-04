import { Work } from "@/types";
import w1_FeatureImg from "../../../public/assets/work/hero-img-1.png";
import w1_DetailImgLeft from "../../../public/assets/work/elmakan-house-img-left.png";
import w1_DetailImgRight from "../../../public/assets/work/elmakan-house-img-right.png";
import w1_showcaseImg1 from "../../../public/assets/work/elmakan-showcase-img-1.png";
import w1_showcaseImg2 from "../../../public/assets/work/elmakan-showcase-img-2.png";
import w1_showcaseImg3 from "../../../public/assets/work/elmakan-showcase-img-3.png";
import w2_FeatureImg from "../../../public/assets/work/hero-img-2.png";
import w2_DetailImgLeft from "../../../public/assets/work/fitness-img-left.png";
import w2_DetailImgRight from "../../../public/assets/work/fitness-img-right.png";
import w2_showcaseImg1 from "../../../public/assets/work/fitness-showcase-img-1.png";
import w2_showcaseImg2 from "../../../public/assets/work/fitness-showcase-img-2.png";
import w2_showcaseImg3 from "../../../public/assets/work/fitness-showcase-img-3.png";

const ALL_WORKS: Work[] = [
  {
    id: 1,
    title: "El Makan",
    heroImage: w1_FeatureImg,
    // tags: ["Home Sweet Home", "Discover Perfect Home", "House Hunting Guide", "Living Space Discovery"],
    tags: ["Website Design", "Animation", "Creative Development", "Marketing"],
    intro: {
      description: `Embark on a journey to find your perfect living space and turn your vision into reality with Elmakan. Our platform offers everything you need for a seamless experience in discovering your ideal home. Become an Elmakan host and unlock a new source of income by putting your space to work. Whether it's for personal or professional gatherings, open your doors and earn extra income effortlessly. Elmakan is here to make the process easier for you, ensuring that every aspect of finding and utilizing your living space is at your fingertips.`,
    },
    details: {
      colLeftImg: w1_DetailImgLeft,
      colRightImg: w1_DetailImgRight,
      heading: `Why Elmakan`,
      description: `Explore a world of possibilities with Elmakan, where new and never-ending opportunities await. From professionally equipped studios to unconventional rooms and residences, find the perfect space for your activities. Elmakan opens doors to a diverse range of spaces, ensuring you discover unique and inspiring environments for your every need.`,
    },
    showcase: {
      img1: w1_showcaseImg1,
      img2: w1_showcaseImg2,
      img3: w1_showcaseImg3,
      heading: `Elmakan for Companies`,
      description: `Join the future of work with Elmakan for Companies. Thousands of companies are embracing the work-from-anywhere culture, boosting productivity and employee retention. Provide your team with the flexibility to work from hundreds of workspaces across Singapore, Hong Kong, Indonesia, Malaysia, and the UAE. Elmakan is your key to unlocking a more flexible and efficient work environment.`,
    },
  },
  {
    id: 2,
    title: "YallaPass",
    heroImage: w2_FeatureImg,
    // tags: ["Yoga", "Health", "Fitness", "Fitness With YallaPass"],
    tags: ["Website Design", "Animation", "Creative Development", "Marketing"],
    intro: {
      description: `Embark on a wellness journey with YallaPass, unlocking a world of classes through one subscription. Access a variety of classes across multiple studios, offering endless possibilities for your fitness and health goals. Maximize savings and minimize hassle with YallaPass, eliminating the need for multiple memberships or high drop-in fees. Seamlessly discover, book, and enjoy a diverse range of classes that fit your schedule and interests. Get started with YallaPass today for a holistic approach to your well-being.`,
  },
    details: {
      colLeftImg: w2_DetailImgLeft,
      colRightImg: w2_DetailImgRight,
      heading: "Elevate with Face Yoga Frequency",
      description: `Indulge in a unique full-face toning session with Face Yoga Frequency, available in group classes at your Yoga Studio. Tone your facial muscles while having a great time making funny faces. Join a community of wellness enthusiasts at Lotus Center and experience the rejuvenating benefits of Face Yoga for a radiant and healthy glow.`,
    },
    showcase: {
      img1: w2_showcaseImg1,
      img2: w2_showcaseImg2,
      img3: w2_showcaseImg3,
      heading: "Journey to Serenity at Lotus Center",
      description: `Immerse yourself in the serene ambiance of Lotus Center, your destination for a full-face toning session through Face Yoga. Join group classes to tone and strengthen your facial muscles while enjoying the camaraderie of like-minded individuals. Achieve holistic wellness and a revitalized spirit at Lotus Center with YallaPass.`,
    },
  }
];

export default ALL_WORKS;