import React, { useEffect } from 'react';
import LandingPage from './pages/landingPage/LandingPage';
import ThemePage from './pages/themePage/ThemePage';
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
      <ThemePage />
    </>
  );
}

export default App;