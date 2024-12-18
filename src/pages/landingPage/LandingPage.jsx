import React, { useEffect, useState, useRef } from 'react';
import './LandingPage.css';
// import globeVideo from "../../assets/globe.mp4";
import globeWebm from "../../assets/globe.webm";

const LandingPage = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navRef = useRef(null);
    const menuIconRef = useRef(null);

    const toggleNav = () => {
        setIsNavOpen((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        if (isNavOpen &&
            navRef.current &&
            !navRef.current.contains(event.target) &&
            !menuIconRef.current.contains(event.target)) {
            setIsNavOpen(false);
        }
    };

    return (
        <div className="landingPageContainer" onClick={handleClickOutside}>
            <header className="landingPageHeader">
                <svg
                    ref={menuIconRef}
                    onClick={toggleNav}
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="menuIcon"
                >
                    <path
                        d="M31.6665 11.6666L8.33325 11.6667M19.9999 19.9999H8.33325M26.6666 28.3333L8.33325 28.3333"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <nav className="horizontalNavBar">
                    <h3 className="navBarHome navBarElement">Home</h3>
                    <h3 className="navBarEvents navBarElement">Events</h3>
                    <h3 className="navBarAbout navBarElement">About</h3>
                    <h3 className="navBarContact navBarElement">Contact</h3>
                </nav>
                <div className="headerLogos">
                    <a href="https://kjsce.somaiya.edu">
                        <img
                            className="kjsceLogo"
                            src="https://github.com/user-attachments/assets/934d6f07-24e6-4eb0-982e-fb66992ef9ec"
                            alt="KJSCE Logo"
                        />
                    </a>
                    <a href="https://istekjsce.com">
                        <img
                            className="isteLogo"
                            src="https://github.com/user-attachments/assets/b382cc5a-4a04-47a1-b3e9-0b7e6bbfcdcc"
                            alt="ISTE Logo"
                        />
                    </a>
                </div>
            </header>
            <nav ref={navRef} className={`verticalNavBar ${isNavOpen ? 'open' : ''}`}>
                <h3 className="navBarHome navBarElement">Home</h3>
                <h3 className="navBarEvents navBarElement">Events</h3>
                <h3 className="navBarAbout navBarElement">About</h3>
                <h3 className="navBarContact navBarElement">Contact</h3>
            </nav>
            <main className="landingPageMain">
                <video className="videoBackground" autoPlay loop muted>
                    {/* <source src={globeVideo} type="video/mp4" /> */}
                    <source src={globeWebm} type="video/webm" />
                </video>
                <h2 className="abovePrakalpaTitle">ISTE KJSCE presents</h2>
                <h1 className="prakalpaTitle glow-effect">PRAKALPA 25</h1>
                <h3 className="prakalpaSubtitle">From Blueprint to Breakthrough</h3>
            </main>
        </div>
    );
};

export default LandingPage;