import React, { useState, useEffect } from 'react';
import "../styles/FloatingNavBar.css";

const FloatingNavBar = () => {
    const [showNavBar, setShowNavBar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            setShowNavBar(false);
        } else {
            setShowNavBar(true);
        }
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div className={`floatingNavBar ${showNavBar ? 'visible' : 'hidden'}`}>
            <a className='navBarElement' href='#'>Home</a>
            <a className='navBarElement' href='#'>Themes</a>
            <a className='navBarElement' href='#'>Prizes</a>
            <a className='navBarElement' href='#'>Sponsors</a>
            <a className='navBarElement' href='#'>Register</a>
        </div>
    );
};

export default FloatingNavBar;
