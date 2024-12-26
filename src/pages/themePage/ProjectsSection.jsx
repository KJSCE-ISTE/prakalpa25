import React, { useEffect } from "react";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas-bg");
    const ctx = canvas.getContext("2d");
    const particles = [];
    const numParticles = 100;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = (Math.random() - 0.5) * 2;
        this.dy = (Math.random() - 0.5) * 2;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }

      update() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
      }
    }

    for (let i = 0; i < numParticles; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 3 + 1;
      const color = "rgba(255, 255, 255, 0.7)";
      particles.push(new Particle(x, y, radius, color));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => particle.update());
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="projects-section">
      <canvas id="canvas-bg"></canvas>
      <div className="projects-content">
        <h2 className="section-title">Our Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Working Model</h3>
            <p>Explore innovative physical prototypes showcasing cutting-edge solutions.</p>
          </div>
          <div className="project-card">
            <h3>Paper Presentation</h3>
            <p>Showcase your research and ideas with well-crafted technical papers.</p>
          </div>
          <div className="project-card">
            <h3>Software Competition</h3>
            <p>Compete to develop software solutions to real-world challenges.</p>
          </div>
        </div>
        <div className="prizes-section">
          <h2 className="section-title">Prizes</h2>
          <p>Prizes will be given under the following 3 categories:</p>
          <div className="prizes-grid">
            <div className="prize-card">
              <h3>Hardware Project</h3>
              <p>1<sup>st</sup> Prize: Rs. 10,000/-</p>
              <p>2<sup>nd</sup> Prize: Rs. 5,000/-</p>
            </div>
            <div className="prize-card">
              <h3>Software Project</h3>
              <p>1<sup>st</sup> Prize: Rs. 8,000/-</p>
              <p>2<sup>nd</sup> Prize: Rs. 4,000/-</p>
            </div>
            <div className="prize-card">
              <h3>Paper Presentation</h3>
              <p>1<sup>st</sup> Prize: Rs. 7,000/-</p>
              <p>2<sup>nd</sup> Prize: Rs. 3,500/-</p>
            </div>
          </div>
          <p>• Participation certificate for all participants</p>
          <p>• Consolation prizes may be awarded based on recommendations from judges. Decision of judges will be binding on participants.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
