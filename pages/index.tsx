import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Education from "../components/Education";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-[#202124] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <Head>
        <title>Portfolio Page</title>
        <meta name="description" content="Portfolio Page" />
      </Head>
      <Navbar />
      <section id="portfolio" className="snap-start">
        <Projects />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section >
      <section id="education" className="snap-center">
        <Education />
      </section >
      
      {/* Contact */}
      <section id="contact" className="snap-start"></section>
      {/* Skills*/}

      {/* Blog */}
    </div>
  );
}
