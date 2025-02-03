import { FaBars } from "react-icons/fa";
import NavBar from "./NavBar";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <button className="flex flex-[1.25] justify-center items-center p-2">
        <Link href="/" className="titleText">
          Stellar App Technologies
        </Link>
      </button>

      <div className="items-center justify-center xs:hidden lg:flex lg:flex-[2]">
        <nav className="flex flex-1 -translate-x-16 max-w-[60%]">
          <NavBar />
        </nav>
      </div>

      <nav className="flex pr-4 xs:flex-[0.25] lg:flex-1 lg:pr-6">
        <div className="[&>nav]:hover:block [&>button]:hover:hidden flex flex-1 justify-center items-center lg:hidden">
          <button className="flex-col block">
            <FaBars size="1.25rem" color="var(--text)" />
          </button>
          <nav className="flex-col absolute translate-y-14 p-2 hidden ">
            <NavBar />
          </nav>
        </div>
      </nav>
    </>
  );
}
