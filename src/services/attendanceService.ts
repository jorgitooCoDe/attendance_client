import apiClient from '../client/apiClient';
import { TakeAttendanceResponse, TakeAttendanceRequest } from '../types/apiResponseEntities';



export const takeAttendance = async (data: TakeAttendanceRequest): Promise<TakeAttendanceResponse> => {
  try {
    const response = await apiClient.post<TakeAttendanceResponse>('/auth/takeAttendace', data);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('Error al tomar asistencia');
    }
  }
};