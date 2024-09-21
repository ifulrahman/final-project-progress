import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import australia from '../assets/australia.jpg';
import tdLogo from '../assets/td-logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token') || ''); 
  const [message, setMessage] = useState('');
  const [toastType, setToastType] = useState('');

  const API_KEY = '24405e01-fbc1-45a5-9f5a-be13afcd757c'; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/login',
        {
          email,
          password,
        },
        {
          headers: {
            'apiKey': API_KEY,
          },
        }
      );
      
      const receivedToken = response.data.token;
      setToken(receivedToken);
      setMessage('Login successful!');
      setToastType('success');
      localStorage.setItem('token', receivedToken);
      console.log('Login successful, token:', receivedToken);

    } catch (error) {
      setMessage('Login failed. Please check your email or password!');
      setToastType('error'); 
      console.error('Error logging in:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="flex h-screen font-league-spartan">
      {message && (
        <div
          className={`fixed top-4 right-4 flex items-center space-x-2 px-4 py-2 rounded-md shadow-lg
            ${toastType === 'success' ? 'bg-green-100 border-l-4 border-green-500 text-green-700' : ''}
            ${toastType === 'error' ? 'bg-red-100 border-l-4 border-red-500 text-red-700' : ''}
          `}
        >
          {toastType === 'success' && <span className="text-green-600">✔️</span>}
          {toastType === 'error' && <span className="text-red-600">❌</span>}
          <p>{message}</p>
          <button onClick={() => setMessage('')} className="ml-4 font-bold">X</button>
        </div>
      )}

      <div className="w-1/2 bg-cover bg-center hidden md:flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url(${australia})` }}>
        <div className="text-center mt-[-200px]">
          <h1 className="text-6xl font-bold">TRAVEL DAY</h1>
          <p className="text-lg mt-10 m-36">From hidden gems to world-famous landmarks, we provide personalized travel plans and expert guidance, ensuring every journey is as enriching as it is memorable. Let Travel Day guide you to your next great adventure.</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-12">
        <div className="flex justify-center relative mb-6">
          <div className="absolute top-[-110px] left-0"> 
            <img src={tdLogo} alt="Travel Day Logo" className="w-24 h-12" />
          </div>
          <h1 className="text-6xl font-bold text-mainBlue">Welcome</h1>
        </div>
        <h2 className="text-lg text-center mb-6 text-gray-500">Login with Email</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative flex items-center w-full md:w-[65%] mx-auto">
            <span className="absolute left-4 text-gray-400">
              <i className="fas fa-envelope"></i>
            </span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-3 pl-12 rounded w-full focus:outline-none focus:ring-2 focus:ring-mainBlue"
            />
          </div>

          <div className="relative flex items-center w-full md:w-[65%] mx-auto">
            <span className="absolute left-4 text-gray-400">
              <i className="fas fa-lock"></i>
            </span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-3 pl-12 rounded w-full focus:outline-none focus:ring-2 focus:ring-mainBlue"
            />
          </div>

          <button
            type="submit"
            className="bg-mainBlue text-white py-3 px-6 rounded w-[30%] mx-auto block font-bold hover:bg-blue-700 transition-all duration-300"
          >
            LOGIN
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link to="/register" className="text-sm text-gray-500">Forgot your password?</Link>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">Don't have an account? <Link to="/register" className="text-mainBlue">Register Now</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;