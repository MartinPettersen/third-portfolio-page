import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Project from "./project/Project";
import { ProjectType } from "../typedefinition";
import { useState } from "react";

type Props = {
  project: ProjectType[];
};

const Projects = ({ project }: Props) => {
  const [skill, setSkill] = useState("");

  const [upperLimit, setUpperLimit] = useState(2);
  const [lowerLimit, setLowerLimit] = useState(0);
  useEffect(() => {}, [upperLimit, lowerLimit]);

  const onClickLeft = () => {
    if (lowerLimit - 3 <= 0) {
      setLowerLimit(0);
      setUpperLimit(2);
    } else {
      setUpperLimit(lowerLimit-1);
      setLowerLimit(lowerLimit - 3);
    }
  };
  const onClickRight = () => {
    if (upperLimit === project.length) {
    } else if (upperLimit + 3 > project.length) {
      setLowerLimit(lowerLimit + 3);
      setUpperLimit(project.length);
    } else {
      setLowerLimit(lowerLimit + 3);
      setUpperLimit(upperLimit + 3);
    }
    console.log(`lower ${lowerLimit}    upper ${upperLimit}`);
  };

  const checkIfContains = (tech: any) => {
    if (skill === "") {
      return tech;
    } else if (skill === tech) {
      return tech;
    }
  };
  /*
        {project.map((project: any, index: number) => (
          <Project
            key={project._id}
            project={project}
            delay={0.6 * (index + 1)}
          />
        ))}
  */
  return (
    <div className="h-screen  flex relative overflow-hidden flex-col text-left   md:flex-row max-w-full px-10 justify-evenly mx-auto items-center scroll-smooth ">
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
        <div
          onClick={() => onClickLeft()}
          className={` text-[#77b1f7] pb-16 ${lowerLimit === 0 ? "opacity-5" : "opacity-30 hover:opacity-80"}  hover:text-orange-400 text-9xl hover:cursor-pointer`}
        >
          {"<"}
        </div>
      </motion.div>
      <div className=" flex space-x-4 p-8 snap-x snap-mandatory w-[80%] h-[70%]  overflow-hidden ">
        {project.map((project: any, index: number) =>
          index >= lowerLimit && index <= upperLimit ? (
            <Project
              key={project._id}
              project={project}
              delay={0.6 * (index - lowerLimit + 1)}
            />
          ) : (
            <></>
          )
        )}
      </div>
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
    }}
    >
      <div
        onClick={() => onClickRight()}
        className={` text-[#77b1f7] pb-16 ${upperLimit === project.length ? "opacity-5" : "opacity-30 hover:opacity-80"}  hover:text-orange-400 text-9xl hover:cursor-pointer`}
      >
        {">"}
      </div>
      </motion.div>

    </div>
  );
};

export default Projects;
