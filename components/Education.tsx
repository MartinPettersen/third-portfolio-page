import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Education = (props: Props) => {
  return (
    <div>
      {/*<h2 className="flex flex-col relative text-center">Martin Pettersen</h2> */}
      <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-5 justify-evenly mx-auto items-center ">
        <h2 className="absolute top-28 tracking-[3px] text-3xl">Education</h2>

        <div className="flex">
          <motion.div
            initial={{
              x: -600,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 2,
            }}
            className="px-10"
          >
            <h4 className="text-xl py-3  text-[#62A0EA]">
              Bachelor in Informatics: Programming and Networks(180sp)
              University of Oslo
            </h4>
            <p>
              Programming and data communication. Programmering of machines.
              Create systems, programs and applications. Develop computer
              systems, program systems and algorithms.Understanding how software
              and operating systems work
            </p>
          </motion.div>
          <motion.div
            initial={{
              x: 600,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 2,
            }}
            className="px-10"
          >
            <h4 className="text-xl py-3 text-[#62A0EA]">
              Bachelor in Multimedia technology and design(180sp) University of
              Agder, Grimstad
            </h4>
            <p>
              Theoretical and practical foundation in technology and multimedia.
              Such as graphic design,, 3D-visualization and animation, video and
              audio production, image processing, webdesign and interactive
              media design.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;
