import React from 'react';
import './ThemePage.css';


const cards = [
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkPqMo2Vv7AvThKBEEYKScumbcu5ZngfsDGg&s", title: "GenAI / ML / AI", description: "Generative AI creates new content using advanced machine learning models." },
  { src: "https://www.chetu.com/img/blogs/game-development-trends/game-development-trends-banner.jpg", title: "Game Development", description: "Designing, creating, and programming interactive video games." },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkjLoCZ2S88YH5K_hfWnOWlLDMKkIN6WQxNA&s", title: "Blockchain & Cryptocurrency", description: "Digital currency using cryptographic techniques for secure transactions." },
  { src: "https://cdn1.expresscomputer.in/wp-content/uploads/2023/01/04170521/EC_Data_Security_Lock_750.jpg", title: "Cybersecurity and Data Privacy", description: "Protecting computer systems, networks, and data from cyberattacks." },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQtsO1nCyQHfLt9mhNKztcEnx6G7o96ScEQ&s", title: "Cloud Computing", description: "On-demand computing resources over the internet." },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWxGByTYnZl3zuIGFcKc2cUjYm4fD7swGTtQ&s", title: "Autonomous Vehicles", description: "Self-driving vehicles equipped with sensors and AI." },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLf7rXFs_T_h9_cGY-JXmhNWmv57aiYe17rQ&s", title: "Wearable Technology", description: "Devices like smartwatches and fitness trackers worn on the body." },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLRrCCRpCaL2Zi9mE52KZK6j6vRyE-D4-5DA&s", title: "Robotics And Automation", description: "Designing and programming robots to perform tasks autonomously." },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYpKxBr1s0aGDE2J5M-ROgPy0CZCePG9C8Q&s", title: "Internet of Things (IoT)", description: "Connecting physical devices to the internet for data sharing." },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZUIdzX2bbh16fjfvn1aaHE2K6EtfkanWcQ&s", title: "Renewable Energy Technology", description: "Harnessing natural resources for sustainable and clean energy." }
];

const ThemePage = () => {
  return (
    <>
      <div className="theme-page-bg">
        <div className="layout">
          <h1 className='themes'>Themes for the Event</h1>
          <div className="card-container">
            {cards.map((card, index) => (
              <div key={index} className="card" style={{ background: `url(${card.src}) center/cover no-repeat` }}>
                <div className="card-content">
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="refresh-btn" onClick={refreshCards}>Refresh Animation</button>
        </div>
      </div>
    </>
  );
}

function refreshCards() {




  
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.style.animation = "none";
    card.style.background = `url('https://picsum.photos/800/600?random=${index + 1}&t=${Date.now()}') center/cover no-repeat`;
    card.offsetHeight; // Trigger reflow
    card.style.animation = null;
  });
}

export default ThemePage;
