import { Url } from "next/dist/shared/lib/router/router";
export interface Nav {
  id: number;
  title: string;
  href: Url;
  navStyle: string;
  //hrefStyle: string;
}

const navStyles: string =
  "flex flex-1 items-center justify-center p-1 m-[0.6rem]";
//const hrefStyles: string = "";

export const NavData: Nav[] = [
  {
    id: 0,
    title: "Route 1",
    href: "",
    navStyle: navStyles,
    //hrefStyle: hrefStyles,
  },
  {
    id: 1,
    title: "Route 2",
    href: "",
    navStyle: navStyles,
    //hrefStyle: hrefStyles,
  },
  {
    id: 2,
    title: "Route 3",
    href: "",
    navStyle: navStyles,
    //hrefStyle: hrefStyles,
  },
  {
    id: 3,
    title: "Route 4",
    href: "",
    navStyle: navStyles,
    //hrefStyle: hrefStyles,
  },
];
