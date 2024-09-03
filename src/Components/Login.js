import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hospital, setHospital] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
    setError('');
  };

  const validatePassword = (password) => {
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    return hasSpecialChar && hasUpperCase;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = 'https://mediste-server.vercel.app'; // Base URL for the server
  
    if (isSignUp) {
      // Validation logic
      if (!validatePassword(password)) {
        setError('Password must contain at least one special character and one capital letter.');
        return;
      }
  
      try {
        const response = await fetch(`${apiUrl}/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password, hospital, email }),
        });
  
        const data = await response.json();
        if (response.ok) {
          console.log('Sign up successful');
          localStorage.setItem('authToken', data.token); // Store the token
          localStorage.setItem('username', username); // Store the username
          navigate('/Dashboard');
        } else {
          setError(data.error || 'Sign up failed');
        }
      } catch (err) {
        setError('An error occurred during sign-up. Please try again.');
      }
    } 
     else {
      try {
        const response = await fetch(`${apiUrl}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (data.error) {
          setError(data.error);
        } else {
          console.log('Login successful');
          localStorage.setItem('authToken', data.token); // Store the token
          localStorage.setItem('username', username); // Store the username
          navigate('/Dashboard');
        }
      } catch (err) {
        setError('An error occurred during login. Please try again.');
      }
    }
  };

  return (
    <div className='login'>
      <div className={`login-container ${isSignUp ? 'signup-mode' : 'login-mode'}`}>
        <div className="image-container">
          <img src={isSignUp ? "signup-image.jpg" : "login-image.jpg"} alt={isSignUp ? "Signup Image" : "Login Image"} />
        </div>
        <div className="form-container">
          {isSignUp ? (
            <div className="signup-form">
              <h2>Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <br />
                <label>Hospital:</label>
                <input type="text" value={hospital} onChange={(e) => setHospital(e.target.value)} required />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <br />
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <br />
                {error && <p className="error">{error}</p>}
                <button type="submit">Sign Up</button>
                <p>
                  Already have an account? <a onClick={handleToggle}>Login</a>
                </p>
              </form>
            </div>
          ) : (
            <div className="login-form">
              <h2>Login</h2>
              <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <br />
                {error && <p className="error">{error}</p>}
                <button type="submit">Login</button>
                <p>
                  Don't have an account? <a onClick={handleToggle}>Sign Up</a>
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
