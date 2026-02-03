import React, { useEffect, useState, useCallback } from "react";
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

// Assets
import ResumeIcon from "./assets/resume.png";
import Github from "./assets/Githubwhite.png";
import Linkedin from "./assets/linkedin.png";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Initialization
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });

    let isPaused = false;

    const handleScroll = () => {
      if (isPaused) return;
      isPaused = true;

      // requestAnimationFrame performance ke liye best hai
      window.requestAnimationFrame(() => {
        const sections = document.querySelectorAll("section[id]");
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute("id");

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionId);
          }
        });
        isPaused = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main>
        <section id="home" className="min-vh-100">
          <Hero />
        </section>
        <section id="about" className="min-vh-100">
          <About />
        </section>
        <section id="skills" className="min-vh-100">
          <Skills />
        </section>
        <section id="projects" className="min-vh-100">
          <Projects />
        </section>
        <section id="contact" className="min-vh-100">
          <Contact />
        </section>
      </main>

      <Footer />

      {/* Floating Social Icons */}
      <div className="social-fixed-buttons d-flex flex-column gap-2">
        <a
          href="/assets/resume.pdf" // Make sure this path is correct in your public folder
          download="My_Resume.pdf"
          className="resume-button"
          title="Download Resume"
        >
          <img src={ResumeIcon} alt="Resume" width="40" height="40" />
        </a>
        <a
          href="https://github.com/Pankhil29"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Github} alt="github" width="40" height="40" />
        </a>
        <a
          href="https://www.linkedin.com/in/pankhil-patel-5085aa299"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Linkedin} alt="LinkedIn" width="40" height="40" />
        </a>
      </div>
    </div>
  );
}

export default App;
