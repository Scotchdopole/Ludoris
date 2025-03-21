import axios from 'axios';

const API_URL = 'http://localhost:3000/api';


const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});


api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth services
export const auth = {
  register: (username, password) => {
    return api.post('/user/register', { username, password });
  },
  login: (username, password) => {
    return api.post('/user/login', { username, password })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
        }
        return response.data;
      });
  },
  logout: () => {
    localStorage.removeItem('token');
  }
};

// User services
export const userService = {
  updateUser: (userData) => {
    const userId = getUserIdFromToken();
    return api.put(`/user/update/${userId}`, userData);
  },
  getUserGames: (userId) => {
    return api.get(`/user/${userId}/games`);
  },
  getUserById: (userId) => {
    return api.get(`/user/${userId}`);
  }
};

// Game services
export const gameService = {
  addGameToUser: (gameId, status) => {
    const userId = getUserIdFromToken();
    return api.post(`/user/add-game/${userId}`, { gameId, status });
  }
};

// extract user ID from JWT token
const getUserIdFromToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;
  
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload).id;
  } catch (e) {
    console.error('Error parsing token', e);
    return null;
  }
};


export default api;
