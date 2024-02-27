export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister {
  fullName: string;
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  username: string;
  fullName: string;
  email: string;
  photo_profile?: string;
  bio?: string;
  exp?: number;
  iat?: number;
  password?: string;
  following_count?: number;
  follower_count?: number;
}
