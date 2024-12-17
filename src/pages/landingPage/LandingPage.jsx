import React from 'react';
import './LandingPage.css';
import globeVideo from "../../assets/globe.mp4";

const LandingPage = () => {
    return (
        <div className="landingPageContainer">
            <video className="videoBackground" autoPlay loop muted>
                <source src={globeVideo} type="video/mp4" />
            </video>
            <header className="landingPageHeader">
                <nav className="navBar">
                    <h3 className="navBarHome navBarElement">Home</h3>
                    <h3 className="navBarEvents navBarElement">Events</h3>
                    <h3 className="navBarAbout navBarElement">About</h3>
                    <h3 className="navBarContact navBarElement">Contact</h3>
                </nav>
                <div className='headerLogos'>
                    <a href='https://kjsce.somaiya.edu'><img className="kjsceLogo" src="https://github.com/user-attachments/assets/934d6f07-24e6-4eb0-982e-fb66992ef9ec" alt="KJSCE Logo" /></a>
                    <a href='https://istekjsce.com'> <img className="isteLogo" src="https://github.com/user-attachments/assets/1c7a4ac6-3f74-4577-b720-4344e673749c" alt="ISTE Logo" /></a>
                </div>
            </header>
            <main className="landingPageMain">
                <h2 className="abovePrakalpaTitle">ISTE KJSCE presents</h2>
                <h1 className="prakalpaTitle glow-effect">PRAKALPA 25</h1>
                <h3 className="prakalpaSubtitle ">From Blueprint to Breakthrough</h3>
            </main>
        </div>
    );
}

export default LandingPage;