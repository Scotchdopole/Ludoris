import React from 'react'
import { useEffect, useState } from 'react';
import { average } from 'color.js'
import "./GameCard.css"


export default function GameCard({ game }) {

  const [isHovered, setIsHovered] = useState(false);
  const [dominantColor, setDominantColor] = useState(null);


  let coverImage = game ? `http://localhost:3000/${game.image}` : "";

  useEffect(() => {
    average(coverImage, { format: "hex", amount: 1 })
      .then(color => {
        setDominantColor(color);

      })
      .catch(err => console.error('Error getting color:', err));
  }, [coverImage, isHovered]);
  document.documentElement.style.setProperty("--gameAccentColor", dominantColor);


  return (
    <div className='GameCard-Body' style={{ ...(isHovered ? { background: `${dominantColor}` } : {}) }}    
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} >     
      <div
        className="GameCard-CoverImage"
        style={{
          backgroundImage: `url(${coverImage})`,
          ...(isHovered ? { boxShadow: `0px 0px 30px 3px ${dominantColor}` } : {})
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      ></div>
      <span style={{ fontSize: "20px", position: "relative", top: "10px" }}>{game.name}</span>

    </div>

  )
}
