import SingleTextForm from "../SingleTextForm";
import SocialsBar from "../SocialsBar";
import FooterLinksColumns from "./FooterLinksColumns";

export default function Footer() {
  return (
    <>
      <div className="flex flex-1 pt-8">
        <FooterLinksColumns />
      </div>

      <div className="flex flex-1 flex-col p-1">
        <div className="flex flex-1 justify-center items-center p-2">
          <SingleTextForm
            label={"Let's keep in touch!"}
            formType={"email"}
            placeholder={"Enter your Email"}
          />
        </div>

        <div className="underline-animation flex flex-1 flex-wrap justify-center items-center p-2 pt-4 m-auto">
          <SocialsBar />
        </div>

        <p className="paragraphText p-2">
          &copy; 2024-2025 Stellar App Technologies LLC
        </p>
      </div>
    </>
  );
}
