import NavLink from "./HeaderNavLink.component";
import { usePathname } from "next/navigation";
import isActivePathname from "@/utils/isActivePathName.utils";
import navList from "@/constant/NavList";
import Button from "@/components/button/Button";

const HeaderMobileNavBar = () => {
  let login = false;
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed top-16 left-0 w-full h-screen backdrop-blur-md bg-dark-seconday/50">
      <div className="flex flex-col items-center space-y-5 justify-center my-10 ">
        {navList?.map((nav) => {
          const isActive = isActivePathname(pathname, nav.href);
          return <NavLink key={nav.href} nav={nav} isActive={isActive} />;
        })}

        {!login && (
          <div className="flex space-x-3 py-3 text-white *:bg-primarycol *:px-3 *:py-2 *:rounded-full">
            <Button text="Sign In" />
            <Button text="Sign Up" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default HeaderMobileNavBar;
