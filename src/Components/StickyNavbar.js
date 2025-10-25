import React, { useState, useEffect } from 'react';
import './StickyNavbar.css';

function StickyNavbar() {
    const [isRevealed, setIsRevealed] = useState(false);
    const [shouldRemove, setShouldRemove] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const progressionSection = document.querySelector('.progression');
            if (!progressionSection) return;

            const sectionTop = progressionSection.offsetTop;
            const sectionHeight = progressionSection.offsetHeight;
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            // Calculate when user has scrolled halfway through the progression section
            const halfwayPoint = sectionTop + (sectionHeight / 2);
            const currentScrollPosition = scrollPosition + windowHeight;

            if (currentScrollPosition >= halfwayPoint) {
                setIsRevealed(true);
            }
            // Don't reset states when scrolling back up - keep it removed permanently
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // When revealed, wait for animation to complete (800ms) before removing from DOM
    useEffect(() => {
        if (isRevealed) {
            const timer = setTimeout(() => {
                setShouldRemove(true);
            }, 800); // Match the transition duration in CSS
            return () => clearTimeout(timer);
        }
    }, [isRevealed]);

    // Don't render the navbar once animation is complete
    if (shouldRemove) return null;

    return (
        <div className={`sticky-navbar ${isRevealed ? 'revealed' : ''}`}>
            {/* Debug: This should be visible */}
        </div>
    );
}

export default StickyNavbar;
