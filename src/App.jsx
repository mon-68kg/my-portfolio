import { useEffect } from "react";

import NavBar from "./pages/NavBar.jsx";
import About from "./pages/About.jsx";
import Header from "./pages/Header.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./pages/Footer.jsx";
import Skills from "./pages/Skills.jsx";

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
