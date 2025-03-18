import React from 'react'
import "../../style.css"
import "./LoginPage.css"
import NavBar from '../../components/NavBar/NavBar'
import { Link } from 'react-router-dom'

export default function LoginPage() {
    return (
        <div className="LoginPage-Body">
            <NavBar></NavBar>
            <div className="LoginPage-Form-MainContainer">
                <form>
                    <label>LOGIN</label>
                    <input type="text" placeholder='Username' />
                    <input type="text" placeholder='Password' />
                    <span>Don’t have an account? <Link to={"/register"}>Register</Link></span>
                </form>
                <button className='LoginPage-SubmitButton'>LOGIN</button>
            </div>
            <div className="blob"></div>

        </div>

    )
}
