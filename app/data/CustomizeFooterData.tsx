import { ReactNode } from "react";

export interface ULBlockType {
  id: number;
  title: string;
  links: ReactNode[];
  hrefs: ReactNode[];
  titleStyle: string;
  linkStyle: string;
  hrefStyle: string;
}

const titleStyles: string = "p-1";
const linkStyles: string = "p-1";
const hrefStyles: string = "";

export const ULProps: ULBlockType[] = [
  {
    id: 0,

    title: "Product",

    links: ["link 1", "link 2", "link 3", "link 4", "link 5"],

    hrefs: [],

    linkStyle: linkStyles,

    titleStyle: titleStyles,

    hrefStyle: hrefStyles,
  },

  {
    id: 1,

    title: "Support",

    links: ["link 1", "link 2", "link 3", "link 4"],

    hrefs: [],

    linkStyle: linkStyles,

    titleStyle: titleStyles,

    hrefStyle: hrefStyles,
  },

  {
    id: 2,

    title: "Company",

    links: ["link 1", "link 2"],

    hrefs: [],

    linkStyle: linkStyles,

    titleStyle: titleStyles,

    hrefStyle: hrefStyles,
  },
];
