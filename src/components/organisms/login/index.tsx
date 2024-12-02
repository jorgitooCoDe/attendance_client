import React from 'react';
import LoginForm from '../../molecules/loginForm';
import WelcomeMessage from '../../molecules/welcomeMessage';

const Login: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="mb-8 text-2xl font-bold font-main_sans text-mto_gray">Attendance</h2>
      <div className="flex w-3/5 h-auto rounded-lg shadow-custom-red">
        <div className="flex-1 flex items-center justify-center p-8 bg-white">
          <LoginForm />
        </div>
        <div className="flex-1 p-8 bg-mto_gray">
          <WelcomeMessage />
        </div>
      </div>
    </div>
  );
};

export default Login;