import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CreateNewsPage from './components/CreateNewsPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import NewsPage from './components/NewsPage';
import PrivateRoute from './utils/PrivateRoute';
import { useState, useEffect } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const NewsPagee = () => {
    useEffect(() => {
      // Code here will run when the NewsPage is mounted
      const user = localStorage.getItem('user');
      setIsAuthenticated(!!user);
    }, []);
    // Return JSX for NewsPage...
  }; 
  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };
  return (
    <Router basename="/">
      {isAuthenticated && NewsPagee && <Navbar onLogout={handleLogout} />}
      <Routes>
        <Route 
          path="/news" 
          element={
            <PrivateRoute>
              <NewsPagee></NewsPagee>
              <NewsPage />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/" 
          exact
          element={
            <PrivateRoute>
              <LoginPage />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/create-news" 
          element={
            <PrivateRoute>
              <CreateNewsPage />
            </PrivateRoute>
          } 
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;