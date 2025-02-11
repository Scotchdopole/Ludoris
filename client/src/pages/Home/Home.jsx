import React from 'react'
import "../../style.css"
import "./Home.css"
import NavBar from '../../components/NavBar/NavBar'



export default function Home() {
  return (
    <>
    
    <NavBar></NavBar>

    <div className="Home-Hero">
      <span className="Home-HeroText">
        LUDORIS
      </span> 
      <span className="Home-HeroSubText">
        Every game. Every detail. Instantly.
      </span>
    </div>
    
    </>
  )
}
