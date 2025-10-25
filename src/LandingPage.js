import React from 'react';
import Navbar from './Components/Navbar';
import './LandingPage.css';
import Typewriter from "typewriter-effect";
import { FaArrowDown } from 'react-icons/fa';
import FinderShape from './Components/FinderShape';
import './Components/FinderShape.css';
import { useRef, useState, useEffect, useCallback } from "react";
import CustomScrollbar from "./Components/CustomScrollbar";




// Folder structure with nested contents
const projectsData = {
    id: "Projects",
    type: "folder",
    children: [
      {
        id: "Lane Manager",
        type: "folder",
        image: "/Icons/folder-icon-macos.webp",
        description: "A bowling tournament management platform for tournament directors to manage their tournaments.",
        children: [
          {id: "LaneManager.Pro", type: "file", image: "/Icons/folder-icon-macos.webp"},
          {id: "Videos-Of-Me-Bowling", type: "folder", image: "/Icons/folder-icon-macos.webp", description: "I started bowling when I was 10 years old. At around 15-16 years old, I started playing competitively.", children: []},
          {id: "package.json", type: "file", image: "/Icons/folder-icon-macos.webp"},
          {id: "config.js", type: "file", image: "/Icons/folder-icon-macos.webp"},
        ]
      },
      {
        id: "Project 2",
        type: "folder",
        image: "/Icons/folder-icon-macos.webp",
        description: "Full-stack e-commerce application with React and Node.js",
        children: [
          {id: "frontend", type: "folder", image: "/Icons/folder-icon-macos.webp", children: []},
          {id: "backend", type: "folder", image: "/Icons/folder-icon-macos.webp", children: []},
          {id: "README.md", type: "file", image: "/Icons/folder-icon-macos.webp"},
          {id: "package.json", type: "file", image: "/Icons/folder-icon-macos.webp"},
        ]
      },
      {
        id: "Project 3",
        type: "folder",
        image: "/Icons/folder-icon-macos.webp",
        description: "Personal portfolio website built with React",
        children: [
          {id: "index.html", type: "file", image: "/Icons/folder-icon-macos.webp"},
          {id: "styles.css", type: "file", image: "/Icons/folder-icon-macos.webp"},
          {id: "script.js", type: "file", image: "/Icons/folder-icon-macos.webp"},
          {id: "images", type: "folder", image: "/Icons/folder-icon-macos.webp", children: []},
        ]
      },
      {
        id: "Project 4",
        type: "folder",
        image: "/Icons/folder-icon-macos.webp",
        description: "2D mobile game developed with Unity",
        children: [
          {id: "Assets", type: "folder", image: "/Icons/folder-icon-macos.webp", children: []},
          {id: "Scripts", type: "folder", image: "/Icons/folder-icon-macos.webp", children: []},
          {id: "Scenes", type: "folder", image: "/Icons/folder-icon-macos.webp", children: []},
          {id: "README.md", type: "file", image: "/Icons/folder-icon-macos.webp"},
        ]
      },
    ]
};

function LandingPage() {

  const scrollRef = useRef(null);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [currentPath, setCurrentPath] = useState([]);
  const [clickTimeout, setClickTimeout] = useState(null);

  // Get current folder contents based on path
  const getCurrentFolderContents = useCallback(() => {
    let current = projectsData;
    for (let folderName of currentPath) {
      current = current.children.find(item => item.id === folderName);
      if (!current) return [];
    }
    return current.children || [];
  }, [currentPath]);

  // Get current folder name
  const getCurrentFolderName = () => {
    if (currentPath.length === 0) return "Projects";
    return currentPath[currentPath.length - 1];
  };

  const handleFolderClick = (item) => {
    setSelectedFolder(item);
  };

  const handleFolderDoubleClick = (item) => {
    if (item.type === "folder") {
      setCurrentPath([...currentPath, item.id]);
      setSelectedFolder(null);
    }
  };

  const handleItemClick = (item) => {
    // Clear existing timeout if any
    if (clickTimeout) {
      clearTimeout(clickTimeout);
      setClickTimeout(null);
      // Double click detected
      handleFolderDoubleClick(item);
    } else {
      // Single click - provide immediate visual feedback
      handleFolderClick(item);
      // Set timeout for double-click detection
      const timeout = setTimeout(() => {
        setClickTimeout(null);
      }, 250);
      setClickTimeout(timeout);
    }
  };

  const handleCloseFolder = () => {
    setSelectedFolder(null);
  };

  const handleBackNavigation = () => {
    if (currentPath.length > 0) {
      setCurrentPath(currentPath.slice(0, -1));
      setSelectedFolder(null);
    }
  };

  // Automatically select the first folder when content changes
  useEffect(() => {
    const contents = getCurrentFolderContents();
    if (contents.length > 0) {
      setSelectedFolder(contents[0]);
    }
  }, [currentPath, getCurrentFolderContents]);

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
            <a href="https://www.jkmedicalclinic.com/" target="_blank" rel="noopener noreferrer" className="view-site-link">View Site</a>
          </div>
          <div className="portfolio-item">
            <img src="/Pictures/GracePointPage.png" alt="Grace Point Website" />
            <h3>GracePoint Urgent Care</h3>
            <p>October 2025</p>
            <a href="https://your-gracepoint-url.com" target="_blank" rel="noopener noreferrer" className="view-site-link">View Site</a>
          </div>
          <div className="portfolio-item">
            <img src="/Pictures/ThePlaySage.png" alt="ThePlaySage Website" />
            <h3>ThePlaySage</h3>
            <p>November 2025</p>
            <a href="https://theplaysage.com" target="_blank" rel="noopener noreferrer" className="view-site-link">View Site</a>
          </div>
           <div className="portfolio-item">
            <div class="placeholder-box">
              <span>?</span>
              </div>
            <h3>Maybe yours?</h3>
            <a href="mailto:your-email@example.com" className="view-site-link">Contact Me</a>
          </div>
        </div>
      </section>
      <section className="projects">
        <div className="projects-header">
            <h1>/ projects</h1>
            <div className="header-line"></div>
        </div>
        <div className="projects-content">
          <FinderShape 
            currentFolderName={getCurrentFolderName()} 
            onBackClick={handleBackNavigation}
            canGoBack={currentPath.length > 0}
          />
          <div className="finder-scroll" ref={scrollRef}>
            {getCurrentFolderContents().map((item, index) => (
              <div 
                className={`folder-item ${selectedFolder?.id === item.id ? 'selected' : ''}`}
                key={index}
                onClick={() => handleItemClick(item)}
              >
                <img src={item.image} alt={item.id} />
                <span>{item.id}</span>
              </div>
            ))}
          </div>
          <CustomScrollbar scrollRef={scrollRef} contentKey={currentPath.join('/')} />

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
              <div className="folder-modal-information">
                <div className="folder-modal-information-header">
                <img src={selectedFolder.image} alt={selectedFolder.id} />
                <h1 style={{marginBottom: "10px"}}>{selectedFolder.id}</h1>
                </div>
             
              </div>
              <div className="folder-modal-information-content">
              <h2> Information </h2>
              <p>{selectedFolder.description}</p>
              </div>

            </div>
          )}
        </div>

      </section>
    </div>
  );
}

export default LandingPage;
