// import Image from "next/image";
// import styles from "./page.module.css";

import About from "./Components/About";
import Edu from "./Components/Edu";
import Header from "./Components/Header";
import Project from "./Components/Project";
import Skills from "./Components/Skills";

export default function Home() {
  return (
    <div className={""}>
      <Header />
      <About />
      <Skills />
      <Project />
      <Edu />
      
    </div>
  );
}
