import React from 'react';
import './Progression.css';
import Timeline from './Timeline';
import StickyNavbar from './StickyNavbar';

const Progression = () => {
    return (
        <div className="progression">
            <div className="progression-header">
                <h1>/ progression</h1>
                <div className="header-line"></div>
            </div>
            <div className="progression-content">
                <Timeline />
                <StickyNavbar />
            </div>
        </div>
    );
};

export default Progression;