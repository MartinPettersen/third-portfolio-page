import React from "react";
import { motion } from "framer-motion";
import { ProjectType } from "../typedefinition";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../sanity";

type Props = {
  project: ProjectType;
};

const Project = ({ project }: Props) => {
  const myLoader = () => {
    return `${urlFor(project.image).url()}`
  }

  return (
    <article className="border flex flex-col items-center  space-y-5 flex-shrink-0 w-[200px] md:w-[400px] snap-center bg-[#191a1c] hover:border-orange-400 border-[#09090a] hover:bg-[#27282b]  overflow-hidden hover:custom-scrollbar-y ">
      {project.image !== undefined ?  (<Image
        loader={myLoader}
        src="landing1.jpg"
        alt="Picture of project"
        width={500}
        height={500}
        className="h-32 w-64 object-cover object-center mt-3 aspect-auto"
      />) : <></> }

      <div className="m-4 ">
        <h3 className="text-[#62A0EA] text-center mt-1 text-lg">
          {project.name}
        </h3>
        <p className="text-sm pt-4 pb-2 text-center">{project.projectInfo}</p>
        <div className="p-4 flex flex-row justify-evenly items-center">

        <p className="text-sm ">
          {project.githubLinks[0] !== undefined ?  (project.githubLinks.map((link, index) => (
            <Link key={index}
              className="text-[#62A0EA] underline hover:text-orange-400"
              href={link}
            >
              Github Link
            </Link>
          ))) : <></> }
        </p>
        <p className="text-sm">
          {project.githubLinks[0] !== undefined ?  (project.hostLinks.map((link, index) => (
            <Link key={index}
              className="text-[#62A0EA] underline hover:text-orange-400"
              href={link}
            >
              Host Link
            </Link>
          ))) : <></> }
          
        </p>
        </div>

        <p>Tech:</p>
        <div className="my-2 text-sm">
          <ul className="list-disc space-y-3 ml-5 text-[#62A0EA] ">
            {project.tech.map((tech, index) => (
              <li key={index}>
                <p>{tech}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Project;
