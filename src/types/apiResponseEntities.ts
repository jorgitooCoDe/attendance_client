export type UserResponseEntity = {
  username: string;
  code: string;
  role: "ADMIN" | "MANAGER";
  name: string;
  last_name: string;
  email: string;
  phone_number: string;
};

export type UserApiResponse = {
  user: UserResponseEntity;
};

export type GroupResponseEntity = {
  name: string;
  description: string;
  amount_persons: number;
  amount_sessions: number;
};

export type PersonResponseEntity = {
  code: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  state: string;
};

export type ManagerResponseEntity = {
  role: string;
  user_id: number;
  name: string;
  code_person: string;
  last_name: string;
  email: string;
  username: string;
};

export type SessionResponseEntity = {
  sessionId: number;
  groupId: number;
  sessionNumber: number;
  createdAt: string;
  duration: number;
  description: string;
};

export type AttendanceResponseEntity = {
  message: string;
};

export type TakeAttendanceRequest = {
  personId: string;
  groupId: number;
  session_number: number;
};


export type TakeAttendanceResponse = {
  message: string;
};

export type StatisticsResponseEntity = {
  TotalPersons: number;
  TotalSessions: number;
  TotalAttendances: number;
};

export type GroupStatisticsResponseEntity = {
  AssignationID: number;
  PersonCode: string;
  PersonName: string;
  PersonLastName: string;
  PersonEmail: string;
  PersonPhone: string;
  PersonState: string;
};

export type AddPersonToGroupRequest = {
  personId: string;
  firstName: string;
  lastName: string;
  phone: string;
  groupId: number;
};

export type AddManagerToGroupRequest = {
  username: string;
  password: string;
  htop_seed: string;
  code_person: string;
  name: string;
  last_name: string;
  email: string;
  phone_number: string;
  group_id: number;
};

export type ErrorResponse = {
  message: string;
};