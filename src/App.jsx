import { useEffect } from "react";

import NavBar from "./components/NavBar.jsx";
import About from "./components/About.jsx";
import Header from "./components/Header.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  // add indicator
  useEffect(() => {
    let windowHeight = window.innerHeight;
    const occupierChecker = (elem) => {
      let elemCoords = elem.getBoundingClientRect();
      if (elemCoords.bottom > windowHeight / 2 && elemCoords.top < windowHeight / 2) {
        return true;
      } else {
        return false;
      }
    };

    const handleScroll = () => {
      let elems = document.querySelectorAll(".occupier");
      for (let elem of elems) {
        if (occupierChecker(elem)) {
          elem.children[1].classList.add("visible-indicator");
          document.querySelector('#nav-' + elem.id).classList.add('nav-indicator');
        } else {
          elem.children[1].classList.remove("visible-indicator");
          document.querySelector('#nav-' + elem.id).classList.remove('nav-indicator');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
