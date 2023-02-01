import React, { ReactNode } from "react";
import Link from "next/link";

type Props = {
  children: ReactNode;
};

const GreyButton = ({ children }: Props) => {
  return (
    <div className="opacity-25 bg-[#2d5b91] text-white w-[96px] h-[32px] flex items-center justify-center rounded-md border-[#102136] border-2 ">
      {children}
    </div>
  );
};

export default GreyButton;
