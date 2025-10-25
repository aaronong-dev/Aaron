import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const timelineData = [
    {
      year: "August 2023",
      title: "Started Computer Science",
      description: "Switched from Biology and began my journey in Computer Science at The University of Texas at Rio Grande Valley",
      type: "education"
    },
    {
      year: "May 2025",
      title: "Graduation",
      description: "Graduated with Bachelor's in Computer Science",
      type: "graduation"
    },
    {
      year: "June 2025",
      title: "Odin Project/React Learning",
      description: "Dove deep into React.js and modern web development practices. Started the Odin Project web development curriculum and built LaneManager.Pro",
      type: "learning"
    },
    {
      year: "July 2025",
      title: "First Client Website",
      description: "Built JK Medical Clinic website - my first professional project",
      type: "professional"
    },
    {
        year: "September 2025",
        title: "Second Client Website",
        description: "Built GracePoint Urgent Care website - my second professional project",
        type: "professional"
      },
      {
        year: "October 2025 - Present",
        title: "Hacienda Del Sol Resort",
        description: "Oversee marketing initiatives, manage the resort’s website, and create visual assets for branding and promotions.",
        type: "professional"
      },
  ];

  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      {timelineData.map((item, index) => (
        <div key={index} className={`timeline-item ${item.type}`}>
          <div className="timeline-dot">
            {item.type === 'education' && (
              <img src="/UTRGV-Logo.png" alt="UTRGV Logo" />
            )}
            {item.type === 'graduation' && (
              <img src="/Pictures/GradPic.jpg" alt="Aaron's graduation" />
            )}
            {item.type === 'learning' && (
              <img src="/Pictures/OdinProjectLogo.png" alt="Odin Project Logo" />
            )}
            {item.type === 'professional' && item.title === 'First Client Website' && (
              <img src="/Pictures/JKMedicalWebsite.png" alt="JK Medical Website" />
            )}
            {item.type === 'professional' && item.title === 'Second Client Website' && (
              <img src="/Pictures/GracePointPage.png" alt="GracePoint Website" />
            )}
            {item.type === 'professional' && item.title === 'Hacienda Del Sol Resort' && (
              <img src="/Pictures/HaciendaDelSol.jpg" alt="Hacienda Del Sol Resort" />
            )}
          </div>
          <div className="timeline-content">
            <div className="timeline-year">{item.year}</div>
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
