import { IconBase, IconContext } from "react-icons";
import { SocialsBarType } from "../data/CustomizeSocialsBarData";

export default function SocialsLinkIcon(props: SocialsBarType) {
  return (
    <div className="flex flex-1 justify-center items-center px-4">
      <a href={props.href}>{props.icon}</a>
    </div>
  );
}
