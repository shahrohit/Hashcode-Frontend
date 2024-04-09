import {
  HeaderEnd,
  MainHeaderCenter,
  MainHeaderStart,
} from "@/components/header";

import HeaderDiv from "./HeaderDiv";

const MainHeaderContainer = () => {
  let style = "md:w-full h-full items-center justify-center";
  return (
    <HeaderDiv>
      <section className={`flex ${style}`}>
        <MainHeaderStart />
      </section>

      <section className={`hidden md:flex ${style}`}>
        <MainHeaderCenter />
      </section>

      <section className={`flex ${style}`}>
        <HeaderEnd />
      </section>
    </HeaderDiv>
  );
};

export default MainHeaderContainer;
