import { Url } from "next/dist/shared/lib/router/router";

export interface Nav {
  id: number;
  title: string;
  href: Url;
  navStyle: string;
}

const navStyles: string = "navText flex flex-1 items-center justify-center";

export const NavData: Nav[] = [
  {
    id: 0,
    title: "Route 1",
    href: "",
    navStyle: navStyles,
  },
  {
    id: 1,
    title: "Route 2",
    href: "",
    navStyle: navStyles,
  },
  {
    id: 2,
    title: "Route 3",
    href: "",
    navStyle: navStyles,
  },
  {
    id: 3,
    title: "Route 4",
    href: "",
    navStyle: navStyles,
  },
];
