"use client";
import Image from "next/image";

import { useState } from "react";
import UserMenu from "../../user-menu/UserMenu.component";
import Streak from "@/components/Streak";

const HeaderUserInfo = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <>
      <Streak />

      <div className="relative">
        <Image
          src="/user.jpg"
          height={45}
          width={45}
          alt="user"
          className="rounded-full"
          onClick={() => setShowMenu(!showMenu)}
        />

        {showMenu && <UserMenu />}
      </div>
    </>
  );
};

export default HeaderUserInfo;
