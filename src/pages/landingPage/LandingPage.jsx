import React from 'react';
import './LandingPage.css';
import globeWebm from "../../assets/landingPage/globe.webm";
import firstFrameFallback from "../../assets/landingPage/firstFrameFallback.png";

const LandingPage = () => {
    return (
        <div className="landingPageContainer">
            <main className="landingPageMain">
                <video className="videoBackground" autoPlay loop muted poster={firstFrameFallback}>
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