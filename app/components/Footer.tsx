import FooterLinks from "./FooterLinks";
import SingleTextForm from "./SingleTextForm";

export default function Footer() {
  return (
    //column of two for the UL items and the copyright
    <>
      {/*top half of column is a row of columns*/}
      <FooterLinks />
      {/*bottom half of column is the copywrite*/}
      <div className="flex flex-1 flex-col p-1 bg-yellow-300">
        {/*Refactor below component later for reusability*/}
        <SingleTextForm />
      </div>
      <div className="flex flex-1 flex-col justify-center min-h-[100%] min-w-[100%]">
        {/*copyright line*/}
        <p>&copy; 2024-2025 Stellar App Technologies LLC</p>
      </div>
    </>
  );
}
