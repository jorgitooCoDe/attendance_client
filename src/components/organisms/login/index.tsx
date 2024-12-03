import React from 'react';
import LoginForm from '../../molecules/loginForm';

const Login: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="mb-8 text-2xl font-bold font-main_sans text-mto_gray">Attendance</h2>
      <div className="flex w-full max-w-lg h-auto rounded-lg shadow-custom-red">
        <div className="flex items-center justify-center w-full p-8 bg-white">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;