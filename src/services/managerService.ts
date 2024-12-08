import apiClient from '../client/apiClient';
import {
  ValidSessionResponse,
  SearchSessionsByGroupIDResponse,
  ShowAssignationByGroupIDResponse,
  ShowAllGroupsResponse,
  SessionsTodayResponse,
} from '../types/apiResponses';

export const getValidSession = async () => {
  const response = await apiClient.get<ValidSessionResponse>('/auth/valid');
  return response.data;
};

export const getSessionsByGroupID = async (groupId: number) => {
  const response = await apiClient.get<SearchSessionsByGroupIDResponse>(`/auth/searchSessionsByGroupID?id=${groupId}`);
  return response.data;
};

export const getAssignationsByGroupID = async (groupId: number) => {
  const response = await apiClient.get<ShowAssignationByGroupIDResponse>(`/auth/showAssignationByGroupID?id=${groupId}`);
  return response.data;
};

export const getGroupsByUserCode = async (userCode: string) => {
  const response = await apiClient.get<ShowAllGroupsResponse>(`/auth/getGroupsByUserCode?code=${userCode}`);
  return response.data;
};

export const getSessionsToday = async () => {
  const response = await apiClient.get<SessionsTodayResponse>('/auth/getSessionsToday');
  return response.data;
};