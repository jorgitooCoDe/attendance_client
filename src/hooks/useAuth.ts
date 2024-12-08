import { useState } from 'react';
import { login, validateSession } from '../services/authService';
import { UserResponseEntity } from '../types/apiResponseEntities';

export const useAuth = () => {
  const [user, setUser] = useState<UserResponseEntity | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (username: string, password: string) => {
    try {
      await login(username, password);
      const validatedUser = await validateSession();
      setUser(validatedUser);
      setError(null);
    } catch (err) {
      setError('Login failed');
      setUser(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  return {
    user,
    error,
    handleLogin,
    handleLogout,
  };
};