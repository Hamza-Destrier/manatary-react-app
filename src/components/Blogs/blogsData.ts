import imgBlog1 from "../../../public/assets/blogs/blog-thumbnail-1.png";
import imgBlog2 from "../../../public/assets/blogs/blog-thumbnail-2.png";
import imgBlog3 from "../../../public/assets/blogs/blog-thumbnail-3.png";
import imgBlog4 from "../../../public/assets/blogs/blog-thumbnail-4.png";
import imgBlog5 from "../../../public/assets/blogs/blog-thumbnail-5.png";
import blogfeaturedImg1 from "../../../public/assets/blogs/blog-featured-img-1.jpg";
import blogfeaturedImg2 from "../../../public/assets/blogs/blog-featured-img-2.png";
import blogfeaturedImg3 from "../../../public/assets/blogs/blog-featured-img-3.jpg";
import blogfeaturedImg4 from "../../../public/assets/blogs/blog-featured-img-4.jpg";
import blogfeaturedImg5 from "../../../public/assets/blogs/blog-featured-img-5.jpg";

import blogContentImg from "../../../public/assets/blogs/blog-content-img.png";
import { BlogsCardResponse, BlogDetails } from "@/types";

const blog1Details: BlogDetails = {
  title: "Maximizing ROI",
  subTitle: "Through Intelligent Software Solutions with Mantaray Digital",
  editor: "Ahmed Afify",
  featuredImg: blogfeaturedImg1,
  excerpt:
    "Discover how partnering with Mantaray Digital can help you maximize ROI through intelligent software solutions tailored to your business needs.",
  footerNote: `Ready to maximize your ROI with Mantaray Digital?`,
  content: [
    {
      type: "TEXT",
      data: "Software testing. Finding bugs, errors, software optimization. Programming developing coding. Programmer, SEO specialist cartoon character. Vector isolated concept metaphor illustration",
    },
    { type: "HEADING", data: "Introduction: The Quest for Higher ROI" },
    {
      type: "TEXT",
      data: "In the competitive business landscape of 2023, achieving a higher ROI is a common goal for enterprises. At Mantaray Digital, we specialize in crafting intelligent software solutions that not only streamline operations but also significantly boost ROI. Let's delve into the strategies that can help your business attain this coveted goal.",
    },
    { type: "HEADING", data: "1. Customized Software Solutions" },
    {
      type: "TEXT",
      data: "Explore the world of customized software solutions with Mantaray Digital, where we develop software tailored to meet your specific business requirements, thereby enhancing efficiency and ROI.",
    },
    {
      type: "TEXT",
      data: `Client Testimonial: “Mantaray Digital's customized solutions have been a game-changer for our business, significantly boosting our ROI.” - CEO, ABC Corp`,
      isItalic: true,
    },
    { type: "HEADING", data: "2. Data-Driven Decision Making" },
    {
      type: "TEXT",
      data: "Harness the power of data with Mantaray Digital. Learn how utilizing data analytics can facilitate informed decision-making, helping you to optimize strategies and achieve higher ROI.",
    },
    { type: "HEADING", data: "3. Automation and Efficiency" },
    {
      type: "TEXT",
      data: "Step into the future with automation solutions from Mantaray Digital. Discover how automating repetitive tasks can free up valuable resources, allowing your team to focus on strategic initiatives that enhance ROI.",
    },
    {
      type: "FACT",
      data: "Stat Insight: Companies utilizing automation can see a 60% improvement in ROI.",
    },
    { type: "HEADING", data: "4. Scalable Software Architecture" },
    {
      type: "TEXT",
      data: "Build a foundation for success with scalable software architecture. At Mantaray Digital, we emphasize creating software solutions that can grow with your business, ensuring long-term ROI.",
    },
    { type: "HEADING", data: "5. Enhanced User Experience" },
    {
      type: "TEXT",
      data: "Unlock the potential of enhanced user experience with Mantaray Digital. Learn how creating user-friendly interfaces can boost customer satisfaction and loyalty, ultimately leading to higher ROI.",
    },
    {
      type: "HEADING",
      data: "Conclusion: Your Pathway to Enhanced ROI",
    },
    {
      type: "TEXT",
      data: "In the quest for higher ROI, intelligent software solutions serve as your ally. Mantaray Digital stands ready to assist you in navigating this journey, offering expertise and solutions that align with your business objectives.",
    },
  ],
};

