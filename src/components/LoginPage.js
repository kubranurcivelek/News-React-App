import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { authService } from '../services/AuthService';
import loginImage from '../images/loginImage.png';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    padding: '20px',
    borderRadius: '5px',
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  },
  label: {
    marginBottom: '5px',
  },
  loginImage: {
    width: '150px', 
    height: '150px', 
    marginBottom: '20px',
  }
  
};

const LoginPage = () => {

 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate(); 


  useEffect(() => {
    const user = localStorage.getItem('user');
    if(user)
      navigate('/news');
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await authService.login(username, password);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/news');
      } else {
        alert('Login failed');
      }
    } catch (error) {
      alert('Login error:', error);
    }
  };


  const handleGoToRegister = () => {
    navigate('/register'); 
  };

  return (
    <div style={styles.container}>

      <img src={loginImage} alt="Login" style={styles.loginImage} />

      <h2>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <div>
          <label style={styles.label}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button}>Login</button>

        <button 
          type="button" 
          style={{ ...styles.button, backgroundColor: '#6c757d', marginTop: '10px' }}
          onClick={handleGoToRegister}
        >
          Sing Up
        </button>

      </form>
    </div>
  );
};

export default LoginPage;