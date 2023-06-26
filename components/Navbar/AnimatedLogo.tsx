import React, { useEffect } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { ProjectType } from "../../typedefinition";
import { useState } from "react";
type Props = {
  project: ProjectType[];
};

const AnimatedLogo = ({ project }: Props) => {
  const [techList, setTechList] = useState([""]);


  const getTech = () => {
    const tempList: string[] = [];
    return project.map((project: ProjectType) => tempList.concat(project.tech)).flat();
  };

  useEffect(() => {
    setTechList([... new Set(getTech())]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [text, count] = useTypewriter({
    words: ["Martin's", "Code", "Portfolio", ...techList],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <motion.div
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
    </motion.div>
  );
};

export default AnimatedLogo;