const blog2Details: BlogDetails = {
  title: "Unlocking Business Potential",
  subTitle: "Leveraging UI/UX Design to Enhance User Satisfaction",
  editor: "Ahmed Afify",
  featuredImg: blogfeaturedImg2,
  excerpt:
    "Embark on a journey with Mantaray Digital to revolutionize user experiences.",
  footerNote: `Ready to revolutionize your digital presence?`,
  content: [
    { type: "HEADING", data: "Why UI/UX Design is Your Game Changer" },
    {
      type: "TEXT",
      data: "In today's competitive market, understanding and implementing effective UI/UX design can be the defining factor in the success of your digital platform. Here at Mantaray Digital, we are at the forefront of crafting digital solutions that not only look good but feel great to use. Let's explore how enhancing UI/UX design can spike user satisfaction and drive business growth.",
    },
    { type: "HEADING", data: "The Dual Powerhouse of UI and UX" },
    {
      type: "TEXT",
      data: "At the heart of digital success lies two essential elements: User Interface (UI) and User Experience (UX). While UI zeroes in on the visual aesthetics and interactive elements of a platform, UX focuses on the overall feel and navigation. Merging these two aspects strategically creates a harmonious and engaging platform that users gravitate towards.",
    },
    {
      type: "FACT",
      data: "Did you know? A well-structured UI/UX design can increase conversion rates up to 400%.",
    },
    {
      type: "IMAGE",
      data: blogContentImg,
      alt: "",
    },
    {
      type: "HEADING",
      data: "Boosting Engagement: More Than Just Aesthetics",
    },
    {
      type: "TEXT",
      data: "Creating an impact goes beyond just visuals. A thoughtful design process aims to captivate users, encouraging them to explore and interact more with the platform. By tailoring the UI elements to match the preferences of your target audience and facilitating smooth navigation, Mantaray Digital strives to elevate user engagement and retention rates.",
    },
    { type: "HEADING", data: "Decrease Bounce Rates: A Smooth Journey" },
    {
      type: "TEXT",
      data: "A finely-tuned UX design ensures that users can find what they are seeking without friction, thus reducing bounce rates significantly. By carving out intuitive user journeys, we help in nurturing a loyal customer base that keeps coming back for more.",
    },
    {
      type: "HEADING",
      data: "Fostering Conversions: Streamlined and Appealing",
    },
    {
      type: "TEXT",
      data: "UI/UX design serves as a potent tool to boost conversions. By crafting visually appealing interfaces that guide users seamlessly towards conversion points, we amplify your business success manifold.",
    },
    { type: "HEADING", data: "Achieving Competitive Edge with Strategies" },
    {
      type: "TEXT",
      data: "In the bustling digital space, having a unique identity is key. Through innovative UI/UX strategies, we equip you with a competitive edge that sets you apart. Continual adaptation and embracing new trends are part of the Mantaray Digital ethos, offering futuristic solutions that resonate with contemporary audiences.",
    },
    { type: "HEADING", data: "Conclusion: Your Pathway to Success" },
    {
      type: "TEXT",
      data: "Leveraging UI/UX design is not just a strategy; it's a pathway to fostering a deeper connection with your audience. Join hands with Mantaray Digital, where innovation meets expertise, propelling your business towards a brighter, more prosperous future.",
    },
  ],
};

