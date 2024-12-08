import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Button from '../atoms/button';

const Dashboard: React.FC = () => {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    handleLogout();
    navigate('/login');
  };

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <Button text="Logout" onClick={onLogout} variant="secondary" />
    </div>
  );
};

export default Dashboard;