import React from 'react';
import './Navbar.css';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { SiLeetcode } from 'react-icons/si';


function Navbar({ onEmailClick }){
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            if (sectionId === 'about') {
                // Scroll slightly higher for about section
                const elementPosition = element.offsetTop;
                const offsetPosition = elementPosition - 50; // 50px higher
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            } else {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    };

    const handleEmailClick = () => {
        if (onEmailClick) {
            onEmailClick();
        }
    };

    return(
        <nav className="navbar">
            <div className="nav-title"> Aaron Ong </div>
            <ul className="nav-links">
                <li onClick={() => scrollToSection('home')}>Home</li>
                <li onClick={() => scrollToSection('about')}>About</li>
                <li onClick={() => scrollToSection('portfolio')}>Portfolio</li>
                <li onClick={() => scrollToSection('projects')}>Projects</li>
                <li onClick={() => scrollToSection('progression')}>Progression</li>
            </ul>
            <ul className="social-links">
                <li onClick={handleEmailClick} style={{cursor: "pointer"}}>
                    <MdMail style={{color: "white"}}/>
                </li>
                <li>
                    <a href="https://github.com/aaronong-dev"><FaGithub style={{color: "white"}}/></a>
                </li>
                <li>    
                    <a href="https://www.linkedin.com/in/aaron-ong-77b642158"><AiFillLinkedin style={{color: "white"}}/></a>
                </li>
                <li>
                    <a href="https://leetcode.com/u/BYIgV6MyH7/"><SiLeetcode style={{color: "white"}}/></a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;