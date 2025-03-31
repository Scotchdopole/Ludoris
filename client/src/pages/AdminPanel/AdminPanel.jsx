import React from 'react'
import { Link } from 'react-router-dom'
import "../../style.css"
import "./AdminPanel.css"


export default function AdminPanel() {
  return (
    <div className='AdminPanel-Body'>
      <div className="AdminPanel-MainContainer">
        <h2>AdminPanel</h2>
        <button><Link to="/admin/create-game" >Create Form</Link></button>
      </div>
    </div>
  )
}
