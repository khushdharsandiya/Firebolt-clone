import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css'; 

const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isRegistering) {
            const existingRegistrations = JSON.parse(localStorage.getItem('registrations')) || [];
            const newRegistration = { username, email, password };
            const updatedRegistrations = [...existingRegistrations, newRegistration];
            localStorage.setItem('registrations', JSON.stringify(updatedRegistrations));
            alert('Registration Successful');
            setIsRegistering(false); 
        } else {
            const existingRegistrations = JSON.parse(localStorage.getItem('registrations')) || [];
            const user = existingRegistrations.find(user => user.username === username && user.password === password);
            if (user) {
                alert('Login Successful');
                navigate('/'); 
            } else {
                alert('Invalid username or password');
            }
        }
        setUsername('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className='d-flex justify-content-center' style={{ height: "100vh", alignItems: "center" }}>
            <div className='login_main_div '>
                <div className="login-container">
                    <h2>{isRegistering ? 'Register' : 'Login'}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Username:</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        {isRegistering && (
                            <div className="form-group">
                                <label>Email:</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        )}

                        <div className="form-group">
                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
                        <p>
                            {isRegistering ? 'Already have an account?' : "Don't have an account?"}
                            <button 
                                type="button" 
                                onClick={() => setIsRegistering(!isRegistering)}
                                style={{ background: 'none',fontSize:"18px",fontWeight:"600", border: 'none', cursor: 'pointer', padding: 0, textDecoration: 'underline' }}
                            >
                                {isRegistering ? 'Login' : 'Register'}
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
