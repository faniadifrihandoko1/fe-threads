/* eslint-disable @typescript-eslint/no-explicit-any */
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
  fullName?: string;
  email?: string;
  photo_profile?: string;
  photo_cover?: string;
  bio?: string;
  exp?: number;
  iat?: number;
  is_following?: boolean;
  password?: string;
  following?: IUser[];
  follower?: IUser[];
  following_count?: number;
  follower_count?: number;
}

export interface IUpdateUser {
  id: number;
  username: string;
  fullName?: string;
  email?: string;
  photo_profile?: File | string;
  photo_cover?: File | string;
  bio?: string;
  exp?: number;
  iat?: number;
  password?: string;
  following?: IUser[];
  follower?: IUser[];
  following_count?: number;
  follower_count?: number;
}
