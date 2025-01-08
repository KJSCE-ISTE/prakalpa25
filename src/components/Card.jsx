import React from 'react';
import '../styles/Card.css';

function Card({ src, title, description }) {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={src} alt={title} />
          <h2 className="title">{title}</h2>
        </div>
        <div className="card-back">
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
