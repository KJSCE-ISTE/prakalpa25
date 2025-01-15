// components/FloatingNavBar.js
import React, { useState, useEffect } from 'react';
import "../styles/FloatingNavBar.css";

const FloatingNavBar = () => {
    const [showNavBar, setShowNavBar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setShowNavBar(currentScrollY <= lastScrollY);
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div className={`floatingNavBar ${showNavBar ? 'visible' : 'hidden'}`}>
            <a className='navBarElement' href='#home'>Home</a>
            <a className='navBarElement' href='#themes'>Themes</a>
            <a className='navBarElement' href='#prizes'>Prizes</a>
            <a className='navBarElement' href='#sponsors'>Sponsors</a>
            <a className='navBarElement' href='#register'>Register</a>
        </div>
    );
};

export default FloatingNavBar;
