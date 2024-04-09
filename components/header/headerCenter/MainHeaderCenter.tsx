import { usePathname } from "next/navigation";
import navList from "@/constant/NavList";
import isActivePathname from "@/utils/isActivePathName.utils";
import { NavLink } from "@/components/header";

const MainHeaderCenter = () => {
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex md:justify-center md:space-x-6">
      {navList?.map((nav) => {
        const isActive = isActivePathname(pathname, nav.href);
        return <NavLink key={nav.href} nav={nav} isActive={isActive} />;
      })}
    </nav>
  );
};

export default MainHeaderCenter;
