import React, { useState, useEffect } from 'react';
import '../../style.css';
import './UserProfile.css';
import NavBar from '../../components/NavBar/NavBar';
import GameCard from '../../components/GameCard/GameCard';
import { useAuth } from '../../authContext';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function UserProfile() {
    const { isLoggedIn, logout, userId } = useAuth();
    const navigate = useNavigate();
    const { profileId } = useParams();
    const isOwnProfile = isLoggedIn && userId == profileId;
    const isAdmin = userId == "1" && profileId == "1";

    const [completedGames, setCompletedGames] = useState([]);
    const [username, setUsername] = useState('');
    const [error, setError] = useState("");

    const token = localStorage.getItem('token');
    console.log(token)

    useEffect(() => {
        const fetchCompletedGames = async () => {
            setError("");
            try {
                const response = await axios.get(`http://localhost:3000/api/user/${profileId}/games`);
                setCompletedGames(response.data);
            } catch (err) {
                console.error('Error fetching completed games:', err);
                setError(`Failed to load completed games: ${err.message}`);
            }
        };

        if (profileId) {
            fetchCompletedGames();
        }
    }, [profileId]);

    useEffect(() => {
        const getUsername = async () => {
            setError("");
            try {
                const userData = await axios.get(`http://localhost:3000/api/user/${profileId}`);
                setUsername(userData.data.username);
            } catch (err) {
                console.error('Cannot get user data:', err);
                setError(`Failed to load user data: ${err.message}`);
                navigate("/404")
            }
        };
        if (profileId) {
            getUsername();
        }
    }, [profileId]);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const handleDeleteAccount = async () => {
        setError("");
        const enteredPassword = window.prompt("Enter your password");

        if (enteredPassword === null) {
            console.log("Account deletion cancelled");
            return;
        }

        if (enteredPassword === "") {
            console.log("Account deletion cancelled");
            return;
        }


        const confirmDelete = window.confirm("Are you sure you want to delete your account. This action is irreversible!");

        if (confirmDelete) {
            try {

                console.log("userID: " + userId);
                console.log("token: " + token);
                console.log("password: " + enteredPassword);

                await axios.delete(`http://localhost:3000/api/user/delete/${userId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    data: {
                        password: enteredPassword
                    }
                });


                alert("Account deleted succesfully!");
                logout();
                navigate('/');

            } catch (err) {
                console.error('Error deleting account:', err);
                setError("Account deletion failed")
            };
        }
    }
    return (
        <div className='UserProfile-Body'>
            <NavBar />
            <div className="UserProfile-MainContainer">
                {error && <div className="UserProfile-Error" style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
                <div className="UserProfile-UserContainer">
                    <div><span className='UserProfile-Username tracking-in-expand'>{username}</span></div>
                    <div className='UserProfile-UserActionBtns'>
                        {isAdmin && isOwnProfile && (
                            <Link to="/admin">
                                <button className="AdminPanel-Button">Admin Panel</button>
                            </Link>
                        )}
                        {isOwnProfile && (
                            <>
                                <button className="UserProfile-LogoutButton" onClick={handleLogout}>
                                    Logout
                                </button>
                                <button className="UserProfile-DeleteButton" onClick={handleDeleteAccount}>
                                    Delete Account
                                </button>
                            </>
                        )}
                    </div>
                </div>
                <div className="UserProfile-CompletedGames">
                    <h2>Completed Games</h2>
                    <div className="UserProfile-GameCardsContainer" style={{marginBottom: "70px"}}>
                        {completedGames.length > 0 ? (
                            completedGames.map(game => (
                                <Link to={`/game/${game.id}`} key={game.id}>
                                    <GameCard game={game} />
                                </Link>
                            ))
                        ) : (
                            !error && <p>No completed games found.</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="blob"></div>
        </div>
    );
}