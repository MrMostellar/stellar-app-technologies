import React, { ReactNode } from "react";
import { ULBlockType } from "@/app/data/CustomizeFooterLinkData";
import Link from "next/link";

const LIGenerator = (props: ULBlockType) => {
  const newComponent: any = props.links.map((link, key) => (
    <li className={`${props.linkStyle}`} key={key}>
      <Link href={`${props.hrefs}`} key={key}>
        {link}
      </Link>
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
