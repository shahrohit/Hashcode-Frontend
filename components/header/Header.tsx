"use client";
import { usePathname } from "next/navigation";
import { MainHeader, PlaygroundHeader } from "@/components/header";

const Headers = () => {
  let pathname = usePathname();
  let showPgHeader = pathname.startsWith("/problems/");

  let styleForPg = "h-12";
  let styleForMain = "h-16 shadow-my-primary ";

  return (
    <header
      className={`bg-primarybg shadow-my-primary  sticky top-0 z-10  ${
        showPgHeader ? styleForPg : styleForMain
      }`}
    >
      {showPgHeader ? <PlaygroundHeader /> : <MainHeader />}
    </header>
  );
};

export default Headers;
