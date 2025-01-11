import { FaSearch } from "react-icons/fa";
import NavBar from "./NavBar";

const sideNavStyles =
  "flex flex-1 justify-center m-1 py-1 border-[0.0625rem] border-black rounded-[0.6rem] bg-blue-500";

export default function Header() {
  return (
    <>
      <p className="flex flex-1 justify-center items-center text-xl p-2">
        Stellar App Technologies
      </p>

      <nav className="flex flex-[2] items-center justify-center p-2">
        <NavBar />
      </nav>

      <nav className="flex flex-1 justify-center items-center p-2 pr-4">
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
