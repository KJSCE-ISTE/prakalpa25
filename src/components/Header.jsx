import React, { useState, useRef } from 'react';
import "../styles/Header.css";
import isteLogo from "../assets/global/IsteFinal.svg";
import kjsceLogo from "../assets/global/kjsce_white.svg";

const Header = () => {
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
        <>
            <nav ref={navRef} className={`verticalNavBar ${isNavOpen ? 'open' : ''}`}>
                <h3 className="navBarHome navBarElement">Home</h3>
                <h3 className="navBarEvents navBarElement">Events</h3>
                <h3 className="navBarAbout navBarElement">About</h3>
                <h3 className="navBarContact navBarElement">Contact</h3>
            </nav>
            <header className="header">
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
                <div className="headerLogos">
                    <a href="https://kjsce.somaiya.edu">
                        <img
                            className="kjsceLogo"
                            src={kjsceLogo}
                            alt="KJSCE Logo"
                        />
                    </a>
                    <a href="https://istekjsce.com">
                        <img
                            className="isteLogo"
                            src={isteLogo}
                            alt="ISTE Logo"
                        />
                    </a>
                </div>
            </header>
        </>
    );
};

export default Header;