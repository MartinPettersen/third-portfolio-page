import React from 'react'
import { motion } from "framer-motion";
import Link from "next/link";
import Project from './Project';

type Props = {}

const Projects = (props: Props) => {
  return (
    <motion.div 
    initial={{
        y: -500,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
    className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center scroll-smooth">
    

    
          <div className="w-full flex space-x-4 overflow-x-scroll p-8 snap-x snap-mandatory">
            {/*project card*/}
            <Project />
            <Project />
            <Project />
            <Project />

          </div>
    
    </motion.div>
  )
}

export default Projects