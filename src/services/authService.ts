import apiClient from '../client/apiClient';
import { UserResponseEntity } from '../types/apiResponseEntities';
import { LoginResponse, ValidSessionResponse } from '../types/apiResponses';

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

export const validateSession = async (): Promise<UserResponseEntity> => {
  const response = await apiClient.get<ValidSessionResponse>('/auth/valid');
  return response.data.user;
};