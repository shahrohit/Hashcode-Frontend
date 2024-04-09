import {
  HeaderAuth,
  HeaderUserInfo,
  MobileNavContainer,
} from "@/components/header";
import ThemeBtn from "@/components/ThemeBtn";

const MainHeaderEnd = () => {
  const login = true;
  return (
    <div className={`flex items-center space-x-1 xxs:space-x-3`}>
      <ThemeBtn />
      {login ? <HeaderUserInfo /> : <HeaderAuth />}

      <div className="block md:hidden">
        <MobileNavContainer />
      </div>
    </div>
  );
};

export default MainHeaderEnd;
