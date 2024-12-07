import apiClient from '../client/apiClient';
import { User } from '../types/types';

interface LoginResponse {
  token: string;
  user: User;
}

export const login = async (username: string, password: string): Promise<void> => {
  const response = await apiClient.post<LoginResponse>('/auth', {
    username,
    password,
  });
  const token = response.data.token;

  localStorage.setItem('authToken', token);
};

export const logout = (): void => {
  localStorage.removeItem('authToken');
};

export const validateSession = async (): Promise<User> => {
  const response = await apiClient.get<{ user: User }>('/auth/valid');
  return response.data.user;
};