import React from "react";
import { motion } from "framer-motion";
import { ProjectType } from "../../typedefinition";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../../sanity";
import LinkButton from "./LinkButton";
import GreyButton from "./GreyButton";
import TechPlacard from "./TechPlacard";
import { useEffect, useState } from "react";
import ViewProject from "./ViewProject";

type Props = {
  project: ProjectType;
};

const Project = ({ project }: Props) => {
  const myLoader = () => {
    return `${urlFor(project.image).url()}`;
  };


  const [showProject, setShowProject] = useState(false);
  


  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (e:any) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      const x = 0 + e.pageX - e.target.offsetLeft ;
      const y = 0 + e.pageY - e.target.offsetTop -90;
      if (typeof e.target.style !== 'undefined'){
        e.target.style.setProperty('--x', `${ x }px`)
        e.target.style.setProperty('--y', `${ y }px`)
      }

    
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  console.log(project.hostLinks[0]);
  return (
    <div>    { showProject ? 
      <div className="w-full h-full fixed inset-0 z-50"><ViewProject project={project} setShowProject={setShowProject} showProject={showProject}/></div>
      :
    <article onClick={() => setShowProject(!showProject)} className="border flex flex-col items-center  space-y-5 flex-shrink-0 w-[200px] md:w-[400px] md:h-[400px]  
    snap-center bg-[#1c191b] transition duration-300 hover:border-orange-400 border-[#090a0a] hover:bg-[#27282b]  
    overflow-hidden hover:custom-scrollbar-y relative hover:shiny-light">
      <span className="bg-red-400">

        <p>({mousePos.x}, {mousePos.y})</p>
      </span>
      {project.image !== undefined ? (
        <Image
          loader={myLoader}
          src="landing1.jpg"
          alt="Picture of project"
          width={500}
          height={500}
          className="h-32 w-64 object-cover object-center mt-3 aspect-auto"
        />
      ) : (
        <></>
      )}

      <div className="m-4 ">
        <h3 className="text-[#62A0EA] text-center mt-1 text-lg">
          {project.name}
        </h3>
        <p className="text-sm pt-4 pb-2 text-center">{project.projectInfo}</p>
        

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
    }
    </div>
  );
};

export default Project;
