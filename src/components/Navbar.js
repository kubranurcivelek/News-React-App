import React from 'react';
import { Link,useNavigate  } from 'react-router-dom';
import homeIcon from '../images/homeIcon.png'; 

const Navbar = ({ onLogout }) => {
  const style = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      minHeight: '4rem',
      backgroundColor: '#333',
      color: '#fff',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      padding: '1rem',
      transition: 'color 0.3s',
    },
    linkHover: {
      color: '#aaa',
    },
    icon: {
      marginRight: '8px',
      width: '24px', 
      height: '24px',
      alignItems: 'center' 
    },
  };
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));
  const logout = () => {
    onLogout();  
    navigate('/login'); 
  };
  return (
    <nav style={style.navbar}>
      <Link to="/news" style={style.link}>
        <img src={homeIcon} alt="Home" style={style.icon} /> Home
      </Link>
      {user 
      && user.role === 'admin' 
      && (<Link to="/create-news" style={style.link}>Create News</Link>)
      }

    {user && (<span style={style.link} onClick={logout} role="button" tabIndex="0">
        Logout
      </span>)
    }
    </nav>
  );
};

export default Navbar;