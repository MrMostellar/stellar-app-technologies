import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <div className="flex flex-1 justify-center items-center bg-red-500">
        <p className="text-xl bg-yellow-200">Stellar App Technologies</p>
      </div>

      <div className="flex flex-[2] bg-green-500">
        <nav>
          <ul>
            <li>
              <Link href={""}> Link </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-1 justify-center items-center bg-blue-500">
        <nav>
          <button>
            <FaSearch />
          </button>
        </nav>
      </div>
    </>
  );
}
