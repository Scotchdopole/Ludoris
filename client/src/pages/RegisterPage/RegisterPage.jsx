import "../../style.css"
import "./RegisterPage.css"
import NavBar from '../../components/NavBar/NavBar'
import { Link, Navigate } from 'react-router-dom'
import React, { useRef, useState, useEffect } from 'react';
import { auth } from "../../usersAuth";

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('');
    const formRef = useRef(null);

    // Check password strength whenever password changes
    useEffect(() => {
        if (password) {
            const strength = checkPasswordStrength(password);
            setPasswordStrength(strength);
        } else {
            setPasswordStrength('');
        }
    }, [password]);

    // check password strength
    const checkPasswordStrength = (password) => {
 
        let score = 0;

        // Check length
        if (password.length >= 8) score += 1;
        if (password.length >= 12) score += 1;

        // Check for uppercase letters
        if (/[A-Z]/.test(password)) score += 1;

        // Check for lowercase letters
        if (/[a-z]/.test(password)) score += 1;

        // Check for numbers
        if (/[0-9]/.test(password)) score += 1;

        // Check for special characters
        if (/[^A-Za-z0-9]/.test(password)) score += 1;


        if (score === 0) return 'Very Weak';
        if (score <= 2) return 'Weak';
        if (score <= 4) return 'Medium';
        return 'Strong';
    };


    const getStrengthColor = () => {
        switch (passwordStrength) {
            case 'Very Weak':
                return '#ff0000'; 
            case 'Weak':
                return '#ff6600';
            case 'Medium':
                return '#ffcc00'; 
            case 'Strong':
                return '#00cc00'; 
            default:
                return '#cccccc'; 
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (username.length < 3) {
            setError('Username must be at least 3 characters long');
            return;
        }

 
        if (passwordStrength === 'Very Weak' || passwordStrength === 'Weak') {
            setError('Please choose a stronger password. Include uppercase, lowercase, numbers, and special characters.');
            return;
        }

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
            setPasswordStrength('');

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

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Enter") {
                handleButtonClick();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="RegisterPage-Body">
            <NavBar></NavBar>
            <div className="RegisterPage-Form-MainContainer">
                <div className="RegisterPage-Message-Container">
                    {error ? (
                        <div className="RegisterPage-Error-Message">{error}</div>
                    ) : success ? (
                        <div className="RegisterPage-Success-Message">{success}</div>
                    ) : (
                        <div className="RegisterPage-Message-Placeholder"></div>
                    )}
                </div>

                <form onSubmit={handleSubmit} ref={formRef}>
                    <label>REGISTER</label>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        type="text"
                        placeholder='Username'
                        minLength="3"
                    />
                    <div className="RegisterPage-Password-Input-Container">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder='Password'
                        />
                        {password && (
                            <div className="RegisterPage-Password-Strength">
                                <div className="RegisterPage-Strength-Text" style={{ color: getStrengthColor() }}>
                                    {passwordStrength}
                                </div>
                                <div className="RegisterPage-Strength-Meter">
                                    <div
                                        className="RegisterPage-Strength-Meter-Fill"
                                        style={{
                                            width: passwordStrength === 'Very Weak' ? '25%' :
                                                passwordStrength === 'Weak' ? '50%' :
                                                    passwordStrength === 'Medium' ? '75%' : '100%',
                                            backgroundColor: getStrengthColor()
                                        }}
                                    ></div>
                                </div>
                            </div>
                        )}
                    </div>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        placeholder='Repeat Password'
                    />
                    <span style={{marginTop:"23px"}}>Already have an account? <Link to={"/login"}>Login</Link></span>
                </form>
                <button
                    className='RegisterPage-SubmitButton'
                    type="button"
                    disabled={isLoading}
                    onClick={handleButtonClick}
                >
                    {isLoading ? 'Registering...' : 'Register'}
                </button>
            </div>
            <div className="blob"></div>
        </div>
    );
}
