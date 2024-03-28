import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/AuthService'; 
import registerImage from '../images/registerImage.png';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7', 
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    padding: '20px',
    borderRadius: '5px',
    backgroundColor: '#ffffff', 
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
    marginTop: '10px', 
  },
  label: {
    marginBottom: '5px',
    fontSize: '14px',
    color: '#333', 
  },
  registerImage: {
    width: '120px',
    height: '120px', 
    marginBottom: '20px',
  }
};

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await authService.register(username, password);
      navigate('/login'); 
    } catch (error) {
      alert('Registration error: ' + error);
    }
  };

  return (
    <div style={styles.container}>

      <img src={registerImage} alt="Register" style={styles.registerImage} />

      <h2>Sign Up</h2>
      <form onSubmit={handleRegister} style={styles.form}>
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
        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
    </div>
  );
};

export default RegisterPage;