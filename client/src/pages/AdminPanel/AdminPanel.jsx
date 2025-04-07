import React from 'react'
import { Link } from 'react-router-dom'
import "../../style.css"
import "./AdminPanel.css"


export default function AdminPanel() {
  return (
    <div className='AdminPanel-Body'>
      <div className="AdminPanel-MainContainer">
        <h2>AdminPanel</h2>
        <Link to="/admin/create-game"><button>Create Form</button></Link>
        <Link to="/admin/update-game" ><button>Update Form</button></Link>
        <Link to={"/"}><button style={{backgroundColor: '#dc3545'}}>Exit</button></Link>
      </div>
    </div>
  )
}
