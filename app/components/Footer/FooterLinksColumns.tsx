import { ULProps } from "@/app/data/CustomizeFooterLinkData";
import Link from "next/link";

export default function FooterLinksColumns() {
  return (
    <>
      {ULProps.map((data) => {
        return (
          <div className="flex flex-1 flex-col" key={data.title}>
            <h1 className={data.titleStyle}>{data.title}</h1>
            {data.links.map((link, index) => {
              return (
                <Link
                  className={data.linkStyle}
                  key={index}
                  href={data.hrefs[index]}
                >
                  {link}
                </Link>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
