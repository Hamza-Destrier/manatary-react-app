interface Feature {
  serviceId: number;
  title: string;
  description: string;
}

interface Benefit {
  serviceId: number;
  title: string;
  description: string;
}

interface ServiceResponse {
  id: number;
  title: [string, string];
  description: string;
  features: Feature[];
  benefit: Benefit[];
}

const s1Features: Feature[] = [
  {
    serviceId: 1,
    title: "Custom Development",
    description:
      "Tailored solutions built from scratch to resonate with your brand ethos and business needs. Our developers excel at creating websites that are both aesthetically pleasing and functionally robust.",
  },
  {
    serviceId: 1,
    title: "Responsive Design",
    description:
      "Tailored solutions built from scratch to resonate with your brand ethos and business needs. Our developers excel at creating websites that are both aesthetically pleasing and functionally robust.",
  },
  {
    serviceId: 1,
    title: "SEO Optimization",
    description:
      "Our web development strategy includes SEO optimization to enhance your site's visibility on popular search engines, driving organic traffic and fostering business growth.",
  },
  {
    serviceId: 1,
    title: "Content Management",
    description:
      "We offer versatile content management solutions, allowing you to update and manage your site's content effortlessly, keeping your audience engaged with fresh and relevant content.",
  },
  {
    serviceId: 1,
    title: "E-Commerce Integration",
    description:
      "For businesses looking to sell online, we integrate secure and user-friendly e-commerce solutions that facilitate easy product management and transactions.",
  },
  {
    serviceId: 1,
    title: "Analytics and Reporting",
    description:
      "Our websites come integrated with analytics tools that provide insightful data on user behavior, helping you to make informed decisions and continuously optimize your online presence.",
  },
];
const s1Benefits: Benefit[] = [
  {
    serviceId: 1,
    title: "Increased Engagement",
    description:
      "With visually appealing designs and user-friendly interfaces, we help in increasing user engagement, fostering a strong online community around your brand.",
  },
  {
    serviceId: 1,
    title: "Higher Conversion Rates",
    description:
      "Our websites are designed to enhance the user journey, which can lead to higher conversion rates and increased revenue.",
  },
  {
    serviceId: 1,
    title: "Reliable Support",
    description:
      "Our team offers continuous support and maintenance, ensuring your website remains updated and performs optimally at all times.",
  },
];

const s2Features: Feature[] = [
  {
    serviceId: 2,
    title: "Cross-Platform Development",
    description:
      "Craft hybrid apps that work seamlessly across multiple platforms, saving time and resources.",
  },
  {
    serviceId: 2,
    title: "Native App Development",
    description:
      "Benefit from high-performance native apps, optimized for specific platforms, offering an enriched user experience.",
  },
  {
    serviceId: 2,
    title: "User-Centric Design",
    description:
      "Our designs focus on user satisfaction, ensuring a seamless and engaging mobile experience.",
  },
  {
    serviceId: 2,
    title: "Maintenance & Support",
    description:
      "We provide ongoing support to keep your app updated and in line with the latest trends and technologies.",
  },
];
const s2Benefits: Benefit[] = [
  {
    serviceId: 2,
    title: "Broader Reach",
    description:
      "Reach a wider audience with apps optimized for various platforms.",
  },
  {
    serviceId: 2,
    title: "High Engagement",
    description:
      "Deliver an interactive user experience that fosters customer loyalty and brand recognition.",
  },
  {
    serviceId: 2,
    title: "Increased ROI",
    description:
      "Our proficient development strategies aim to boost your ROI with higher user retention rates.",
  },
];

