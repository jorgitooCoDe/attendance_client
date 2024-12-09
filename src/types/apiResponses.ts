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
  message: string;
  content: GroupResponseEntity;
};

// POST /api/v0/auth/addPersonToGroup
export type AddPersonToGroupResponse = {
  message: string;
  content: PersonResponseEntity;
};

// POST /api/v0/auth/addManager
export type AddManagerResponse = {
  message: string;
  content: ManagerResponseEntity;
};

// POST /api/v0/auth/createSession
export type CreateSessionResponse = {
  message: string;
  content: SessionResponseEntity;
};


// GET /api/v0/auth/getGroupStatistics
export type GetGroupStatisticsResponse = {
  message: string;
  content: StatisticsResponseEntity;
};

// GET /api/v0/auth/showAllGroups
export type ShowAllGroupsResponse = {
  message: string;
  content: GroupStatisticsResponseEntity[];
};

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