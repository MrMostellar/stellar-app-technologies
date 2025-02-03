import { Url } from "next/dist/shared/lib/router/router";
export interface ULBlockType {
  id: number;
  title: string;
  links: string[];
  hrefs: Url[];
  titleStyle: string;
  linkStyle: string;
  hrefStyle: string;
}

const titleStyles: string = `linkTitleText p-1`;
const linkStyles: string = `linkText p-1`;
const hrefStyles: string = "";

export const ULProps: ULBlockType[] = [
  {
    id: 0,

    title: "Company",

    links: ["About", "Contact", "Portfolio"],

    hrefs: [
      "../../pages/about",
      "../../pages/contact",
      "../../pages/portfolio",
    ],

    linkStyle: linkStyles,

    titleStyle: titleStyles,

    hrefStyle: hrefStyles,
  },
  {
    id: 1,

    title: "Policies",

    links: ["Privacy Policy"],

    hrefs: ["../../pages/privacy-policy"],

    linkStyle: linkStyles,

    titleStyle: titleStyles,

    hrefStyle: hrefStyles,
  },
];
