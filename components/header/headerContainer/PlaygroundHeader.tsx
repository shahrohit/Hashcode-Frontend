import {
  HeaderEnd,
  PlaygroundHeaderCenter,
  PlaygroundHeaderEnd,
  PlaygroundHeaderStart,
} from "@/components/header";
import HeaderDiv from "./HeaderDiv";

const PlaygroundHeader = () => {
  return (
    <HeaderDiv>
      <section className="flex items-center w-full h-full">
        <PlaygroundHeaderStart />
      </section>

      <section className="w-full h-full flex justify-center items-center">
        <PlaygroundHeaderCenter />
      </section>

      <section className="hidden md:flex justify-center w-full h-full">
        <HeaderEnd />
      </section>
    </HeaderDiv>
  );
};

export default PlaygroundHeader;
