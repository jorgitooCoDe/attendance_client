import React, { useState } from 'react';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import { useAuth } from '../../../hooks/useAuth';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin, error } = useAuth();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  const handleClick = () => {
    const form = document.querySelector('form');
    if (form) {
      const event = new Event('submit', { bubbles: true, cancelable: true });
      form.dispatchEvent(event);
    }
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
      />
      <p className='text-xs text-mto_gray font-bold mb-3'>PASSWORD</p>
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex justify-center w-full">
        <Button text="Sign In" onClick={handleClick} variant='primary' />
      </div>
      <a href="#" className="flex mt-4 text-gray-500 justify-end hover:underline">Forgot password?</a>
    </form>
  );
};

export default LoginForm;