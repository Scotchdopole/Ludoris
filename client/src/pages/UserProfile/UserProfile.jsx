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
    const [user, setUser] = useState('');
    const [error, setError] = useState("");
    const [userCreatedDate, setUserCreatedDate] = useState();
    const [userLastOnlineDate, setUserLastOnlineDate] = useState();

    const token = localStorage.getItem('token');

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
        const getUser = async () => {
            setError("");
            try {
                const userData = await axios.get(`http://localhost:3000/api/user/${profileId}`);
                setUser(userData.data)
            } catch (err) {
                console.error('Cannot get user data:', err);
                setError(`Failed to load user data: ${err.message}`);
                navigate("/404");
            }
        };
        if (profileId) {
            getUser();
        }
    }, [profileId, navigate]);


  
    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const handleDeleteAccount = async () => {
        setError("");
        const enteredPassword = window.prompt("Enter your password to confirm account deletion:");

        if (!enteredPassword) {
            console.log("Account deletion cancelled by user.");
            return;
        }

        const confirmDelete = window.confirm("Are you absolutely sure you want to delete your account? This action is irreversible!");

        if (confirmDelete) {
            try {

                if (!userId || !token) {
                    setError("Authentication error. Please log in again.");
                    return;
                }


                await axios.delete(`http://localhost:3000/api/user/delete/${userId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    data: {
                        password: enteredPassword
                    }
                });

                alert("Account deleted successfully!");
                logout(); // Clear auth state
                navigate('/'); // Redirect to home

            } catch (err) {
                console.error('Error deleting account:', err.response || err);
                if (err.response && err.response.data && err.response.data.message) {
                    setError(`Account deletion failed: ${err.response.data.message}`);
                } else if (err.response && err.response.status === 401) {
                    setError("Account deletion failed: Incorrect password or unauthorized.");
                }
                else {
                    setError("Account deletion failed. Please try again later.");
                }
            }
        } else {
            console.log("Account deletion cancelled by user confirmation.");
        }
    }

    useEffect(() => {
        if (user?.createdAt) {
            const formattedCreatedDate = new Date(user.createdAt).toLocaleDateString("cs-CZ", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
            });
            setUserCreatedDate(formattedCreatedDate);
        } else {
            setUserCreatedDate(undefined);
        }
    }, [user?.createdAt]);

    useEffect(() => {
        if (user?.lastOnline) {
            const formattedLastOnlineDate = new Date(user.lastOnline).toLocaleDateString("cs-CZ", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
            });
            setUserLastOnlineDate(formattedLastOnlineDate);
        } else {
            setUserLastOnlineDate(undefined);
        }
    }, [user?.lastOnline]);

    return (
        <div className='UserProfile-Body'>
            <NavBar />
            <div className="UserProfile-MainContainer">
                {error && <div className="UserProfile-Error" style={{ color: 'red', marginTop: '10px', marginBottom: '10px', padding: '10px', border: '1px solid red', borderRadius: '4px' }}>{error}</div>}
                <div className="UserProfile-UserContainer">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
                        <div><span className='UserProfile-Username tracking-in-expand'>{user?.username || 'Loading...'}</span></div>
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
                    <div className='UserProfile-UserStats'>
                        <div>
                            <p>{completedGames.length}</p>
                            <span>Games Completed</span>
                        </div>
                        <div>
                            <p>{userCreatedDate || 'N/A'}</p>
                            <span>Account Created</span>
                        </div>
                        <div>
                            <p>{userLastOnlineDate || 'N/A'}</p>
                            <span>Last Online</span>
                        </div>

                    </div>

                </div>
                <div className="UserProfile-CompletedGames">
                    <h2>Completed Games</h2>
                    <div className="UserProfile-GameCardsContainer" style={{ marginBottom: "70px" }}>
                        {completedGames.length > 0 ? (
                            completedGames.map(game => (
                                <Link to={`/game/${game.id}`} key={game.id} style={{ textDecoration: 'none' }}>
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