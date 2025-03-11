import { FaBars } from "react-icons/fa";
import NavBar from "./NavBar";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-2 z-20 flex w-[100%] flex-row px-2 py-6">
      <button className="flex flex-1 items-center justify-center p-2">
        <Link href="/" className="titleText flex items-center">
          <Image
            className="spin mx-4"
            alt="Stellar App Technologies Logo"
            src={"/images/FaviconAndLoader-StellarAppTechnologies.png"}
            width={50}
            height={50}
          />
          Stellar App Technologies
        </Link>
      </button>

      <div className="items-center justify-center xs:hidden lg:flex lg:flex-1">
        <nav className="flex max-w-[60%] flex-1 -translate-x-16">
          <NavBar />
        </nav>
      </div>

      <nav className="flex pr-4 xs:flex-[0.25] lg:hidden">
        <div className="flex flex-1 items-center justify-center lg:hidden [&>button]:hover:hidden [&>nav]:hover:block">
          <button className="block flex-col">
            <FaBars size="1.25rem" color="var(--text)" />
          </button>
          <nav className="absolute hidden translate-y-14 flex-col p-2">
            <NavBar />
          </nav>
        </div>
      </nav>
    </header>
  );
}
