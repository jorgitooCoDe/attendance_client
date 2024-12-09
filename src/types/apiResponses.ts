import {
  UserResponseEntity,
  GroupResponseEntity,
  PersonResponseEntity,
  ManagerResponseEntity,
  SessionResponseEntity,
  AttendanceResponseEntity,
  StatisticsResponseEntity,
  GroupStatisticsResponseEntity,
} from "./apiResponseEntities";

// POST /api/v0/auth
export type LoginResponse = {
  token: string;
  user: UserResponseEntity;
};

// GET /api/v0/auth/valid
export type ValidSessionResponse = {
  user: UserResponseEntity;
};

// POST /api/v0/auth/createGroup
export type CreateGroupResponse = {
  amount_sessions: number;
  name: string;
  amount_persons: number;
  description: string;
  Id: number;
};
// POST /api/v0/auth/addPersonToGroup
export type AddPersonToGroupResponse = {
  person: PersonResponseEntity;
};

// POST /api/v0/auth/addManager
export type AddManagerToGroupResponse = {
  manager: ManagerResponseEntity;
};

// POST /api/v0/auth/createSession
export type CreateSessionResponse = {
  message: string;
  content: SessionResponseEntity;
};


// GET /api/v0/auth/getGroupStatistics
export type GetGroupStatisticsResponse = StatisticsResponseEntity;

// GET /api/v0/auth/showAllGroups
export type ShowAllGroupsResponse = {
  message: string;
  content: GroupStatisticsResponseEntity[];
};

export type GetAllGroupsResponse = GroupResponseEntity[];

// GET /api/v0/auth/searchGroupByName
export type SearchGroupByNameResponse = {
  message: string;
  content: GroupResponseEntity;
};

// GET /api/v0/auth/showAssignationByGroupID
export type ShowAssignationByGroupIDResponse = GroupStatisticsResponseEntity[];
;

// GET /api/v0/auth/searchSessionsByGroupID
export type SearchSessionsByGroupIDResponse = {
  message: string;
  content: SessionResponseEntity[];
};

// GET /api/v0/auth/getSessionsToday
export type SessionsTodayResponse = SessionResponseEntity[];