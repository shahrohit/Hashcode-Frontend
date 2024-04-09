import { ReactNode } from "react";

const HeaderDiv = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-between items-center h-full  px-1 sm:px-2">
      {children}
    </div>
  );
};

export default HeaderDiv;
