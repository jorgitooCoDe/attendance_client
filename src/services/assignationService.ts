// src/services/assignationService.ts
import apiClient from '../client/apiClient';
import { ShowAssignationByGroupIDResponse } from '../types/apiResponses';
import { GroupStatisticsResponseEntity } from '../types/apiResponseEntities';

export const getAssignationByGroupID = async (groupId: number): Promise<GroupStatisticsResponseEntity[]> => {
  try {
    console.log(`Fetching assignations for groupId: ${groupId}`);
    const response = await apiClient.get<ShowAssignationByGroupIDResponse>('/auth/showAssignationByGroupID', {
      params: { id: groupId },
    });
    console.log('API Response:', response.data);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      console.error('API Error:', error.response.data.message);
      throw new Error(error.response.data.message);
    } else {
      console.error('Network Error:', error);
      throw new Error('Error al obtener las asignaciones');
    }
  }
};