import React, { useEffect, useState } from 'react';
import './ThemePage.css';
import Card from '../../components/Card';

const cards = [
  { src: "https://github.com/user-attachments/assets/fda3deaf-8d91-414d-9f13-8cb4280b6555", title: "AI/Ml", description: "Generative AI creates new content using advanced machine learning models." },
  { src: "https://github.com/user-attachments/assets/ed3a421d-0556-4064-a60c-75cda82f86b7", title: "Game Development", description: "Designing, creating, and programming interactive video games." },
  { src: "https://github.com/user-attachments/assets/0b41654d-2d95-4121-85a3-0b0acd5fd788", title: "Blockchain", description: "Digital currency using cryptographic techniques for secure transactions." },
  { src: "https://github.com/user-attachments/assets/6b764909-3b9d-4663-897c-3977f20bc585", title: "Cybersecurity", description: "Protecting computer systems, networks, and data from cyberattacks." },
  { src: "https://github.com/user-attachments/assets/f804cb7f-2ab1-4c92-a629-6234a975d6b8", title: "Cloud Computing", description: "On-demand computing resources over the internet." },
  { src: "https://github.com/user-attachments/assets/ac7fbd65-6e7e-40b0-b70a-32d64f617349", title: "Autonomous Vehicles", description: "Self-driving vehicles equipped with sensors and AI." },
  { src: "https://github.com/user-attachments/assets/5e24f079-eacc-4d39-8eac-fbc1769d163b", title: "Wearable Technology", description: "Devices like smartwatches and fitness trackers worn on the body." },
  { src: "https://github.com/user-attachments/assets/636cd18b-af68-42c4-9b58-046d1d7266d9", title: "Robotics", description: "Designing and programming robots to perform tasks autonomously." },
  { src: "https://github.com/user-attachments/assets/00c25f1f-b89e-4fe3-97e0-457d731b3fbb", title: "Internet of Things", description: "Connecting physical devices to the internet for data sharing." },
  { src: "https://github.com/user-attachments/assets/2789afea-9167-46b1-9c74-dea1f3fd8bd2", title: "Renewable Energy", description: "Harnessing natural resources for sustainable and clean energy." },
  { src: "https://github.com/user-attachments/assets/2789afea-9167-46b1-9c74-dea1f3fd8bd2", title: "Biotecnology", description: "Using biological systems and organisms to develop new products." },
  { src: "https://github.com/user-attachments/assets/2789afea-9167-46b1-9c74-dea1f3fd8bd2", title: "agrotech", description: "Innovations in agriculture to improve farming practices and food production." },
];

const ThemePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Dynamically apply margin-top to the first card of each column
  const getCardStyle = (index) => {
    let style = {};

    if (!isMobile) {
      if (index % 2 == 0) {
        style = { marginTop: '40px' };
      }
    } else {
      if (index == 1) {
        style = { marginTop: '40px' };
      }
    }

    return style;
  };

  return (
    <div className="theme-page-bg">
      <div className="layout">
        <h1 className="themes">Themes for the Event</h1>
        <div className="card-container" >
          {cards.map((card, index) => {
            const style = getCardStyle(index);
            return (
              <Card
                className="individualThemeCard"
                src={card.src}
                title={card.title}
                description={card.description}
                key={index}
                style={style}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThemePage