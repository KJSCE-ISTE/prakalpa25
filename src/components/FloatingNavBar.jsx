import React, { useState, useEffect } from 'react';
import "../styles/FloatingNavBar.css";
import kjsceLogo from "../assets/global/kjsce_white.svg";
import isteLogo from "../assets/global/IsteFinal.svg";

const FloatingNavBar = () => {



    const [showNavBar, setShowNavBar] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [hasScrolledYet, setHasScrolledYet] = useState(false);
    const [logosBarGone, setLogosBarGone] = useState(false);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            setShowNavBar(false);
        } else {
            if (logosBarGone) {
                setShowNavBar(true);
            }
        }

        setLastScrollY(currentScrollY);

        if (!hasScrolledYet && currentScrollY > 0) {
            setLogosBarGone(true);
            setHasScrolledYet(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, hasScrolledYet]);

    return (
        <>
            <div className={`logosNavBar ${logosBarGone ? 'hidden' : ''}`}>
                <img src={kjsceLogo} className="logoImage" alt="KJSCE Logo" />
                <img src={isteLogo} className="logoImage" alt="ISTE Logo" />
            </div>
            {logosBarGone && (
                <div className={`floatingNavBar ${showNavBar ? 'visible' : 'hidden'}`}>
                    <a className="navBarElement" href="#home">Home</a>
                    <a className="navBarElement" href="#themes">Themes</a>
                    <a className="navBarElement" href="#prizes">Prizes</a>
                    <a className="navBarElement" href="https://drive.google.com/file/d/1SFMaJAcHztGJQ9VNXiIYZm3MYn7UlWiw/view?usp=drive_link" target="_blank" rel="noreferrer">Brochure</a>
                    <a className="navBarElement" href="#register">Register</a>
                </div>
            )}
        </>
    );
};

export default FloatingNavBar;

