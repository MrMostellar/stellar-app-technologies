import { SocialsBarType } from "./data/CustomizeSocialsBarData";
import Link from "next/link";

export default function SocialsLinkIcon(props: SocialsBarType) {
  return (
    <Link
      className="flex flex-1 justify-center items-center px-5"
      href={props.href}
    >
      {props.icon}
    </Link>
  );
}
