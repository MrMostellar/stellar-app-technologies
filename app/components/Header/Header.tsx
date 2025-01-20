import { FaSearch } from "react-icons/fa";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <>
      <button className="flex flex-1 justify-center items-center p-2">
        <p className="titleText">Stellar App Technologies</p>
      </button>

      <nav className="flex flex-[2] items-center justify-center p-4 mx-2">
        <NavBar />
      </nav>

      <nav className="flex flex-1 justify-center items-center p-2 pr-4">
        <button className="flex flex-1 justify-center m-1 py-2">
          <FaSearch color="var(--text)" />
        </button>
        <button className="flex-1 mr-2 button">
          <p className="navText">Sign in</p>
        </button>
        <button className="flex-1 button">
          <p className="navText">Sign up</p>
        </button>
      </nav>
    </>
  );
}
