import About from "./Components/About";
import Template from "./Components/Animate/Template";
import Edu from "./Components/Edu";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Project from "./Components/Project";
import Service from "./Components/Service";
import Skills from "./Components/Skills";

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
        <Experience />
      </Template>
      <Template>
        <Edu />
      </Template>
      <Footer />
    </div>

  );
}
