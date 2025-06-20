import React, { useEffect, useState } from "react";
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

import Resume from "./assets/resume.png";
import Github from "./assets/Githubwhite.png";
import Linkedin from "./assets/linkedin.png";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop; // distance of top of( page ,to section)
        const sectionHeight = section.offsetHeight; //total height of that section
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          // /3 gives smoother effect
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <Footer />

      <div className="social-fixed-buttons">
        <a
          href="/assets/resume.pdf"
          download
          className="resume-button"
          title="Download Resume"
        >
          <img src={Resume} alt="Resume" />
        </a>
        <a href="https://github.com/Pankhil29" target="_blank" rel="noreferrer">
          <img src={Github} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/pankhil-patel-5085aa299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
          target="_blank"
          rel="noreferrer"
        >
          <img src={Linkedin} alt="LinkedIn" />
        </a>
      </div>
    </>
  );
}

export default App;
