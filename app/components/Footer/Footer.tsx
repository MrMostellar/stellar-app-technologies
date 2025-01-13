import { siteTheme } from "@/app/data/SiteTheme";
import SingleTextForm from "../SingleTextForm";
import SocialsBar from "../SocialsBar";
import FooterLinksColumns from "./FooterLinksColumns";

export default function Footer() {
  return (
    //column of two for the UL items and the copyright
    <>
      {/*top half of column is a row of columns*/}
      <div className="flex flex-1 pt-8">
        {/*Footer Links*/}
        <FooterLinksColumns />
      </div>
      {/*bottom half of column is the email form, social media, and copywrite*/}
      <div className="flex flex-1 flex-col p-1">
        <div className="flex flex-1 justify-center items-center p-2">
          <SingleTextForm />
        </div>
        {/*Social Media links*/}
        <div className="flex flex-1 flex-wrap justify-center items-center p-2 m-auto">
          <SocialsBar />
        </div>
        {/*copyright line*/}
        <p className={`p-2 ${siteTheme.textTheme}`}>
          &copy; 2024-2025 Stellar App Technologies LLC
        </p>
      </div>
    </>
  );
}