const s3Features: Feature[] = [
  {
    serviceId: 3,
    title: "User-Centric Design",
    description:
      "Develop designs focused on the user's needs and preferences, creating a seamless online journey.",
  },
  {
    serviceId: 3,
    title: "Responsive Design",
    description:
      "Create designs that are adaptable across various devices, offering a consistent user experience.",
  },
  {
    serviceId: 3,
    title: "Prototype and Wireframing",
    description:
      "Utilize prototypes and wireframes to visualize and refine the design before final implementation.",
  },
  {
    serviceId: 3,
    title: "Branding and Graphic Design",
    description:
      "Integrate branding elements seamlessly into the design, establishing a strong brand identity online.",
  },
];
const s3Benefits: Benefit[] = [
  {
    serviceId: 3,
    title: "Competitive Advantage",
    description:
      "Gain a competitive edge with designs that set you apart in the digital landscape.",
  },
  {
    serviceId: 3,
    title: "Increased Conversion Rates",
    description:
      "Develop user journeys that lead to higher conversion rates, boosting your business's bottom line.",
  },
  {
    serviceId: 3,
    title: "Enhanced User Engagement",
    description:
      "Craft interfaces that encourage user interaction and engagement, building a strong online community.",
  },
];

const s4Features: Feature[] = [
  {
    serviceId: 4,
    title: "Custom eCommerce Development",
    description:
      "Tailored solutions that cater to your unique business needs and customer preferences.",
  },
  {
    serviceId: 4,
    title: "Secure Payment Gateways",
    description:
      "Integration with secure and reputed payment gateways, ensuring safe transactions.",
  },
  {
    serviceId: 4,
    title: "Inventory Management",
    description:
      "Implement intuitive inventory management systems that streamline product tracking and management.",
  },
  {
    serviceId: 4,
    title: "Data Analytics",
    description:
      "Leverage data analytics to gain insights into customer behavior and preferences, helping to craft targeted marketing strategies.",
  },
];
const s4Benefits: Benefit[] = [
  {
    serviceId: 4,
    title: "User-Friendly Interface",
    description:
      "Develop platforms that offer a seamless user experience, encouraging repeated visits and purchases.",
  },
  {
    serviceId: 4,
    title: "Scalable Solutions",
    description:
      "Create scalable eCommerce platforms that grow with your business, accommodating increased traffic and product lines.",
  },
  {
    serviceId: 4,
    title: "Optimized for Conversion",
    description:
      "Our eCommerce solutions are optimized to encourage conversions, boosting your online sales and revenue.",
  },
];

const s5Features: Feature[] = [
  {
    serviceId: 5,
    title: "Strategic IT Planning",
    description:
      "Work with us to develop forward-thinking IT strategies that align with your business objectives.",
  },
  {
    serviceId: 5,
    title: "Infrastructure Optimization",
    description:
      "Enhance your IT infrastructure with optimizations that improve efficiency and reduce costs.",
  },
  {
    serviceId: 5,
    title: "Security and Compliance",
    description:
      "Implement robust security measures and comply with industry regulations to protect your business assets.",
  },
  {
    serviceId: 5,
    title: "Digital Transformation",
    description:
      "Guide your business through digital transformation with strategies that embrace modern technology and innovation.",
  },
];
const s5Benefits: Benefit[] = [
  {
    serviceId: 5,
    title: "Expert Guidance",
    description:
      "Receive guidance from seasoned professionals with a deep understanding of the IT sector.",
  },
  {
    serviceId: 5,
    title: "Cost-Efficiency",
    description:
      "Optimize your operations to realize cost savings and improve profitability.",
  },
  {
    serviceId: 5,
    title: "Innovation-Driven",
    description:
      "Embrace innovative solutions that position your business as a leader in the industry.",
  },
];

const s6Features: Feature[] = [
  {
    serviceId: 6,
    title: "Strategic IT Planning",
    description:
      "Work with us to develop forward-thinking IT strategies that align with your business objectives.",
  },
  {
    serviceId: 6,
    title: "Infrastructure Optimization",
    description:
      "Enhance your IT infrastructure with optimizations that improve efficiency and reduce costs.",
  },
  {
    serviceId: 6,
    title: "Security and Compliance",
    description:
      "Implement robust security measures and comply with industry regulations to protect your business assets.",
  },
  {
    serviceId: 6,
    title: "Digital Transformation",
    description:
      "Guide your business through digital transformation with strategies that embrace modern technology and innovation.",
  },
];
const s6Benefits: Benefit[] = [
  {
    serviceId: 6,
    title: "Expert Guidance",
    description:
      "Receive guidance from seasoned professionals with a deep understanding of the IT sector.",
  },
  {
    serviceId: 6,
    title: "Cost-Efficiency",
    description:
      "Optimize your operations to realize cost savings and improve profitability.",
  },
  {
    serviceId: 6,
    title: "Innovation-Driven",
    description:
      "Embrace innovative solutions that position your business as a leader in the industry.",
  },
];

