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
            <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkPqMo2Vv7AvThKBEEYKScumbcu5ZngfsDGg&s" title="GenAI / ML / AI" description="Generative AI creates new content, such as text, images, music, or videos, using advanced machine learning models trained on vast datasets. It powers applications like chatbots, image generators, and virtual assistants." />
            <Card src="https://www.chetu.com/img/blogs/game-development-trends/game-development-trends-banner.jpg" title="Game Development" description="Game development is the process of designing, creating, and programming interactive video games, blending art, storytelling, and technology. It involves creating game mechanics, environments, and characters to deliver immersive player experiences." />
            <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkjLoCZ2S88YH5K_hfWnOWlLDMKkIN6WQxNA&s" title="Blockchain & Cryptocurrency" description="Cryptocurrency is a digital or virtual currency that uses cryptographic techniques to secure transactions and control the creation of new units. It operates on decentralized blockchain networks, offering transparency and eliminating intermediaries." />
            <Card src="https://cdn1.expresscomputer.in/wp-content/uploads/2023/01/04170521/EC_Data_Security_Lock_750.jpg" title="Cybersecurity and Data Privacy" description="Cybersecurity is the practice of protecting computer systems, networks, and data from cyberattacks, unauthorized access, and theft. It encompasses tools, strategies, and protocols to ensure digital safety and privacy." />
            <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQtsO1nCyQHfLt9mhNKztcEnx6G7o96ScEQ&s" title="Cloud Computing" description="Cloud computing delivers on-demand computing resources, such as storage, servers, and software, over the internet. It enables scalability, flexibility, and cost effectiveness for businesses and individuals." />
            <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWxGByTYnZl3zuIGFcKc2cUjYm4fD7swGTtQ&s" title="Autonomous Vehicles" description="Autonomous vehicles are self-driving vehicles equipped with sensors, AI, and control systems to navigate and operate without human intervention. They aim to enhance safety, efficiency, and convenience in transportation." />
            <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLf7rXFs_T_h9_cGY-JXmhNWmv57aiYe17rQ&s" title="Wearable Technology" description="Wearable technology includes devices like smartwatches, fitness trackers, and AR glasses that are worn on the body to monitor health, fitness, or provide digital interaction. These devices often integrate with mobile apps for seamless user experience." />
            <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLRrCCRpCaL2Zi9mE52KZK6j6vRyE-D4-5DA&s" title="Robotics And Automation" description="Robotics involves designing, building, and programming robots to perform tasks autonomously or with human guidance. It combines mechanical engineering, electronics, and AI to create machines for various industries like manufacturing, healthcare, and space exploration." />
            <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYpKxBr1s0aGDE2J5M-ROgPy0CZCePG9C8Q&s" title="Internet of Things (IoT)" description="IoT connects physical devices, vehicles, appliances, and other objects to the internet, enabling them to collect and share data. This interconnectivity allows for automation, remote monitoring, and smarter decision-making." />
            <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZUIdzX2bbh16fjfvn1aaHE2K6EtfkanWcQ&s" title="Renewable Energy Technology" description="Renewable energy technology harnesses natural resources like sunlight, wind, and water to generate sustainable and clean energy. It aims to reduce reliance on fossil fuels and mitigate climate change." />
          </div>
        </div>
      </div>
    </>
  );
}

export default ThemePage;
