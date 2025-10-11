import React from 'react';
import { FaRegFolderClosed } from 'react-icons/fa6';
import { FaRegClock } from 'react-icons/fa';
import { PiAppStoreLogo } from 'react-icons/pi';
import { MdOutlineDownloadForOffline } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaMinusCircle } from 'react-icons/fa';

function FinderShape(){
    return (
        <div className="finder-shape">
            <div className="finder-sidebar">
                <div className="sidebar-buttons">
                <ul style={{display: "flex"}}>
                    <li><AiFillCloseCircle style={{color: "red", height: "auto", width: "25px"}}></AiFillCloseCircle></li>
                    <li><FaMinusCircle style={{color: "yellow", height: "auto", width: "22px"}}></FaMinusCircle></li>
                </ul>
                <h1>Favorites</h1>
                 <div className="projects-folder">
                <ul>
                    <li><img src="./Icons/Airdrop.png" alt="Airdrop Icon" style={{width: "25px", height: "20px", marginRight: "8px"}}></img>Airdrop</li>
                    <li><FaRegClock style={{color: "#2176d8ff", marginRight: "10px" }}/>Recents</li>
                    <li><PiAppStoreLogo style={{color: "#2176d8ff", marginRight: "10px" }}/>Applications</li>
                    <li><MdOutlineDownloadForOffline style={{color: "#2176d8ff", marginRight: "10px" }}/>Downloads</li>
                    <li><FaRegFolderClosed style={{color: "#2176d8ff", marginRight: "10px" }}/>Projects</li>
                </ul>
                </div>
                </div>
            </div>
            <div className="blackline"></div>
            <div className="top-bar"></div>


        </div>
    )
}

export default FinderShape;