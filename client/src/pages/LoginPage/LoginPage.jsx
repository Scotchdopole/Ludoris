import "../../style.css"
import "./LoginPage.css"
import NavBar from '../../components/NavBar/NavBar'
import { Link, useNavigate } from 'react-router-dom'
import React, { useRef, useState } from 'react';
import { auth } from "../../usersAuth";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef(null);
    const navigate = useNavigate();

    const getUserIdFromToken = () => {
        const token = localStorage.getItem('token');
        if (!token) return null;
        
        try {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            return JSON.parse(jsonPayload).id;
        } catch (e) {
            console.error('Error parsing token', e);
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        setIsLoading(true);

        try {
            await auth.login(username, password);
            setIsLoading(false);
            
            const userId = getUserIdFromToken();
            
            if (userId) {
                navigate(`/profile/${userId}`);
            } else {
                navigate('/home');
            }
        } catch (err) {
            setIsLoading(false);
            setError(err.response?.data?.error || 'Login failed. Please try again.');
        }
    };

    const handleButtonClick = () => {
        if (formRef.current) {
            formRef.current.requestSubmit();
        }
    };

    return (
        <div className="LoginPage-Body">
            <NavBar></NavBar>
            <div className="LoginPage-Form-MainContainer">
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit} ref={formRef}>
                    <label>LOGIN</label>
                    <input type="text" value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required placeholder='Username' />
                    <input type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required placeholder='Password' />
                    <span>Don't have an account? <Link to={"/register"}>Register</Link></span>
                </form>
                <button
                    className='LoginPage-SubmitButton'
                    type="button"
                    disabled={isLoading}
                    onClick={handleButtonClick}
                >
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
            </div>
            <div className="blob"></div>
        </div>
    )
}
