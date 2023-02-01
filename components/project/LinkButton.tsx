import React, { ReactNode } from "react";
import Link from "next/link";

type Props = {
  children: ReactNode;
  link: string
};

const LinkButton = ({ children, link }: Props) => {
  return (
    <div className="bg-[#2d5b91] hover:bg-orange-400 w-[96px] h-[32px] flex items-center justify-center rounded-md border-[#102136] border-2">
      <Link
        className="text-white  "
        href={link}
      >
        {children}
      </Link>
    </div>
  );
};

export default LinkButton;
