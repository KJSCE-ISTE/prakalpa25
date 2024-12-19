import React from 'react'
import "../styles/Card.css"
const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.src} alt="Card Image" />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
