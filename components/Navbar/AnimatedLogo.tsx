import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

type Props = {};

const AnimatedLogo = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Code", "JavaScript", "React", "NextJs", "NodeJs"],
    loop: true,
    delaySpeed: 1500,
  });
  return <motion.div
  initial={{
    x: -500,
    opacity: 0,
  }}
  animate={{
    x: 0,
    opacity: 1,
  }}
  transition={{
    duration: 1.5,
  }}
>
  <div className="logo hidden md:inline-flex text-3xl tracking-[10px]">
    <h2>
      {text}
      <span className="opacity-0">.</span>
    </h2>
  </div>
</motion.div>;
};

export default AnimatedLogo;