const s7Features: Feature[] = [
  {
    serviceId: 7,
    title: "Cloud Migration",
    description:
      "Facilitate a smooth transition to the cloud with strategies that minimize downtime and ensure data safety.",
  },
  {
    serviceId: 7,
    title: "Infrastructure as a Service (IaaS)",
    description:
      "Implement IaaS solutions that offer scalable and flexible cloud computing infrastructure.",
  },
  {
    serviceId: 7,
    title: "Disaster Recovery",
    description:
      "Develop robust disaster recovery plans that safeguard your data and ensure business continuity in adverse situations.",
  },
  {
    serviceId: 7,
    title: "Cloud Security",
    description:
      "Enhance your data security with cloud solutions that offer advanced protection features and compliance with industry regulations.",
  },
];
const s7Benefits: Benefit[] = [
  {
    serviceId: 7,
    title: "Operational Efficiency",
    description:
      "Achieve greater operational efficiency with cloud solutions that streamline processes and facilitate collaboration.",
  },
  {
    serviceId: 7,
    title: "Cost-Effectiveness",
    description:
      "Embrace cloud computing's cost-effective nature, reducing capital expenditure and achieving better ROI.",
  },
  {
    serviceId: 7,
    title: "Future-Ready Infrastructure",
    description:
      "Build an infrastructure that is prepared for the future, capable of adapting to evolving business needs.",
  },
];

const service1: ServiceResponse = {
  id: 1,
  title: ["Web", "Development"],
  description:
    "In today's digital age, your website is often the first point of contact between your business and potential clients. At Mantaray Digital, we are devoted to crafting websites that serve as a powerful tool to convey your brand message and drive business growth. Our web development services encompass various facets to give you a well-rounded solution.",
  features: s1Features,
  benefit: s1Benefits,
};

const service2: ServiceResponse = {
  id: 2,
  title: ["Mobile App", "Development"],
  description:
    "In this mobile-centric era, it is vital to connect with your audience through their preferred platforms. At Mantaray Digital, we are adept at crafting both hybrid and native mobile apps that encapsulate your brand's essence. Our expertise spans across various platforms, offering you:",
  features: s2Features,
  benefit: s2Benefits,
};
const service3: ServiceResponse = {
  id: 3,
  title: ["UI/UX", "Design"],
  description:
    "Creation of user-centered and visually appealing interfaces for software products, including websites and mobile apps.",
  features: s3Features,
  benefit: s3Benefits,
};
const service4: ServiceResponse = {
  id: 4,
  title: ["E-Commerce", "Solutions"],
  description:
    "In the ever-evolving digital marketplace, having a robust eCommerce platform can catapult your business to new heights. At Mantaray Digital, we specialize in crafting eCommerce solutions that are both user-friendly and feature-rich. Our services are aimed at facilitating seamless online transactions and enhancing user engagement.",
  features: s4Features,
  benefit: s4Benefits,
};
const service5: ServiceResponse = {
  id: 5,
  title: ["IT", "Consultancy"],
  description:
    "In the fast-paced IT sector, staying ahead of the curve requires innovative strategies and efficient processes. Mantaray Digital is here to assist you in navigating the complexities of the IT landscape with expert consultancy services.",
  features: s5Features,
  benefit: s5Benefits,
};
// const service6: ServiceResponse = {
//   id: 6,
//   title: ["Motion", "Designs"],
//   description: "Description for Motion Designs",
//   features: s6Features,
//   benefit: s6Benefits,
// };
const service7: ServiceResponse = {
  id: 7,
  title: ["Cloud", "Solutions"],
  description:
    "As businesses migrate towards cloud-based infrastructures, Mantaray Digital is here to assist you in leveraging the myriad benefits of cloud computing. Our services are tailored to help you transition smoothly to a cloud infrastructure, enhancing operational efficiency and security.",
  features: s7Features,
  benefit: s7Benefits,
};

export const ALL_SERVICES = [
  service1,
  service2,
  service3,
  service4,
  service5,
  // service6,
  service7,
];
