import React from 'react'

export default function GameCard({game}) {
  return (
    <>
        <main>
            <p>name: {game.name}</p>
            <p>price: {game.price}</p>
        </main>
    </>
  )
}
