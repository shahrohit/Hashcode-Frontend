import Image from "next/image";
import UserMenuCardContainer from "./UserMenuCardContainer.component";
import Button from "../button/Button";

const UserMenu = () => {
  return (
    <div className="backdrop-blur-xl border-2 border-primarybdr absolute top-16 -right-5 p-2 w-[90vw] max-w-[400px] rounded-2xl">
      <div className="flex items-center space-x-3">
        <Image
          src="/user.jpg"
          height={50}
          width={50}
          alt="user"
          className="rounded-full"
        />
        <p className="text-lg font-bold">shahrohit</p>
      </div>

      <UserMenuCardContainer />
      <Button
        text="Sign Out"
        radius="full"
        scale={true}
        className="py-2 bg-primarycol text-white w-full"
      />
    </div>
  );
};

export default UserMenu;