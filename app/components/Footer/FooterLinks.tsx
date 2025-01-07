import { ULProps } from "../../data/CustomizeFooterLinkData";
import FooterLinkColumn from "./FooterLinkColumn";
import { generator } from "../UtilityFunctions/generatorFunction";

export default function FooterLinks() {
  return (
    <div className="flex flex-1 flex-row justify-center p-1">
      {generator(ULProps, FooterLinkColumn)}
    </div>
  );
}
