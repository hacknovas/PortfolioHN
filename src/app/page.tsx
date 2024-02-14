import About from "./Components/About";
import Edu from "./Components/Edu";
import Footer from "./Components/Footer";
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
      <Footer />
    </div>
  );
}
