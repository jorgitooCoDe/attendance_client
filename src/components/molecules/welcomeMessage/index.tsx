import React from 'react';
import Button from '../../atoms/button';

const WelcomeMessage: React.FC = () => {
  const handleSignUp = () => {
    // TODO: Implement sign up logic
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center rounded-lg text-white">
      <h2 className="mb-4 text-2xl font-bold">Welcome to Login</h2>
      <p className="mb-4">Don't have an account?</p>
      <Button text="Sign Up" onClick={handleSignUp} variant='secondary' />
    </div>
  );
};

export default WelcomeMessage;