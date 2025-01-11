import { FaSearch } from "react-icons/fa";
import NavBar from "./NavBar";

const sideNavStyles =
  "flex flex-1 justify-center m-1 py-1 border-[0.0625rem] border-black rounded-[0.6rem]";

export default function Header() {
  return (
    <>
      <p className="flex flex-1 justify-center items-center text-xl px-1 bg-yellow-200">
        Stellar App Technologies
      </p>

      <nav className="flex flex-[2] items-center justify-center px-2 bg-green-500">
        <NavBar />
      </nav>

      <nav className="flex flex-1 justify-center items-center px-4 bg-blue-500">
        <button className="flex flex-1 justify-center m-1 py-2">
          <FaSearch />
        </button>
        <button className={sideNavStyles}>
          <p>Sign in</p>
        </button>
        <button className={sideNavStyles}>
          <p>Sign up</p>
        </button>
      </nav>
    </>
  );
}
