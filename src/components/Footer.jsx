import React from 'react';
import '../styles/Footer.css';
import isteLogo from "../assets/global/IsteFinal.svg";
import kjsceLogo from "../assets/global/kjsce_white.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <a href="https://istekjsce.com"> <img className="isteLogo" src={isteLogo}alt="ISTE Logo"/></a>
      </div>
      
      <div className="container">
        <p>ISTE KJSSE</p>
      </div>

      <div className="link">
        <nav>
          <a href="https://www.istekjsce.com/" className="link">Visit ISTE KJSSE offical Website </a>
       </nav>
      </div>
      
    </footer>
  );
};

export default Footer;