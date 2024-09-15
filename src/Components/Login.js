import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hospital, setHospital] = useState('');
  const [region, setRegion] = useState('');
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
    const apiUrl = 'http://localhost:3001'; // Base URL for the server
  
    if (isSignUp) {
      // Create signup data object
      const signupData = { username, password, hospital, region, email };

      // Log the signup data
      console.log('Signup Data being sent to the server:', signupData);

      // Validation logic
      if (!validatePassword(password)) {
        setError('Password must contain at least one special character and one capital letter.');
        return;
      }
  
      try {
        const response = await fetch(`${apiUrl}/api/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(signupData),
        });
  
        const data = await response.json();
        if (response.ok) {
          console.log('Sign up successful');
          localStorage.setItem('authToken', data.token); // Store the token
          localStorage.setItem('username', username); // Store the username
          localStorage.setItem('hospital', hospital);
          localStorage.setItem('region', region);  
          navigate('/Dashboard');
        } else {
          setError(data.error || 'Sign up failed');
        }
      } catch (err) {
        setError('An error occurred during sign-up. Please try again.');
      }
    } 
    else {
      // Create login data object
      const loginData = { username, password, hospital, region };

      // Log the login data
      console.log('Login Data being sent to the server:', loginData);

      try {
        const response = await fetch(`${apiUrl}/api/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        });

        const data = await response.json();
        if (data.error) {
          setError(data.error);
        } else {
          console.log('Login successful');
          localStorage.setItem('authToken', data.token); // Store the token
          localStorage.setItem('username', username); // Store the username
          localStorage.setItem('hospital', hospital);
          localStorage.setItem('region', region);  
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
          <img className='imagek' src="try.png" alt={isSignUp ? "Signup Image" : "Login Image"} />
        </div>
        <div className="form-container" id="login">
          {isSignUp ? (
            <div className="signup-form">
              <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" value={username} className='labal' onChange={(e) => setUsername(e.target.value)} required />
                <br />
                <label>Hospital:</label>
                <input type="text" value={hospital} className='labal' onChange={(e) => setHospital(e.target.value)} required />
                <br />
                <label>Region:</label>
                <input type="text" value={region} className='labal' onChange={(e) => setRegion(e.target.value)} required />
                <br />
                <label>Password:</label>
                <input type="password" className='labal' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <br />
                <label>Email:</label>
                <input type="email" className='labal' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <br />
                {error && <p className="error">{error}</p>}
                <div style={{paddingTop:5}}>
                  <button type="submit" className='buttons'>Sign Up</button>
                </div>
                <p>
                  Already have an account? <a onClick={handleToggle} style={{cursor:'pointer'}}>Login</a>
                </p>
              </form>
            </div>
          ) : (
            <div className="login-form">
              <h2>Login</h2>
              <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" value={username} className='labal' onChange={(e) => setUsername(e.target.value)} required />
                <br />
                <label>Hospital:</label>
                <input type="text" value={hospital} className='labal' onChange={(e) => setHospital(e.target.value)} required />
                <br />
                <label>Region:</label>
                <input type="text" value={region} className='labal' onChange={(e) => setRegion(e.target.value)} required />
                <br />
                <label>Password:</label>
                <input type="password" value={password} className='labal' onChange={(e) => setPassword(e.target.value)} required />
                <br />
                {error && <p className="error">{error}</p>}
                <div style={{paddingTop:5}}>
                  <button type="submit" className='buttons'>Login</button>
                </div>
                <p>
                  Don't have an account? <a onClick={handleToggle} style={{cursor:'pointer'}}>Sign Up</a>
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
