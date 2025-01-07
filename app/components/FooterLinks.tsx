import { ULProps } from "../data/CustomizeFooterLinkData";
import ULBlock from "./ULBlock";

const linkGenerator = (data: any, Component: any) => {
  const newComponent = [];
  for (let item of data) {
    newComponent.push(<Component key={item.id} {...data[item.id]} />);
  }
  return newComponent;
};

export default function FooterLinks() {
  return (
    <div className="flex flex-1 flex-row p-1 bg-red-300">
      {linkGenerator(ULProps, ULBlock)}
    </div>
  );
}
