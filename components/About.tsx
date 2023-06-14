import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { AboutType } from "../typedefinition";

type Props = {
  about: AboutType[];
};

const About = ({ about }: Props) => {
  return (
    <div>
      {/*<h2 className="flex flex-col relative text-center">Martin Pettersen</h2> */}
      <div className="flex flex-row relative h-screen text-center md:text-center md:flex-row max-w-xl px-5 justify-evenly mx-auto items-center ">
        <motion.div
          className="absolute top-28 tracking-[3px] text-3xl"
          initial={{
            y: -120,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.3,
          }}
        >
          <h2>{about[0].name}</h2>
        </motion.div>
        <motion.div
          initial={{
            y: 300,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.3,
          }}
        >
          <p className="px-5">{about[0].aboutInfo}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
