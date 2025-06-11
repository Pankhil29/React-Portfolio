import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/social.css";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    useEffect(()=>{
      AOS.init({duration: 1000, once:true});
    }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      <div className="social-fixed-buttons">
        <a href="/assets/resume.pdf" download className="resume-button" title="Download Resume">
  <img src="https://img.icons8.com/ios-filled/30/ffffff/resume.png" alt="Resume" />
</a>
        <a href="https://github.com/Pankhil29" target="_blank" rel="noreferrer">      
        <img src="https://img.icons8.com/ios-filled/30/ffffff/github.png" alt="github"/>
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
          <img src="https://img.icons8.com/ios-filled/30/ffffff/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="mailto:your@email.com">
          <img src="https://img.icons8.com/ios-filled/30/ffffff/email.png" alt="Email" />
        </a> 
        </div>
    </>
  )
}

export default App;