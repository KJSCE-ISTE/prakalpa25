import React from "react";
import "./ProjectsSection.css";
import useSmoothScrollTo from '../../hooks/useSmoothScrollTo';

const ProjectsSection = () => {

     const prizesBind = useSmoothScrollTo('#prizes');
  const combinedData = [
    {
      title: "Hardware Project ",
      description:
        "Explore innovative physical prototypes showcasing cutting-edge solutions.",
      prize: "1st Prize: Rs. 10,000*/-",
      prize2:"2nd Prize: Rs.5,000*/-",
    },
    {
      title: "Software Project",
      description:
        "Compete to develop software solutions to real-world challenges.",
      prize: "1st Prize: Rs. 8,000*/-",
      prize2:"2nd Prize: Rs.4,000*/-",
    },
    {
      title: "Paper Presentation",
      description:
        "Showcase your research and ideas with well-crafted technical papers.",
      prize: "1st Prize: Rs. 7,000*/-",
      prize2:"2nd Prize: Rs.3,500*  /-",
    },
  ];

  return (
    <div id="prizes" className="projects-section" {...prizesBind}>
      <div className="projects-content">
        <h2 className="section-title-project">Project Submission Categories</h2>
        <div className="project-cards">
          {combinedData.map((item, index) => (
            <div className="project-card" key={index}>
              <div className="card-inner">
                <div className="card-front">
                  <h3>{item.title}</h3>
                  <p>{item.prize}</p>
                  <p>{item.prize2}</p>
                </div>
                <div className="card-back">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ position: 'relative', zIndex: 1, fontSize: '1rem', color: 'white' }}>*Subject to change</p> {/* Ensure visibility on top of particles bg and match font */}
      </div>
    </div>
  );
};

export default ProjectsSection;
