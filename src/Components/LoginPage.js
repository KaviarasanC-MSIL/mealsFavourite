import React, { useState } from 'react';
import './AuthPage.css';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUsers = localStorage.getItem('user');
        if (!storedUsers) {
            setErrors({ email: 'User not found' });
            return;
        }
        
        const users = JSON.parse(storedUsers);
        console.log(users)
        const user = users.find(u => u.email === formData.email);
        console.log(user)
        if (!user) {
            setErrors({ email: 'User not found' });
            return;
        }
        if (user.password !== formData.password) {
            setErrors({ password: 'Incorrect password' });
            return;
        }
        
        user.status = 'active'; 
        localStorage.setItem('user', JSON.stringify(users));
        console.log('Logged in successfully as:', user.username);
        window.location.href = `/?email=${formData.email}`;
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                        />
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
