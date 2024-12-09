import apiClient from '../client/apiClient';
import { CreateGroupResponse, GroupResponseEntity } from '../types';

export const createGroup = async (groupData: GroupResponseEntity): Promise<CreateGroupResponse> => {
  try {
    const response = await apiClient.post<CreateGroupResponse>('/auth/createGroup', groupData);
    return response.data;
  } catch (error) {
    throw error;
  }
};