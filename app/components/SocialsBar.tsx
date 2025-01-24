import { SocialsBarData } from "./data/CustomizeSocialsBarData";
import SocialsLinkIcon from "./SocialsLinkIcon";

export default function SocialsBar() {
  return (
    <>
      {SocialsBarData.map((data, key) => {
        return (
          <SocialsLinkIcon
            key={key}
            id={key}
            href={data.href}
            icon={data.icon}
          />
        );
      })}
    </>
  );
}
