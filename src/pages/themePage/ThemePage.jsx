import React from 'react';
import './ThemePage.css';
import Card from '../../components/Card';
import videoBg from '../../assets/themePage/videoBg.mp4';
import bgImage from '../../assets/themePage/bgImage.jpeg';

const ThemePage = () => {
  return (
    <>
      <div className="video-container">
        <video autoPlay muted loop className="bg-video">
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="layout">
          <h1 className='themes'>Themes for the Event</h1>
          <div className="card-container">
            <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkPqMo2Vv7AvThKBEEYKScumbcu5ZngfsDGg&s" title="GenAI / ML / AI" description="Explore the latest advancements in AI and machine learning at TECHNOVATE 2025." />
            <Card src="https://www.chetu.com/img/blogs/game-development-trends/game-development-trends-banner.jpg" title="Game Development" description="Dive into the world of game development and innovation at TECHNOVATE 2025." />
            <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkjLoCZ2S88YH5K_hfWnOWlLDMKkIN6WQxNA&s" title="Blockchain & Cryptocurrency" description="Discover the future of blockchain and cryptocurrency at TECHNOVATE 2025." />
            <Card src="https://cdn1.expresscomputer.in/wp-content/uploads/2023/01/04170521/EC_Data_Security_Lock_750.jpg" title="Cybersecurity and Data Privacy" description="Learn about the latest in cybersecurity and data privacy at TECHNOVATE 2025." />
            <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQtsO1nCyQHfLt9mhNKztcEnx6G7o96ScEQ&s" title="Cloud Computing" description="Explore cloud computing innovations at TECHNOVATE 2025." />
            <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWxGByTYnZl3zuIGFcKc2cUjYm4fD7swGTtQ&s" title="Autonomous Vehicles" description="Discover the future of autonomous vehicles at TECHNOVATE 2025." />
            <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLf7rXFs_T_h9_cGY-JXmhNWmv57aiYe17rQ&s" title="Wearable Technology" description="Explore the latest in wearable technology at TECHNOVATE 2025." />
            <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLRrCCRpCaL2Zi9mE52KZK6j6vRyE-D4-5DA&s" title="Robotics And Automation" description="Learn about robotics and automation advancements at TECHNOVATE 2025." />
            <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYpKxBr1s0aGDE2J5M-ROgPy0CZCePG9C8Q&s" title="Internet of Things (IoT)" description="Discover IoT innovations at TECHNOVATE 2025." />
            <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZUIdzX2bbh16fjfvn1aaHE2K6EtfkanWcQ&s" title="Renewable Energy Technology" description="Explore renewable energy technologies at TECHNOVATE 2025." />
          </div>
        </div>
      </div>
    </>
  );
}

export default ThemePage;
