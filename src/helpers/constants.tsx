export const SCROLL_DOWN_EVENT = `cstmevt-scroll-down`;

export const BASE_SERVICES_LINK = "/services";

const getFullServiceLink = (id: number) => {
  return BASE_SERVICES_LINK + "?selected=" + id;
};

export const MENUS = [
  { _id: 0, title: "Web development", link: getFullServiceLink(0) },
  { _id: 1, title: "Mobile App Development", link: getFullServiceLink(1) },
  { _id: 2, title: "UI/UX Design", link: getFullServiceLink(2) },
  { _id: 3, title: "E-Commerce Solutions", link: getFullServiceLink(3) },
  { _id: 4, title: "IT Consultancy", link: getFullServiceLink(4) },
  { _id: 5, title: "Cloud Solutions", link: getFullServiceLink(6) },
];

export const SOCIAL_MENUS = [
  { title: "Linkedin", link: "#" },
  { title: "Instagram", link: "#" },
  { title: "Twitter", link: "#" },
  { title: "Behance", link: "#" },
  { title: "Dribble", link: "#" },
];

export const VP_GAP = 10;