const blog3Details: BlogDetails = {
  title: "2023 Vision",
  subTitle: "Top Trends in Software Development",
  editor: "Ahmed Afify",
  featuredImg: blogfeaturedImg3,
  excerpt:
    "Steer your business towards innovation and success by aligning with the cutting-edge trends in the software development sector.",
  footerNote: `Ready to navigate the future of software development with expertise and innovation?`,
  content: [
    { type: "HEADING", data: "Introduction: Steering Towards the Future" },
    {
      type: "TEXT",
      data: "In an ever-evolving tech landscape, staying ahead of the curve is not a luxury but a necessity. This year promises to unfold several transformative trends in the software development sector. As Mantaray Digital stands at the nexus of technology and innovation, we bring you insights into the trends that are shaping the future of software development in 2023.",
    },
    {
      type: "HEADING",
      data: "1. Artificial Intelligence (AI) and Machine Learning",
    },
    {
      type: "TEXT",
      data: "Harness the power of AI and Machine Learning to enhance data analytics, automate tasks, and deliver personalized experiences. Mantaray Digital’s expertise in integrating these technologies can help your business soar to new heights.",
    },
    {
      type: "FACT",
      data: "Stat Insight: AI market size is expected to reach $390.9 billion by 2025.",
    },
    {
      type: "HEADING",
      data: "2. Internet of Things (IoT)",
    },
    {
      type: "TEXT",
      data: "IoT continues to expand its footprint, connecting devices and creating smart ecosystems. Explore with us how to leverage IoT to optimize operations and deliver innovative solutions to your clients.",
    },
    { type: "HEADING", data: "3. Blockchain Technology" },
    {
      type: "TEXT",
      data: "Navigate the world of Blockchain with Mantaray Digital, where we demystify the potential of this secure and transparent technology in revolutionizing business operations and data security.",
    },
    {
      type: "HEADING",
      data: "4. Augmented and Virtual Reality (AR & VR)",
    },
    {
      type: "TEXT",
      data: "Step into the future with AR & VR technologies that offer immersive experiences and open new vistas for business opportunities. From virtual try-ons to interactive 3D ads, the possibilities are endless.",
    },
    { type: "HEADING", data: "5. DevOps & Continuous Delivery" },
    {
      type: "TEXT",
      data: "In 2023, the emphasis is on speed and efficiency. Learn how adopting DevOps and continuous delivery approaches can help in accelerating product development cycles and enhancing collaboration.",
    },
    { type: "HEADING", data: "Conclusion: Your Partner in Innovation" },
    {
      type: "TEXT",
      data: "As the software development landscape transforms, aligning with a forward-thinking partner like Mantaray Digital can guide your business towards a future of growth and innovation.",
    },
  ],
};

const blog4Details: BlogDetails = {
  title: "Empowering Modern Businesses",
  subTitle: "Essential IT Consultancy Services with Mantaray Digital",
  editor: "Ahmed Afify",
  featuredImg: blogfeaturedImg4,
  excerpt:
    "Discover how Mantaray Digital's IT consultancy services can be the catalyst for your business transformation in 2023.",
  footerNote: `Ready to embark on a journey of transformation with Mantaray Digital?`,
  content: [
    {
      type: "HEADING",
      data: "Introduction: The Backbone of Modern Enterprises",
    },
    {
      type: "TEXT",
      data: "In the digital age, IT consultancy services have emerged as the backbone of modern enterprises, steering them towards efficiency and innovation. Mantaray Digital is at the helm of this transformation, offering bespoke IT consultancy services that align with your business objectives. Let’s delve into the essential services that can propel your business to new heights in 2023.",
    },
    { type: "HEADING", data: "1. Strategic IT Consulting" },
    {
      type: "TEXT",
      data: "Navigate the complex landscape of IT with strategic consulting services from Mantaray Digital. From crafting robust IT strategies to optimizing operations, we guide businesses towards sustainable growth.",
    },
    {
      type: "HEADING",
      data: "2. Cybersecurity Solutions",
    },
    {
      type: "TEXT",
      data: "In a world where data breaches are rampant, safeguarding your business assets is paramount. Learn how our cybersecurity solutions can fortify your business against potential threats and ensure data integrity.",
    },
    { type: "HEADING", data: "3. Cloud Computing and Migration" },
    {
      type: "TEXT",
      data: "Leverage the power of the cloud with Mantaray Digital. Our experts assist in seamless cloud migration and help you harness the benefits of scalability, flexibility, and cost-efficiency.",
    },
    {
      type: "HEADING",
      data: "4. Business Process Optimization",
    },
    {
      type: "TEXT",
      data: "Streamline your business processes with our optimization services. From automating repetitive tasks to enhancing workflow efficiency, we facilitate a smoother operational trajectory for your business.",
    },
    { type: "HEADING", data: "5. Software Integration and Customization" },
    {
      type: "TEXT",
      data: "Unlock the full potential of your software investments with our integration and customization services. We ensure that your software ecosystem works in harmony, fostering productivity and innovation.",
    },
    {
      type: "HEADING",
      data: "Conclusion: Your Trusted IT Consultancy Partner",
    },
    {
      type: "TEXT",
      data: "In the dynamic business landscape, having a trusted IT consultancy partner can be a game-changer. Mantaray Digital stands as your ally, offering expertise and solutions that align with your business vision.",
    },
  ],
};

