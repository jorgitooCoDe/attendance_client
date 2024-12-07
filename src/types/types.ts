export type User = {
  username: string;
  code: string;
  role: string; // ("ADMIN", "MANAGER")
  name: string;
  last_name: string;
  email: string;
  phone_number: string;
};

export type LoginResponse = {
  token: string;
  user: User;
};

export type LoginRequest = {
  username: string;
  password: string;
};