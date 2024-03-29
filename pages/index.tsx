import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Education from "../components/Education";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import styles from "../styles/Home.module.css";
import { EducationType, ProjectType, AboutType } from "../typedefinition";
import { fetchAbout } from "../utils/fetchAbout";
import { fetchEducation } from "../utils/fetchEducation";
import { fetchProject } from "../utils/fetchProject";

type Props = {
  about: AboutType[];
  education: EducationType[];
  project: ProjectType[];
};

export default function Home({ about, education, project }: Props) {
  return (
    <div className="bg-[#202124] text-white h-screen overflow-y-scroll overflow-x-hidden z-0">
      <Head>
        <title>Portfolio Page</title>
        <meta name="description" content="Portfolio Page" />
      </Head>
      <section id="portfolio" className="snap-start">

      </section>
      <Navbar project={project} />
        <Projects project={project} />
      <section id="about" className="snap-center">
        <About about={about} />
      </section>
      <section id="education" className="snap-center">
        <Education education={education} />
      </section>

      {/* Contact */}
      <section id="contact" className="snap-start"></section>
      {/* Skills*/}

      {/* Blog */}
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const about: AboutType[] = await fetchAbout();
  const education: EducationType[] = await fetchEducation();
  const project: ProjectType[] = await fetchProject();

  return {
    props: {
      about,
      education,
      project,
    },
    revalidate: 1000,
  };
};
