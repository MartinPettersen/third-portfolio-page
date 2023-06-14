import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { EducationType } from "../typedefinition";
type Props = {
  education: EducationType[];
};

const Education = ({ education }: Props) => {
  const elementRef = useRef(null);
  /*
  const [screenWidth, setScreenWidth] = useState(0);
  const [startPointX, setStartPointX] = useState(screenWidth / 2);
  useEffect(() => {
    setScreenWidth(elementRef.current.clientWidth);
    setStartPointX(screenWidth / 2);
  },[]);
  */
  return (
    <div>
      {/*<h2 className="flex flex-col relative text-center">Martin Pettersen</h2> */}
      <div
        ref={elementRef}
        className=" flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-5 justify-evenly mx-auto items-center "
      >
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
              duration: 1.3,
            }}
            className="px-10"
          >
            <h4 className="text-xl py-3  text-[#62A0EA]">
              {education[0].secondBach}
            </h4>
            <p>{education[0].secondBachInfo}</p>
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
              duration: 1.3,
            }}
            className="px-10"
          >
            <h4 className="text-xl py-3 text-[#62A0EA]">
              {education[0].firstBach}
            </h4>
            <p>{education[0].firstBachInfo}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;
