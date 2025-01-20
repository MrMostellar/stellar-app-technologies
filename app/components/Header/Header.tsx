import { FaSearch } from "react-icons/fa";
import NavBar from "./NavBar";

const sideNavStyles =
  "flex flex-1 justify-center m-1 py-1 border-[0.0625rem] border-black rounded-[0.6rem]";

export default function Header() {
  return (
    <>
      <button className="flex flex-1 justify-center items-center text-xl p-2">
        <p>Stellar App Technologies</p>
      </button>

      <nav className="flex flex-[2] items-center justify-center p-4 mx-2">
        <NavBar />
      </nav>

      <nav className="flex flex-1 justify-center items-center p-2 pr-4">
        <button className="flex flex-1 justify-center m-1 py-2">
          <FaSearch color="var(--text)" />
        </button>
        <button className="flex-1 mr-2 darkButton">
          <p>Sign in</p>
        </button>
        <button className="flex-1 darkButton">
          <p>Sign up</p>
        </button>
      </nav>
    </>
  );
}
