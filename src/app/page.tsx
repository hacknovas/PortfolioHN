import About from "./Components/About";
import Template from "./Components/Animate/Template";
import Edu from "./Components/Edu";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Project from "./Components/Project";
import Service from "./Components/Service";
import Skills from "./Components/Skills";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div>
      <Template>
        <Header />
      </Template>
      <Template>
        <About />
      </Template>
      <Template>
        <Service />
      </Template>
      <Template>
        <Skills />
      </Template>
      <Template>
        <Project />
      </Template>
      <Template>
        <Edu />
      </Template>
      <Footer />
    </div>
    
  );
}
