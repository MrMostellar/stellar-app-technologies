import React, { ReactNode } from "react";
import { ULBlockType } from "../data/CustomizeFooterLinkData";

const LIGenerator = (props: ULBlockType) => {
  const newComponent: any = props.links.map((link, key) => (
    <li className={`${props.linkStyle}`} key={key}>
      <a href={`${props.hrefs}`} key={key}>
        {link}
      </a>
    </li>
  ));
  return newComponent;
};

export default function FooterLinkColumn(props: ULBlockType) {
  return (
    <>
      <ul className="flex-1">
        <h1 className={`${props.titleStyle}`}>{props.title}</h1>
        {LIGenerator(props)}
      </ul>
    </>
  );
}
