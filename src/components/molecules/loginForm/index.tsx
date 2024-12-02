import React, { useState } from 'react';
import Input from '../../atoms/input';
import Button from '../../atoms/button';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Implement login logic
  };

  return (
    <div className="w-full p-8 max-w-md rounded-lg">
      <h2 className="mb-4 text-2xl font-bold text-mto_gray">Sign In</h2>
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
      <div className="flex justify-center">
        <Button text="Sign In" onClick={handleLogin} variant='primary' />
      </div>
      <a href="#" className="flex mt-4 text-gray-500 justify-end hover:underline">Forgot password?</a>
    </div>
  );
};

export default LoginForm;