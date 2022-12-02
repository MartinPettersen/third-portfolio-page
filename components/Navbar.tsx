import React from "react";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
type Props = {};

const Navbar = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Code", "JavaScript", "React", "NextJs"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <nav className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20  xl:items-center p-6 ">
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
          duration: 3,
        }}
      >
        <div className="logo hidden md:inline-flex text-3xl tracking-[10px]">
          <h2>{text}<span className="opacity-0">.</span></h2>
        </div>
      </motion.div>
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
        className="flex flex-row items-center "
      >
  
        <Link href="#portfolio">
          <button className="navButton">Portfolio</button>
        </Link>

        <Link href="#about">
          <button className="navButton">About</button>
        </Link>

        <Link href="#education">
          <button className="navButton">Education</button>
        </Link>

      {/*
        <Link href="#blog">
          <button className="navButton">Blog</button>
        </Link>
        
        <Link href="#contact">
          <button className="navButton">contact</button>
        </Link>
      */}
      </motion.div>
    </nav>
  );
};

export default Navbar;
