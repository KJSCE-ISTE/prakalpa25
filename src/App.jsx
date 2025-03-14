import React, { useEffect } from 'react';
import LandingPage from './pages/landingPage/LandingPage';
import ThemePage from './pages/themePage/ThemePage';
// import Header from './components/Header';
import ProjectsSection from './pages/projectPage/ProjectsSection';
import Footer from './components/Footer';
import ParticleBg from './components/Particles';
import FloatingNavBar from './components/FloatingNavBar';
import { useNavigate } from 'react-router-dom';
import Register from './components/Register';
import Timeline from './components/Timeline';

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

  function navToForm(){
    const nav = useNavigate();
    nav("/https://docs.google.com/forms/d/e/1FAIpQLScSlgu3YroZbGOMRzWjPBNcuslHPdkq5Hy4YcuTQ3IDcWupHA/viewform")
  }

  return (
    <>
      <ParticleBg />
      <FloatingNavBar />
      <LandingPage />
      <ThemePage />
      <ProjectsSection />
      <Timeline />
      <Register />
      <Footer />
    </>
  );
}

export default App;