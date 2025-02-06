import React from 'react'

export default function GameCard({game}) {

  return (
    <>
        <main>
        <img src={`http://localhost:3000/${game.image.replace(/\\/g, "/")}`} alt="cover" />
            <p>name: {game.name}</p>
            <p>price: {game.price}</p>
        </main>
    </>
  )
}
