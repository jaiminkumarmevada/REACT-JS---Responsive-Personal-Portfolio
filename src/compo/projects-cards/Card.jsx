import React from 'react';
import './card.css';
import backgroundImage from './project-images/weatherproimage.png'; 

function Card() {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px', 
        width: '300px'}}
    >
      card
    </div>
  )
}

export default Card;

