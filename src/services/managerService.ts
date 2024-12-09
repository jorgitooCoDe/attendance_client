import apiClient from '../client/apiClient';
import {
  ValidSessionResponse,
  SearchSessionsByGroupIDResponse,
  ShowAssignationByGroupIDResponse,
  ShowAllGroupsResponse,
  SessionsTodayResponse, AddManagerToGroupRequest, AddManagerToGroupResponse, ErrorResponse
} from '../types';

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

export const addManagerToGroup = async (managerData: AddManagerToGroupRequest): Promise<AddManagerToGroupResponse> => {
  const response = await apiClient.post<AddManagerToGroupResponse>('/auth/addManager', managerData);
  return response.data;
};