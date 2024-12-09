import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../atoms/input';
import { PrimaryButton } from '../../atoms/button';
import { useAuth } from '../../../hooks/useAuth';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin, error, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (user.role === 'ADMIN') {
        navigate('/admin-dashboard');
      } else if (user.role === 'MANAGER') {
        navigate('/manager-dashboard');
      }
    }
  }, [user, navigate]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleLogin(username, password);
  };

  const handleClick = async () => {
    await handleLogin(username, password);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center justify-center p-8 rounded-lg h-full">
      <h2 className="mb-4 text-2xl font-bold text-mto_gray">Sign In</h2>
      {error && <p className="text-red-500">{error}</p>}
      <p className='text-xs text-mto_gray font-bold mb-3'>USERNAME</p>
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        variant='primary'
      />
      <p className='text-xs text-mto_gray font-bold mb-3'>PASSWORD</p>
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        variant='primary'
      />
      <div className="flex justify-center w-full">
        <PrimaryButton text="Sign In" onClick={handleClick} />
      </div>
      <a href="#" className="flex mt-4 text-gray-500 justify-end hover:underline">Forgot password?</a>
    </form>
  );
};

export default LoginForm;