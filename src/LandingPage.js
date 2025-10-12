import React from 'react';
import Navbar from './Components/Navbar';
import './LandingPage.css';
import Typewriter from "typewriter-effect";
import { FaArrowDown } from 'react-icons/fa';
import FinderShape from './Components/FinderShape';
import './Components/FinderShape.css';
import { useRef, useState } from "react";
import CustomScrollbar from "./Components/CustomScrollbar";




function LandingPage() {

  const scrollRef = useRef(null);
  const [selectedFolder, setSelectedFolder] = useState(null);

  const projects = [
  {id: "Project 1", image: "/Icons/folder-icon-macos.webp"},
  {id: "Project 2", image: "/Icons/folder-icon-macos.webp"},
  {id: "Project 3", image: "/Icons/folder-icon-macos.webp"},
  {id: "Project 4", image: "/Icons/folder-icon-macos.webp"},
  {id: "Project 5", image: "/Icons/folder-icon-macos.webp"},
  {id: "Project 6", image: "/Icons/folder-icon-macos.webp"},
  {id: "Project 7", image: "/Icons/folder-icon-macos.webp"},
  {id: "Project 8", image: "/Icons/folder-icon-macos.webp"},

];

  const handleFolderClick = (project) => {
    setSelectedFolder(project);
  };

  const handleCloseFolder = () => {
    setSelectedFolder(null);
  };

  return (
    <div>
      <Navbar />
      <section className="hero">
        <div className="hero-text">
          <h1>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("If you're seeing this,")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("I probably gave you my card.")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("If not,")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Welcome!")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("I'm Aaron.")
                  .start();
              }}
              options={{
                loop: false,
                delay: 55,
              }}
            />
          </h1>
        </div>
            <p> A recent Computer Science graduate from The University of Texas at Rio Grande Valley. 
              Through building websites for local clinics and businesses, 
              I’ve been able to merge my technical expertise with my commitment to helping others. 
          </p>
          <FaArrowDown className="arrow-icon"></FaArrowDown>
      </section>
      <section className="about">
          <div className="about-header">
            <h1> / about-me </h1>
            <div className="header-line"></div>
          </div>
        <div className="about-content">
          <div className="about-text">
          <p> I'm learning as I go, but right now, I'm focused on sharpening my technical skills, grinding leetcode,
            and preparing for software engineering interviews.
            I recently picked up JavaScript, HTML, and CSS, and somehow managed to earn the trust of a 
            doctor to build their website. Since then, I’ve had more opportunities to build sites for others.
            That's when I realized I really enjoyed solving problems and helping people. The sites can be found below in the portfolio section.
            </p>


          </div>
          <div className="about-image">
            <img src="/Pictures/AboutPicture.jpg" alt="Handome Young Man"></img></div>
        </div>
      </section>
      <section className="portfolio">
        <div className="portfolio-header">
           <h1>/ portfolio</h1>
           <div className="header-line"></div>
        </div>
        <div className="portfolio-content">
          <div className="portfolio-item">
            <img src="/Pictures/JKMedicalPage.png" alt="JK Medical Website" />
            <h3>JK Medical Clinic</h3>
            <p>September 2025</p>
            <button>View Site</button>
          </div>
          <div className="portfolio-item">
            <img src="/Pictures/GracePointPage.png" alt="Grace Point Website" />
            <h3>GracePoint Urgent Care</h3>
            <p>October 2025</p>
            <button>View Site</button>
          </div>
          <div className="portfolio-item">
            <img src="/Pictures/ThePlaySage.png" alt="ThePlaySage Website" />
            <h3>ThePlaySage</h3>
            <p>November 2025</p>
            <button>View Site</button>
          </div>
           <div className="portfolio-item">
            <div class="placeholder-box">
              <span>?</span>
              </div>
            <h3>Maybe yours?</h3>
            <button>Contact Me</button>
          </div>
        </div>
      </section>
      <section className="projects">
        <div className="projects-header">
            <h1>/ projects</h1>
            <div className="header-line"></div>
        </div>
        <div className="projects-content">
          <FinderShape/>
          <div className="finder-scroll" ref={scrollRef}>
            {projects.map((project, index) => (
              <div 
                className={`folder-item ${selectedFolder?.id === project.id ? 'selected' : ''}`}
                key={index}
                onClick={() => handleFolderClick(project)}
              >
                <img src={project.image} alt={project.name} />
                <span>{project.name}</span>
              </div>
            ))}
          </div>
          <CustomScrollbar scrollRef={scrollRef} />

          {/* Enlarged Folder Modal */}
          {selectedFolder && (
            <div className="folder-modal-overlay" onClick={handleCloseFolder}>
              <div 
                className="folder-modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <img src={selectedFolder.image} alt={selectedFolder.id} />
                <span>{selectedFolder.id}</span>
              </div>
            </div>
          )}
        </div>

      </section>
    </div>
  );
}

export default LandingPage;
