import { IconBase, IconContext } from "react-icons";
import { SocialsBarType } from "../data/CustomizeSocialsBarData";
import Link from "next/link";

export default function SocialsLinkIcon(props: SocialsBarType) {
  return (
    <div className="flex flex-1 justify-center items-center px-5">
      <Link href={props.href}>{props.icon}</Link>
    </div>
  );
}
