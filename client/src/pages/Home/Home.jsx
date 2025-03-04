import React from 'react'
import "../../style.css"
import "./Home.css"
import NavBar from '../../components/NavBar/NavBar'



export default function Home() {
  return (
    <div className='Home-body'>
    
    <NavBar></NavBar>

    <div className="Home-Hero text-pop-up-tr">
      <span className="Home-HeroText">
        LUDORIS
      </span>


      <span className="Home-HeroSubText " >
        Every game. Every detail. Instantly.
      </span>
    </div>
    
    </div>
  )
}
