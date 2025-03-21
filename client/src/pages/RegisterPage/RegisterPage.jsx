import "../../style.css"
import "./RegisterPage.css"
import NavBar from '../../components/NavBar/NavBar'
import { Link } from 'react-router-dom'
import React, { useRef, useState } from 'react';
import { auth } from "../../usersAuth";

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // passwords matching
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setIsLoading(true);

        try {
            await auth.register(username, password);
            setIsLoading(false);
            setSuccess('Registration successful! You can now login.');

            // Clear form
            setUsername('');
            setPassword('');
            setConfirmPassword('');

        } catch (err) {
            setIsLoading(false);
            setError(err.response?.data?.error || 'Registration failed. Please try again.');
        }
    };

    const handleButtonClick = () => {
        if (formRef.current) {
            formRef.current.requestSubmit();
        }
    };

    return (
        <div className="RegisterPage-Body">
            <NavBar></NavBar>
            <div className="RegisterPage-Form-MainContainer">
                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}
                
                <form onSubmit={handleSubmit} ref={formRef}>
                    <label>REGISTER</label>
                    <input 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required 
                        type="text" 
                        placeholder='Username' 
                    />
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                        placeholder='Password' 
                    />
                    <input 
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required 
                        placeholder='Repeat Password' 
                    />
                    <span>Already have an account <Link to={"/login"}>Login</Link></span>
                </form>
                <button 
                    className='RegisterPage-SubmitButton' 
                    type="button" 
                    disabled={isLoading}
                    onClick={handleButtonClick} 
                >
                    {isLoading ? 'Registering...'  : 'Register'}
                </button>
            </div>
            <div className="blob"></div>
        </div>
    );
}
