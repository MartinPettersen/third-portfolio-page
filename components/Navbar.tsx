import React from "react";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
type Props = {};

const Navbar = (props: Props) => {
  const handleSCrollTo = (element: string) => {
    const section = document.getElementById(element);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [text, count] = useTypewriter({
    words: ["Code", "JavaScript", "React", "NextJs", "NodeJs"],
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
          <h2>
            {text}
            <span className="opacity-0">.</span>
          </h2>
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
        <button
          onClick={() => handleSCrollTo("portfolio")}
          className="navButton"
        >
          Portfolio
        </button>

        <button onClick={() => handleSCrollTo("about")} className="navButton">
          About
        </button>

        <button
          onClick={() => handleSCrollTo("education")}
          className="navButton"
        >
          Education
        </button>

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
