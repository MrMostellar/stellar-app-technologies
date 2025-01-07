import { ULProps } from "../../data/CustomizeFooterLinkData";
import FooterLinkColumn from "./FooterLinkColumn";

const linkGenerator = (data: any, Component: any) => {
  const newComponent = [];
  for (let item of data) {
    newComponent.push(<Component key={item.id} {...data[item.id]} />);
  }
  return newComponent;
};

export default function FooterLinks() {
  return (
    <div className="flex flex-1 flex-row justify-center p-1">
      {linkGenerator(ULProps, FooterLinkColumn)}
    </div>
  );
}
