import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const TechPlacard = ({ children }: Props) => {
  return (
    <div className="text-[#62A0EA] text-lg w-[120px] h-[32px] flex items-center justify-center rounded-md">
      {children}
    </div>
  );
};

export default TechPlacard;
