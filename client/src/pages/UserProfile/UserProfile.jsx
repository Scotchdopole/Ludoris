import React from 'react'
import "../../style.css"
import "./UserProfile.css"
import NavBar from '../../components/NavBar/NavBar';
import { useAuth } from '../../authContext';
import { useNavigate, useParams, Link } from 'react-router-dom';


export default function UserProfile() {

    const { isLoggedIn, logout, userId } = useAuth();
    const navigate = useNavigate();
    const {profileId} = useParams();
    const isAdmin = userId == "1" && profileId == "1";

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    console.log(userId);
    console.log(isAdmin)

    return (

        <div className='UserProfile-Body'>
            <NavBar></NavBar>
            {isAdmin && (
                <Link to="/admin">
                    <button className="AdminPanel-Button">Admin Panel</button>
                </Link>
            )}
            <button className="logout-button" onClick={handleLogout}>
                Logout
            </button>
            <div className="UserProfile-MainContainer">
                <span className='UserProfile-Username tracking-in-expand'>username</span>
            </div>
            <div className="blob"></div>
        </div>
    )
}
