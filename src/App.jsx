import vp_indicator from "./utils/vp_indicator.js";

import NavBar from "./pages/NavBar.jsx";
import About from "./pages/About.jsx";
import Header from "./pages/Header.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./pages/Footer.jsx";
import Skills from "./pages/Skills.jsx";
import SentSuccess from "./components/Sent_Success.jsx";



function App() {
  
  vp_indicator();

  return (
    <>
      <SentSuccess />
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
