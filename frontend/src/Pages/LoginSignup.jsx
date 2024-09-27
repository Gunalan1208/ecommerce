import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Signup</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="Email Address" />
                    <div className="password-field">
                        <input 
                            type={isPasswordVisible ? "text" : "password"} 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <span className="eye-icon" onClick={togglePasswordVisibility}>
                            {isPasswordVisible ? '👁️' : '👁️‍🗨️'}
                        </span>
                    </div>
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">
                    Already have an account? <span>Login Here</span>
                </p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing, I agree to the terms of use & Privacy Policy.</p>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
