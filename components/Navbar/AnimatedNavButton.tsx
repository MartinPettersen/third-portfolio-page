import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  delay: number;
  link: string;
  handleScrollTo: Function;
};

const AnimatedNavButton = ({
  children,
  delay,
  link,
  handleScrollTo,
}: Props) => {
  return (
    <motion.div
      initial={{
        x: 500,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
        delay: delay,
      }}
    >
      <button onClick={() => handleScrollTo(link)} className="navButton">
        {children}
      </button>
    </motion.div>
  );
};

export default AnimatedNavButton;
