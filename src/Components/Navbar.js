import React from 'react';
import './Navbar.css';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';


function Navbar(){
    return(
        <nav className="navbar">
            <div className="nav-title"> Aaron Ong </div>
            <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Progression</li>
            </ul>
            <ul className="social-links">
                <li>
                    <MdMail style={{color: "white"}}/>
                </li>
                <li>
                    <a href="https://github.com/aaronong-dev"><FaGithub style={{color: "white"}}/></a>
                </li>
                <li>    
                    <a href="https://www.linkedin.com/in/aaron-ong-77b642158"><AiFillLinkedin style={{color: "white"}}/></a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;