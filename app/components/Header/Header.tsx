import { FaBars, FaSearch } from "react-icons/fa";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <>
      <button className="flex flex-[1.25] justify-center items-center p-2">
        <p className="titleText">Stellar App Technologies</p>
      </button>

      <div className="items-center justify-center xs:hidden lg:flex lg:flex-[2]">
        <nav className="flex flex-1 max-w-[60%]">
          <NavBar />
        </nav>
      </div>

      <nav className="flex xs:flex-[0.25] lg:flex-1">
        <button className="justify-center items-center flex xs:flex-1 lg:flex-[0.5]">
          <FaSearch size="1.25rem" color="var(--text)" />
        </button>
        <button className="xs:hidden lg:flex lg:flex-1 lg:max-w-[7vw] my-4 py-1 justify-center items-center mx-2 button">
          <p className="navText">Sign in</p>
        </button>
        <button className="xs:hidden lg:flex lg:flex-1 lg:max-w-[7vw] my-4 py-1 justify-center items-center mx-2 button">
          <p className="navText">Sign up</p>
        </button>
        <button className="flex flex-1 justify-center items-center lg:hidden">
          <FaBars size="1.25rem" color="var(--text)" />
        </button>
      </nav>
    </>
  );
}
