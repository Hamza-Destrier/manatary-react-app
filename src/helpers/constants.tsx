export const SCROLL_DOWN_EVENT = `cstmevt-scroll-down`;

export const BASE_SERVICES_LINK = "/services";

interface IMenu {
  _id: number;
  title: string;
  link: string;
}

const getFullServiceLink = (id: number) => {
  return BASE_SERVICES_LINK + "?selected=" + id;
};

const menus = [
  "Web development",
  "Mobile App Development",
  "UI/UX Design",
  "E-Commerce Solutions",
  "IT Consultancy",
  "Cloud Solutions",
];

export const MENUS: IMenu[] = menus.map((title, i) => ({
  _id: i + 1,
  title,
  link: getFullServiceLink(i + 1),
}));

export const SOCIAL_MENUS = [
  { title: "Linkedin", link: "#" },
  { title: "Instagram", link: "#" },
  { title: "Twitter", link: "#" },
  { title: "Behance", link: "#" },
  { title: "Dribble", link: "#" },
];

export const VP_GAP = 10;
