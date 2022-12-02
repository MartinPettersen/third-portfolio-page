import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
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
            duration: 2,
          }}
        >
          <h2>Martin Pettersen</h2>
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
            duration: 2,
          }}

        >
          <p className="px-5">
            I have 2 bachelor’s one in Informatics: Programming and Networks
            (Informatikk: Programmering og nettverk) and one in Multimedia
            technology and design (Multimedieteknologi og design).
          </p>
        </motion.div>

        <motion.div
        className="absolute bottom-28"
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
        >
          <Link href="#education" >
            <button className="border px-3 py-1 border-[#62A0EA] text-[#62A0EA] rounded-full transition hover:border-orange-400 hover:text-orange-400">
              Education
            </button>
          </Link>
          </motion.div>
      </div>
    </div>
  );
};

export default About;
