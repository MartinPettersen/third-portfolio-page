import React from "react";
import { motion } from "framer-motion";
import Project from "./project/Project";
import { ProjectType } from "../typedefinition";
import { useState } from "react";
type Props = {
  project: ProjectType[];
};

const Projects = ({ project }: Props) => {

  const [skill, setSkill] = useState("");


  const checkIfContains = (tech: any) => {
    if (skill === ""){
      return tech;
    } 
    else if (skill === tech) {
      return tech;
    }

  }

  return (
    <motion.div
      initial={{
        y: 500,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      className="h-screen flex relative overflow-hidden flex-col text-left  md:flex-row max-w-full px-10 justify-evenly mx-auto items-center scroll-smooth "
    >
      <div className=" flex space-x-4 p-8 snap-x snap-mandatory w-[80%] h-[70%]  overflow-hidden hover:custom-scrollbar-x ">
        {project.map((project: any) => (
          <Project key={project._id} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
