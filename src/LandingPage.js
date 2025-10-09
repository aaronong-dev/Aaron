import React from 'react';
import Navbar from './Components/Navbar';
import './LandingPage.css';
import Typewriter from "typewriter-effect";
import { FaArrowDown } from 'react-icons/fa';



function LandingPage() {
  return (
    <div>
      <Navbar />
      <section className="hero">
        <div className="hero-text">
          <h1>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("If you're seeing this")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Welcome!")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("I'm Aaron")
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
          <h1> about-me </h1>
        <div className="about-content">
          <div className="about-text">
          <p> Honestly, I’m still figuring it out. Right now, I’m focused on preparing for technical interviews, 
            learning new languages and frameworks, and just becoming a better programmer overall. 
            I recently picked up JavaScript, HTML, and CSS, and somehow managed to earn the trust of a 
            doctor to build their website. Since then, I’ve had more opportunities to build sites for others.
            That's when I realized I really enjoyed solving problems and helping people. 
            </p>

            <p> <strong>Note:</strong> I gave up CS the first time. But here we are. Give something another try. You never know
              where it might take you. </p>
          </div>
          <div className="about-image">
            <img src="/Pictures/AboutPicture.jpg" alt="Handome Young Man"></img></div>
        </div>
      </section>
      <section className="portfolio">
        <h1> portfolio</h1>
        <div className="portfolio-content">
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
