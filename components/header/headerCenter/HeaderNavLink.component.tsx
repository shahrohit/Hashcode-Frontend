import Link from "next/link";
import NavProps from "@/types/NavProps.type";

const NavLink = ({ nav, isActive }: NavProps) => {
  let style = isActive
    ? "text-primarycol"
    : "text-primarypara hover:text-primaryhead";
  return (
    <Link href={nav.href} className={`text-lg font-semibold ${style}`}>
      {nav.name}
    </Link>
  );
};

export default NavLink;
