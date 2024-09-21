import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/register', {
        email,
        password,
        passwordRepeat,
      });
      console.log('Register successful', response.data);
    } catch (error) {
      console.error('Error registering', error);
    }
  };

  return (
    <div>
      <h1 className='font-extrabold text-5xl'>Ini Menu Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.target.value)}
        />
        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;