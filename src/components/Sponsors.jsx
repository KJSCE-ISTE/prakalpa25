import React from 'react';
import "../styles/Sponsors.css";

// Import all sponsor logos
import akizer from "../assets/sponsor-logos/AKIZER.png";
import alpha8 from "../assets/sponsor-logos/alpha-8.png";
import hamperOfJoy from "../assets/sponsor-logos/HAMPER_OF_JOY.png";
import hop from "../assets/sponsor-logos/HOP.png";
import interviewBuddy from "../assets/sponsor-logos/INTERVIEW-BUDDY.png";
import loveAndLatte from "../assets/sponsor-logos/LOVE & LATTE.png";
import mojoco from "../assets/sponsor-logos/MOJOCO.png";
import papel from "../assets/sponsor-logos/PAPEL.png";
import riddl from "../assets/sponsor-logos/RIDDL.png";
import siGlobal from "../assets/sponsor-logos/SI-GLOBAL.png";
import smaaash from "../assets/sponsor-logos/SMAAASH.png";

const Sponsors = () => {
  // Define sponsor categories and logos
  const allSponsors = [siGlobal, alpha8, interviewBuddy, hamperOfJoy, hop, riddl, mojoco, smaaash];
  const foodSponsors = [alpha8, akizer, hop, loveAndLatte, papel];

  return (
    <section id="sponsors" className="sponsors-section">
      <div className="sponsors-container">
        <h2 className="sponsors-title">Our Sponsors</h2>
        <div className="sponsors-description">
          <p>We extend our sincere gratitude to the organizations that have made Prakalpa 25 possible.</p>
        </div>

        {/* All Sponsors */}
        <div className="sponsor-category">
          <h3 className="category-title">Sponsors</h3>
          <div className="sponsor-grid all-sponsors">
            {allSponsors.map((logo, index) => (
              <div className="sponsor-card" key={`sponsor-${index}`}>
                <div className="sponsor-logo-container">
                  <img src={logo} alt={`Sponsor ${index + 1}`} className="sponsor-logo" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Food Sponsors */}
        <div className="sponsor-category">
          <h3 className="category-title">Food & Refreshments</h3>
          <div className="sponsor-grid food-sponsors">
            {foodSponsors.map((logo, index) => (
              <div className="sponsor-card food" key={`food-${index}`}>
                <div className="sponsor-logo-container">
                  <img src={logo} alt={`Food Sponsor ${index + 1}`} className="sponsor-logo" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
