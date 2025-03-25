import React from 'react'
import "../../style.css"
import "./Home.css"
import NavBar from '../../components/NavBar/NavBar'
import { useAuth } from '../../authContext';


export default function Home() {

  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    console.log('You are logged in');
  } else {
    console.log('You are not logged in');
  }
  
  return (
    <>
   
    <div className='Home-body'>
    <NavBar></NavBar>
    

    <div className="Home-Hero">
      <span className="Home-HeroText text-pop-up-top">
        LUDORIS
      </span>
      <span className="Home-HeroSubText" >
        Every game. Every detail. Instantly.
      </span>
      </div>
    
    </div>
    </>
  )
}
