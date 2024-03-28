import axios from 'axios';

const API_URL = 'http://localhost:5000/users';

const login = async (username, password) => {
  debugger;
  const { data } = await axios.get(`${API_URL}?username=${username}&password=${password}`);
  if (data.length) {
    localStorage.setItem('user', JSON.stringify(data[0]));
    return data[0];
  }
  return null;
};

const logout = () => {
  localStorage.removeItem('user');
};

const register = async (username, password) => {
  const { data } = await axios.post(API_URL, {
    username,
    password,
    role: 'user' 
  });
  return data;
};

export const authService = {
  login,
  logout,
  register,
};