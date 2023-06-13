import React from "react";
import { motion } from "framer-motion";
import { ProjectType } from "../../typedefinition";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../../sanity";
import LinkButton from "./LinkButton";
import GreyButton from "./GreyButton";
import TechPlacard from "./TechPlacard";

type Props = {
  project: ProjectType;
  showProject: boolean;
  setShowProject: Function;
};

const ViewProject = ({ project, showProject, setShowProject }: Props) => {
  const myLoader = () => {
    return `${urlFor(project.image).url()}`;
  };

  console.log(project.hostLinks[0]);
  return (
    <div  className=" w-full h-full z-10 flex items-center justify-center backdrop-filter backdrop-brightness-50">
      <div onClick={() => setShowProject(!showProject)} className=" z-500 fixed w-full h-full ">
      </div>
      <article  className="border flex flex-col items-center  space-y-5 flex-shrink-0 w-[200px] h-[70%] md:w-[1200px] 
    snap-center bg-[#27282b] transition duration-300 hover:border-orange-600 rounded-xl border-[#090a0a] hover:bg-[#393a3e]  
    overflow-hidden hover:custom-scrollbar-y relative">

      {project.image !== undefined ? (
        <Image
          loader={myLoader}
          src="landing1.jpg"
          alt="Picture of project"
          width={800}
          height={800}
          className="h-64 w-128 object-cover object-center mt-3 aspect-auto"
        />
      ) : (
        <></>
      )}

      <div className="m-4 ">
        <h3 className="text-[#62A0EA] text-center mt-1 text-lg">
          {project.name}
        </h3>
        <p className="text-sm pt-4 pb-2 text-center">{project.projectInfo}</p>
        <div className="p-4 flex flex-row justify-evenly items-center">
          <div>
            {project.githubLinks[0] !== "" ? (
              project.githubLinks.map((link, index) => (
                <LinkButton key={index} link={link}>
                  Github Link
                </LinkButton>
              ))
            ) : (
              <GreyButton>Github Link</GreyButton>
            )}
          </div>
          <div>
            {project.hostLinks[0] !== "" ? (
              project.hostLinks.map((link, index) => (
                <LinkButton key={index} link={link}>
                  Host Link
                </LinkButton>
              ))
            ) : (
              <GreyButton>Host Link</GreyButton>
            )}
          </div>
        </div>

        <div className="flex flex-wrap center-items justify-center">
          <p>Tech</p>
        </div>
        <div className="my-2 text-sm flex flex-wrap center-items justify-center">
            {project.tech.map((tech, index) => (

                <TechPlacard key={index}>{tech}</TechPlacard>

            ))}
        </div>
      </div>
    </article>
    </div>
  );
};

export default ViewProject;
