import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import Button from '../atoms/button';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    handleLogout();
    navigate('/login');
  };

  return (
    <div>
      <h1>Welcome to the Admin Dashboard</h1>
      <Button text="Logout" onClick={onLogout} variant="secondary" />
    </div>
  );
};

export default AdminDashboard;