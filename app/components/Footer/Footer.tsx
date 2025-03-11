import SingleTextForm from "../SingleTextForm";
import SocialsBar from "../SocialsBar";
import FooterLinksColumns from "./FooterLinksColumns";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-[var(--secondary)] text-center">
      <div className="flex flex-1 pt-8">
        <FooterLinksColumns />
      </div>

      <div className="flex flex-1 flex-col p-1">
        <div className="flex flex-1 items-center justify-center p-2">
          <SingleTextForm
            label={"Let's keep in touch!"}
            formType={"email"}
            placeholder={"Enter your Email"}
          />
        </div>

        <div className="underline-animation m-auto flex flex-1 flex-wrap items-center justify-center p-2 pt-4">
          <SocialsBar />
        </div>

        <p className="paragraphText p-2">
          &copy; 2024-2025 Stellar App Technologies LLC
        </p>
      </div>
    </footer>
  );
}
