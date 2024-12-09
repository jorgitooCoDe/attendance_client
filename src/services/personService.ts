import apiClient from '../client/apiClient';
import { AddPersonToGroupRequest, AddPersonToGroupResponse, ErrorResponse } from '../types';
import { AxiosError } from 'axios';

export const addPersonToGroup = async (personData: AddPersonToGroupRequest): Promise<AddPersonToGroupResponse> => {
  try {
    const response = await apiClient.post<AddPersonToGroupResponse>('/auth/addPersonToGroup', personData);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw error.response.data as ErrorResponse;
    }
    throw error;
  }
};