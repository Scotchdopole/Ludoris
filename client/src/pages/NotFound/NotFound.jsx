import React from 'react'
import "../../style.css"
import "./NotFound.css"
import NotFoundImage from "../../assets/images/404.png"
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="NotFound-Body">
      <img src={NotFoundImage} alt="404 Not Found" className='NotFound-Image'/>
      <h1>404 Not Found</h1>
      <p>Oh no! The page you are looking for wasn't found</p>
      <Link to="/"><button>Go home</button></Link>
    </div>
  )
}
