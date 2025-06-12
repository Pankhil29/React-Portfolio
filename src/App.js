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

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
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
          <img
            src="https://img.icons8.com/ios-filled/30/ffffff/resume.png"
            alt="Resume"
          />
        </a>
        <a href="https://github.com/Pankhil29" target="_blank" rel="noreferrer">
          <img
            src="https://img.icons8.com/ios-filled/30/ffffff/github.png"
            alt="github"
          />
        </a>
        <a
          href="https://linkedin.com/in/pankhil-patel"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.icons8.com/ios-filled/30/ffffff/linkedin.png"
            alt="LinkedIn"
          />
        </a>
      </div>
    </>
  );
}

export default App;
