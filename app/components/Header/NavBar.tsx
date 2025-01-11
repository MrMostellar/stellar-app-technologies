import { NavData } from "@/app/data/CustomizeNavData";
import Link from "next/link";

export default function NavBar() {
  return NavData.map((data) => {
    return (
      <Link className={data.navStyle} href={data.href} key={data.id}>
        {data.title}
      </Link>
    );
  });
}