const blog5Details: BlogDetails = {
  title: "Robust Software Development",
  subTitle:
    "Building a Robust Software Development Strategy with Mantaray Digital",
  editor: "Ahmed Afify",
  featuredImg: blogfeaturedImg5,
  excerpt:
    "Join hands with Mantaray Digital to craft a software development strategy that stands the test of time and propels your business forward.",
  footerNote: `Ready to craft a winning software development strategy with Mantaray Digital?`,
  content: [
    { type: "HEADING", data: "Introduction: The Blueprint of Success" },
    {
      type: "TEXT",
      data: "In the rapidly evolving digital landscape, a robust software development strategy serves as the blueprint for business success. At Mantaray Digital, we specialize in crafting strategies that are not only resilient but also adaptive to the changing market dynamics. Let’s explore the key components that constitute a successful software development strategy in 2023.",
    },
    { type: "HEADING", data: "1. Understanding the Market Dynamics" },
    {
      type: "TEXT",
      data: "Embark on your software development journey with a deep understanding of the market dynamics. Mantaray Digital assists in analyzing the current trends, customer preferences, and competitive landscape to carve out a strategy that resonates with your target audience.",
    },
    { type: "HEADING", data: "2. Agile and Adaptive Development" },
    {
      type: "TEXT",
      data: "In 2023, agility is the name of the game. Learn how adopting an agile and adaptive approach to development can foster innovation and quick response to market changes, ensuring your business stays ahead of the curve.",
    },
    {
      type: "FACT",
      data: "Case Study: See how Company XYZ transformed their product development cycle with Mantaray Digital’s agile approach.",
    },
    {
      type: "HEADING",
      data: "3. Leveraging Emerging Technologies",
    },
    {
      type: "TEXT",
      data: "Harness the potential of emerging technologies to create software solutions that are futuristic and aligned with the needs of the modern consumer. Mantaray Digital stands as your technology partner, guiding you in integrating these technologies seamlessly into your strategy.",
    },
    { type: "HEADING", data: "4. User-Centric Design" },
    {
      type: "TEXT",
      data: "At the core of a successful software strategy lies a user-centric design. Discover how focusing on the user experience and incorporating feedback into the development process can create products that resonate with your audience.",
    },
    {
      type: "HEADING",
      data: "5. Continuous Improvement and Optimization",
    },
    {
      type: "TEXT",
      data: "The journey doesn't end with the launch. Mantaray Digital believes in the philosophy of continuous improvement, offering services that help in optimizing and updating your software to meet the evolving market demands.",
    },
    { type: "HEADING", data: "Conclusion: Your Partner in Growth" },
    {
      type: "TEXT",
      data: "Building a robust software development strategy is a collaborative endeavor. Mantaray Digital stands as your trusted partner, offering expertise and insights that fuel your business growth.",
    },
  ],
};

export const ALL_BLOGS: BlogsCardResponse[] = [
  {
    id: 1,
    thumbnail: imgBlog1,
    title:
      "Maximizing ROI through Intelligent Software Solutions with Mantaray Digital",
    date: "September 19, 2023",
    details: blog1Details,
    nextBlogId: 2,
    prevBlogId: 5,
  },
  {
    id: 2,
    thumbnail: imgBlog2,
    title:
      "Unlocking Business Potential: Leveraging UI/UX Design to Enhance User Satisfaction",
    date: "September 19, 2023",
    details: blog2Details,
    nextBlogId: 3,
    prevBlogId: 1,
  },
  {
    id: 3,
    thumbnail: imgBlog3,
    title: "2023 Vision: Top Trends in Software Development",
    date: "September 19, 2023",
    details: blog3Details,
    nextBlogId: 4,
    prevBlogId: 2,
  },
  {
    id: 4,
    thumbnail: imgBlog4,
    title:
      "Empowering Modern Businesses: Essential IT Consultancy Services with Mantaray Digital",
    date: "September 13, 2023",
    details: blog4Details,
    nextBlogId: 5,
    prevBlogId: 3,
  },
  {
    id: 5,
    thumbnail: imgBlog5,
    title:
      "Building a Robust Software Development Strategy with Mantaray Digital",
    date: "August 9, 2023",
    details: blog5Details,
    nextBlogId: 1,
    prevBlogId: 4,
  },
];
