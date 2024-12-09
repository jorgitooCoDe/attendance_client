import apiClient from '../client/apiClient';

interface TakeAttendanceRequest {
  personId: string;
  groupId: number;
  sessionNumber: number;
}

interface TakeAttendanceResponse {
  message: string;
}

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