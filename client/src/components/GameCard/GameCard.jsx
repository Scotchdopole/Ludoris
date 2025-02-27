import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react';
import { average } from 'color.js'
import "./GameCard.css"


export default function GameCard({ game }) {

  const [gamePrice, setGamePrice] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [dominantColor, setDominantColor] = useState(null);

  useEffect(() => {
    if (game.price == 0) {
      setGamePrice("Free");
    } else {
      setGamePrice("€" + game.price);
    }
  }, []);

  let coverImage = game ? `http://localhost:3000/${game.image}` : "";

  useEffect(() => {
    average(coverImage, { format: "hex", amount: 1, sample: 30 })
      .then(color => {
        console.log(color);
        setDominantColor(color);
      })
      .catch(err => console.error('Error getting color:', err));
  }, [coverImage]);

  return (
      <div className='GameCard-Body'>
        <div
          className="GameCard-CoverImage"
          style={{
            backgroundImage: `url(${coverImage})`,
            ...(isHovered ? { boxShadow: `0px 0px 70px 3px ${dominantColor}` } : {})
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        ></div>
        <p>{game.name}</p>
        <p>{gamePrice}</p>
      </div>
    
  )
}
