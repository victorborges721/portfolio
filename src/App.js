import "./App.css";
import { useRef } from "react";
import NavigationBar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const scrollToSection = (sectionName) => {
    let offset = 56;
    let el = document.querySelector(`#${sectionName}`);
    window.scroll({
      top: el.offsetTop - offset,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <main>
      <NavigationBar scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
