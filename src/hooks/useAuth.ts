import { useState } from 'react';
import { login, logout, validateSession } from '../services/authService';
import { User } from '../types/types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (username: string, password: string) => {
    try {
      await login(username, password);
      const validatedUser = await validateSession();
      setUser(validatedUser);
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return {
    user,
    error,
    handleLogin,
    handleLogout,
  };
};