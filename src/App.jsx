import React, { useEffect } from 'react';
import LandingPage from './pages/landingPage/LandingPage';
import ThemePage from './pages/themePage/ThemePage';
import Header from './components/Header';
import ProjectsSection from './pages/projectPage/ProjectsSection';
import PrizesBg from './pages/prizeBg/PrizesBg';

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
      <ThemePage />
      <ProjectsSection />
      <PrizesBg />
    </>
  );
}

export default App;