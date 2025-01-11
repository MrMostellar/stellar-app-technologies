import { FaSearch } from "react-icons/fa";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <>
      <p className="flex flex-1 justify-center items-center text-xl bg-yellow-200">
        Stellar App Technologies
      </p>

      <nav className="flex flex-[2] items-center justify-center bg-green-500">
        <NavBar />
      </nav>

      <nav className="flex flex-1 justify-center items-center bg-blue-500">
        <button>
          <FaSearch />
        </button>
      </nav>
    </>
  );
}
