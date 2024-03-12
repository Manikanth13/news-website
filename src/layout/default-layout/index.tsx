import React, { PropsWithChildren } from "react";

export const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between flex-wrap h-full">
      <div className="md:w-container p-6 m-auto"> {children}</div>
    </div>
  );
};
