import { ULBlockType } from "@/app/data/CustomizeFooterLinkData";
import { SocialsBarType } from "@/app/data/CustomizeSocialsBarData";

export const generator = (
  data: ULBlockType[] | SocialsBarType[],
  Component: React.FC
) => {
  const newComponent = [];
  for (const item of data) {
    newComponent.push(<Component key={item.id} {...data[item.id]} />);
  }
  return newComponent;
};
