import React, { useEffect } from 'react';
import LandingPage from './pages/landingPage/LandingPage';
import Card from './components/Card';
import './App.css';
import Header from './components/Header';

function App() {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector('.verticalNavBar');
      const menuIcon = document.querySelector('.menuIcon');
      if (nav && menuIcon && nav.classList.contains('open') && !nav.contains(event.target) && !menuIcon.contains(event.target)) {
        nav.classList.remove('open');
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Header />
      <LandingPage />
      <h1 className='themes'>Themes for the Event</h1>
      <div className="card-container">
        <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkPqMo2Vv7AvThKBEEYKScumbcu5ZngfsDGg&s" title="GenAI / ML / AI" description="K. J. Somaiya School of Engineering and the ISTE Students’ Chapter (MH 60) is organizing the 16th edition of national level project competition and paper presentation, PRAKALPA on 4th April 2025. The theme of this year’s Prakalpa is TECHNOVATE. This competition is open to all UG / PG students of engineering colleges. The TECHNOVATE is a distinguished platform, where visionaries, innovators, and technological virtuosos will come together to illuminate the forefront of innovation. It is an extravagant showcase of latest marvels and breakthroughs in the realm of technology." />
        <Card src="https://www.chetu.com/img/blogs/game-development-trends/game-development-trends-banner.jpg" title="Game Development" description="K. J. Somaiya School of Engineering and the ISTE Students’ Chapter (MH 60) is organizing the 16th edition of national level project competition and paper presentation, PRAKALPA on 4th April 2025. The theme of this year’s Prakalpa is TECHNOVATE. This competition is open to all UG / PG students of engineering colleges. The TECHNOVATE is a distinguished platform, where visionaries, innovators, and technological virtuosos will come together to illuminate the forefront of innovation. It is an extravagant showcase of latest marvels and breakthroughs in the realm of technology." />
        <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkjLoCZ2S88YH5K_hfWnOWlLDMKkIN6WQxNA&s" title="Blockchain & Cryptocurrency" description="K. J. Somaiya School of Engineering and the ISTE Students’ Chapter (MH 60) is organizing the 16th edition of national level project competition and paper presentation, PRAKALPA on 4th April 2025. The theme of this year’s Prakalpa is TECHNOVATE. This competition is open to all UG / PG students of engineering colleges. The TECHNOVATE is a distinguished platform, where visionaries, innovators, and technological virtuosos will come together to illuminate the forefront of innovation. It is an extravagant showcase of latest marvels and breakthroughs in the realm of technology." />
        <Card src="https://cdn1.expresscomputer.in/wp-content/uploads/2023/01/04170521/EC_Data_Security_Lock_750.jpg" title="Cybersecurity and Data Privacy" description="K. J. Somaiya School of Engineering and the ISTE Students’ Chapter (MH 60) is organizing the 16th edition of national level project competition and paper presentation, PRAKALPA on 4th April 2025. The theme of this year’s Prakalpa is TECHNOVATE. This competition is open to all UG / PG students of engineering colleges. The TECHNOVATE is a distinguished platform, where visionaries, innovators, and technological virtuosos will come together to illuminate the forefront of innovation. It is an extravagant showcase of latest marvels and breakthroughs in the realm of technology." />
        <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQtsO1nCyQHfLt9mhNKztcEnx6G7o96ScEQ&s" title="Cloud Computing" description="K. J. Somaiya School of Engineering and the ISTE Students’ Chapter (MH 60) is organizing the 16th edition of national level project competition and paper presentation, PRAKALPA on 4th April 2025. The theme of this year’s Prakalpa is TECHNOVATE. This competition is open to all UG / PG students of engineering colleges. The TECHNOVATE is a distinguished platform, where visionaries, innovators, and technological virtuosos will come together to illuminate the forefront of innovation. It is an extravagant showcase of latest marvels and breakthroughs in the realm of technology." />
        <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWxGByTYnZl3zuIGFcKc2cUjYm4fD7swGTtQ&s" title="Autonomous Vehicles" description="K. J. Somaiya School of Engineering and the ISTE Students’ Chapter (MH 60) is organizing the 16th edition of national level project competition and paper presentation, PRAKALPA on 4th April 2025. The theme of this year’s Prakalpa is TECHNOVATE. This competition is open to all UG / PG students of engineering colleges. The TECHNOVATE is a distinguished platform, where visionaries, innovators, and technological virtuosos will come together to illuminate the forefront of innovation. It is an extravagant showcase of latest marvels and breakthroughs in the realm of technology." />
        <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLf7rXFs_T_h9_cGY-JXmhNWmv57aiYe17rQ&s" title="Wearable Technology" description="K. J. Somaiya School of Engineering and the ISTE Students’ Chapter (MH 60) is organizing the 16th edition of national level project competition and paper presentation, PRAKALPA on 4th April 2025. The theme of this year’s Prakalpa is TECHNOVATE. This competition is open to all UG / PG students of engineering colleges. The TECHNOVATE is a distinguished platform, where visionaries, innovators, and technological virtuosos will come together to illuminate the forefront of innovation. It is an extravagant showcase of latest marvels and breakthroughs in the realm of technology." />
        <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLRrCCRpCaL2Zi9mE52KZK6j6vRyE-D4-5DA&s" title="Robotics And Automation" description="K. J. Somaiya School of Engineering and the ISTE Students’ Chapter (MH 60) is organizing the 16th edition of national level project competition and paper presentation, PRAKALPA on 4th April 2025. The theme of this year’s Prakalpa is TECHNOVATE. This competition is open to all UG / PG students of engineering colleges. The TECHNOVATE is a distinguished platform, where visionaries, innovators, and technological virtuosos will come together to illuminate the forefront of innovation. It is an extravagant showcase of latest marvels and breakthroughs in the realm of technology." />
        <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYpKxBr1s0aGDE2J5M-ROgPy0CZCePG9C8Q&s" title="Internet of Things (IoT)" description="K. J. Somaiya School of Engineering and the ISTE Students’ Chapter (MH 60) is organizing the 16th edition of national level project competition and paper presentation, PRAKALPA on 4th April 2025. The theme of this year’s Prakalpa is TECHNOVATE. This competition is open to all UG / PG students of engineering colleges. The TECHNOVATE is a distinguished platform, where visionaries, innovators, and technological virtuosos will come together to illuminate the forefront of innovation. It is an extravagant showcase of latest marvels and breakthroughs in the realm of technology." />
        <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZUIdzX2bbh16fjfvn1aaHE2K6EtfkanWcQ&s" title="Renewable Energy Technology" description="K. J. Somaiya School of Engineering and the ISTE Students’ Chapter (MH 60) is organizing the 16th edition of national level project competition and paper presentation, PRAKALPA on 4th April 2025. The theme of this year’s Prakalpa is TECHNOVATE. This competition is open to all UG / PG students of engineering colleges. The TECHNOVATE is a distinguished platform, where visionaries, innovators, and technological virtuosos will come together to illuminate the forefront of innovation. It is an extravagant showcase of latest marvels and breakthroughs in the realm of technology." />
      </div>
    </>
  );
}

export default App;