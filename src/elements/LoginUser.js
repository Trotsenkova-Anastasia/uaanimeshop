import React, { useState,useEffect  } from "react";
import './elements.css'
import { Link } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleLogin = async () => {
        try {
            const response = await  fetch("http://127.0.0.1:8000/api/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Login successful:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <label>Email:</label>
            <input type="email" name="email" value={credentials.email} onChange={handleInputChange} />

            <label>Password:</label>
            <input type="password" name="password" value={credentials.password} onChange={handleInputChange} />

            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;