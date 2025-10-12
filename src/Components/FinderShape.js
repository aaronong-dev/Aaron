import React from 'react';
import { FaRegFolderClosed } from 'react-icons/fa6';
import { FaRegClock } from 'react-icons/fa';
import { PiAppStoreLogo } from 'react-icons/pi';
import { MdOutlineDownloadForOffline } from 'react-icons/md';
import { FaCircle } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

function FinderShape(){
    return (
        <div className="finder-shape">
            <div className="finder-sidebar">
                <div className="sidebar-buttons">
                <ul style={{display: "flex"}}>
                    <li><FaCircle style={{color: "red", height: "auto", width: "19px",  marginLeft: "-15px", opacity: "0.9"}}></FaCircle></li>
                    <li><FaCircle style={{color: "yellow", height: "auto", width: "19px", opacity: "0.9"}}></FaCircle></li>
                    <li><FaCircle style={{color: "green", height: "auto", width: "19px", opacity: "0.9"}}></FaCircle></li>
                </ul>
                <h1>Favorites</h1>
                 <div className="projects-folder">
                <ul>
                    <li><img src="./Icons/Airdrop.png" alt="Airdrop Icon" style={{width: "25px", height: "20px", marginRight: "8px"}}></img>Airdrop</li>
                    <li><FaRegClock style={{color: "#2176d8ff", marginRight: "10px" }}/>Recents</li>
                    <li><PiAppStoreLogo style={{color: "#2176d8ff", marginRight: "10px" }}/>Applications</li>
                    <li><MdOutlineDownloadForOffline style={{color: "#2176d8ff", marginRight: "10px" }}/>Downloads</li>
                    <li className="projects-item">
                        <FaRegFolderClosed style={{color: "#2176d8ff", marginRight: "10px"}}/>
                        Projects
                    </li>
                </ul>
                </div>
                </div>
            </div>
            <div className="blackline"></div>
            <div className="blackline2"></div>
            <div className="top-bar">
                <div className="arrows-title">
                <FaChevronLeft style={{color: "white", height: "auto", width: "15px", marginRight: "20px", opacity: "0.5", marginBottom: "5px"}}></FaChevronLeft>
                <FaChevronRight style={{color: "white", height: "auto", width: "15px", marginLeft: "20px", opacity: "0.5", marginBottom: "5px"}}></FaChevronRight>
                <h1 style={{marginLeft: "25px"}}> Projects </h1>
                </div>
                <div className="top-bar-icons">
                <img src="./Pictures/FinderTopBar.png" alt="Finder Top Bar"></img>
                </div>

            </div>


        </div>
    )
}

export default FinderShape;