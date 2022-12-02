import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Project = (props: Props) => {
  return (
    <article className="border flex flex-col items-center rounded-lg space-y-5 flex-shrink-0 w-[200px] md:w-[400px] snap-center bg-[#191a1c] hover:border-orange-400 border-[#09090a] hover:bg-[#27282b] overflow-hidden">
      <motion.img
        initial={{
          y: -500,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
        className="h-32 w-32 object-cover object-center mt-3"
        alt="temp image"
        src="https://www.webhostinghub.com/help/images/stories/website/landing1.jpg"
      />
      <div className="m-4">
        <h3 className="text-[#62A0EA] text-center mt-1 text-lg">This Web Page</h3>
        <p className="text-sm text-center">this is a portfolio webpage made to display projects in an easy way.</p>
        <p className="text-sm">Github:</p>
        <p className="text-sm">Host:</p>
        <p>Tech:</p>
        <div className="my-2 text-sm">
          <ul className="list-disc space-y-3 ml-5 text-[#62A0EA] ">
            <li>
              <p>NEXTJS</p>
            </li>
            <li>
              <p>TYPESCRIPT</p>
            </li>
            <li>
              <p>REACT</p>
            </li>
            <li>
              <p>JAVASCRIPT</p>
            </li>
            <li>
              <p>TAILWIND</p>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Project;
