import React from 'react';
import "./ProjectsSection.css";

const ProjectsSection = () => {
  return (
    <>
      {/* Projects Section */}
      <div className="projects-section">
        <div className="projects-content">
          <h2 className="section-title-project">Our Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Working Model</h3>
              <p>Explore innovative physical prototypes showcasing cutting-edge solutions.</p>
            </div>
            <div className="project-card">
              <h3>Paper Presentation</h3>
              <p>Showcase your research and ideas with well-crafted technical papers.</p>
            </div>
            <div className="project-card">
              <h3>Software Competition</h3>
              <p>Compete to develop software solutions to real-world challenges.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Prizes Section */}
      <div className="prizes-section">
        <h2 className="section-title-prize">Prizes</h2>
        <p id="p">Prizes will be given under the following 3 categories:</p>
        <div className="prizes-grid">
          <div className="prize-card">
            <h3>Hardware Project</h3>
            <p>1<sup>st</sup> Prize: Rs. 10,000/-</p>
            <p>2<sup>nd</sup> Prize: Rs. 5,000/-</p>
          </div>
          <div className="prize-card">
            <h3>Software Project</h3>
            <p>1<sup>st</sup> Prize: Rs. 8,000/-</p>
            <p>2<sup>nd</sup> Prize: Rs. 4,000/-</p>
          </div>
          <div className="prize-card">
            <h3>Paper Presentation</h3>
            <p>1<sup>st</sup> Prize: Rs. 7,000/-</p>
            <p>2<sup>nd</sup> Prize: Rs. 3,500/-</p>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="additional-info">
        <p>• Participation certificate for all participants</p>
        <p>• Consolation prizes may be awarded based on recommendations from judges. Decision of judges will be binding on participants.</p>
      </div>
    </>
  );
};

export default ProjectsSection;
