import { HiXMark, HiBars3 } from "react-icons/hi2";
import { useState } from "react";
import HeaderMobileNavBar from "../headerCenter/HeaderMobileNavbar";

const MobileNavContainer = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div className="">
      {showMobileNav ? (
        <button
          className={`{$style} icon-style`}
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          <HiXMark className="h-6 w-6" />
        </button>
      ) : (
        <button
          className={`{$style} icon-style`}
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          <HiBars3 className="h-6 w-6" />
        </button>
      )}

      {showMobileNav && <HeaderMobileNavBar />}
    </div>
  );
};

export default MobileNavContainer;
