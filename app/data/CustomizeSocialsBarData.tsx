import { IconBaseProps } from "react-icons";
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { siteTheme } from "./SiteTheme";

export interface SocialsBarType {
  id: number;
  icon: React.ReactNode;
  href: string;
}

const iconStyle: IconBaseProps = {
  size: "1.5rem",
  color: `${siteTheme.iconTheme}`,
};

export const SocialsBarData: SocialsBarType[] = [
  {
    id: 0,
    icon: <FaFacebook size={iconStyle.size} color={iconStyle.color} />,
    href: "",
  },

  {
    id: 1,
    icon: <FaXTwitter size={iconStyle.size} color={iconStyle.color} />,
    href: "",
  },

  {
    id: 2,
    icon: <FaLinkedin size={iconStyle.size} color={iconStyle.color} />,
    href: "",
  },

  {
    id: 3,
    icon: <FaGithub size={iconStyle.size} color={iconStyle.color} />,
    href: "",
  },
];
