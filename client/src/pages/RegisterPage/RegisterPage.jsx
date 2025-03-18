import React from 'react'
import "../../style.css"
import "./RegisterPage.css"
import NavBar from '../../components/NavBar/NavBar'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
    return (
        <div className="RegisterPage-Body">
            <NavBar></NavBar>
            <div className="RegisterPage-Form-MainContainer">
                <form>
                    <label>REGISTER</label>
                    <input type="text" placeholder='Username' />
                    <input type="text" placeholder='Password' />
                    <input type="text" placeholder='Repeat Password' />
                    <span>Already have an account <Link to={"/login"}>Login</Link></span>
                </form>
                <button className='RegisterPage-SubmitButton'>REGISTER</button>
            </div>
            <div className="blob"></div>
        </div>

    )
}
