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
  const [techList, setTechList] = useState([""]);

  const [searchList, setSearchList] = useState([""]);

  const [projectList, setProjectList] = useState(project);

  const [upperLimit, setUpperLimit] = useState(2);
  const [lowerLimit, setLowerLimit] = useState(0);
  useEffect(() => {}, [upperLimit, lowerLimit]);

  const getTech = () => {
    const tempList: any = [];
    return project.map((project: any) => tempList.concat(project.tech)).flat();
  };

  const projectFilter = (pro: any) => {
    let contains = true;
    searchList.map((tech) => {
      console.log(
        `project ${pro.name}  tech ${tech} is: ${pro.tech.includes(tech)}`
      );
      if (tech !== "" && !pro.tech.includes(tech)) {
        contains = false;
      }
    });
    return contains;
  };

  useEffect(() => {
    if (searchList.length === 1) {
      setProjectList(project);
    } else {
      const tempList = project.filter((project) => projectFilter(project));
      setProjectList(tempList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchList]);

  useEffect(() => {
    setTechList([...new Set(getTech())]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addRemoveSearchItem = (item: string) => {
    if (searchList.includes(item)) {
      const tempList = searchList.filter((tech) => item !== tech);
      setSearchList(tempList);
    } else {
      const tempList = [...searchList, item];
      setSearchList(tempList);
    }
    setLowerLimit(0);
    if ( projectList.length < 3){
      setUpperLimit(projectList.length);
    }
    setUpperLimit(2);
  };

  const onClickLeft = () => {
    if (lowerLimit - 3 <= 0) {
      setLowerLimit(0);
      setUpperLimit(2);
    } else {
      setUpperLimit(lowerLimit - 1);
      setLowerLimit(lowerLimit - 3);
    }
  };
  const onClickRight = () => {
    if (upperLimit === projectList.length) {
    } else if (upperLimit + 3 > projectList.length) {
      setLowerLimit(lowerLimit + 3);
      setUpperLimit(projectList.length);
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
    <div className="h-screen w-screen flex relative overflow-hidden flex-col text-left   md:flex-col max-w-full  justify-evenly mx-auto items-center scroll-smooth ">
      <div className="h-screen w-screen flex relative overflow-hidden flex-col text-left   md:flex-row max-w-full px-10 justify-evenly mx-auto items-center scroll-smooth ">
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
            className={` text-[#77b1f7] pb-60 ${
              lowerLimit === 0 ? "opacity-5" : "opacity-30 hover:opacity-80"
            }  hover:text-orange-400 text-9xl hover:cursor-pointer`}
          >
            {"<"}
          </div>
        </motion.div>
        <div></div>
        <div className=" flex flex-col space-y-8 snap-x snap-mandatory pt-8 pl-2 pr-2 h-full  overflow-hidden ">
          <div className=" flex space-x-4  snap-x snap-mandatory justify-evenly mx-auto items-center">
            {projectList.map((project: any, index: number) =>
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
          <div className="flex flex-col space-y-4  justify-evenly mx-auto items-center">
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
                duration: 1,
                delay: 0.6 * 4,
              }}
              className="text-xl text-[#77b1f7]"
            >
              Search Tags:
            </motion.div>
            <div className="flex flex-row space-x-2 justify-evenly mx-auto items-center scroll-smooth">
              {techList.map((tech, index) => (
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
                    duration: 1,
                    delay: 0.6 * 5 + index * 0.1,
                  }}
                  onClick={() => addRemoveSearchItem(tech)}
                  className={`hover:cursor-pointer ${
                    searchList.includes(tech)
                      ? `text-[#77b1f7]`
                      : `text-white hover:text-orange-400`
                  } `}
                  key={index}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
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
            className={` text-[#77b1f7] pb-60 ${
              (upperLimit + 1) >= projectList.length
                ? "opacity-5"
                : "opacity-30 hover:opacity-80"
            }  hover:text-orange-400 text-9xl hover:cursor-pointer`}
          >
            {">"}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
