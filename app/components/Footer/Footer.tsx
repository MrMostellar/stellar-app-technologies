import FooterLinks from "./FooterLinks";
import SingleTextForm from "../SingleTextForm";
import SocialsBar from "../SocialsBar";

export default function Footer() {
  return (
    //column of two for the UL items and the copyright
    <>
      {/*top half of column is a row of columns*/}
      <FooterLinks />
      <hr className="flex w-[95%] m-auto border-black" />
      {/*bottom half of column is the email form, social media, and copywrite*/}
      <div className="flex flex-1 flex-col p-1">
        <div className="flex flex-1 justify-center items-center">
          <SingleTextForm />
        </div>
        {/*Social Media links*/}
        <div className="flex flex-1 flex-wrap justify-center items-center m-auto">
          <SocialsBar />
        </div>
        {/*copyright line*/}
        <p>&copy; 2024-2025 Stellar App Technologies LLC</p>
      </div>
    </>
  );
}
