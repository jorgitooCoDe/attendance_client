import apiClient from '../client/apiClient';
import { CreateGroupResponse, GroupResponseEntity, GetAllGroupsResponse, GetGroupStatisticsResponse } from '../types';

export const createGroup = async (groupData: GroupResponseEntity): Promise<CreateGroupResponse> => {
  try {
    const response = await apiClient.post<CreateGroupResponse>('/auth/createGroup', groupData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllGroups = async (): Promise<GetAllGroupsResponse> => {
  const response = await apiClient.get<GetAllGroupsResponse>('/auth/showAllGroups');
  return response.data;
};

export const getGroupStatistics = async (groupId: number): Promise<GetGroupStatisticsResponse> => {
  const response = await apiClient.get<GetGroupStatisticsResponse>(`/auth/getGroupStatistics?groupId=${groupId}`);
  return response.data;
};