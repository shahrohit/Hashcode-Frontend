import React, { ReactNode } from "react";

const PlaygroundHeaderDiv = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-12 border-b-2 border-primarybdr flex items-center space-x-2 px-1 overflow-auto hide-scrollbar">
      {children}
    </div>
  );
};

export default PlaygroundHeaderDiv;
