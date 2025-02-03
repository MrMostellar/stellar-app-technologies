import { Url } from "next/dist/shared/lib/router/router";

export interface Nav {
  id: number;
  title: string;
  href: Url;
  navStyle: string;
}

const navStyles: string =
  "px-2 mx-2 text-nowrap navText flex flex-1 items-center justify-center";

export const NavData: Nav[] = [
  {
    id: 0,
    title: "About",
    href: "../../pages/about",
    navStyle: navStyles,
  },
  {
    id: 1,
    title: "Contact Us",
    href: "../../pages/contact",
    navStyle: navStyles,
  },
  {
    id: 2,
    title: "Portfolio",
    href: "../../pages/portfolio",
    navStyle: navStyles,
  },
];
