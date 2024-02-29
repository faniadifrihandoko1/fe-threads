/* eslint-disable @typescript-eslint/no-explicit-any */
export type IThread = {
  id: number;
  content: string;
  image?: string;
  created_at: string;
  updated_at: string;
  user?: IUser;
  reply?: IReply[];
  like?: ILike[];
  reply_count?: number | undefined;
  like_count?: number | undefined;
  isLiked?: boolean;
};

export type IUser = {
  id: number;
  username?: string;
  fullName: string;
  email?: string;
  photo_profile?: string;
  bio?: string;
  is_following?: boolean;
  userId?: number;
};

export type IReply = {
  id: number;
  image: string;
  content: string;
  created_at?: string;
  updated_at?: string;
  user?: IUser;
  like?: {
    id: number;
    fullname: string;
    username: string;
    photo_profile: string;
  };
};

export type ILike = {
  id?: number;
  user: {
    id: number;
  };
};

export type IPostThread = {
  content: string;
  image: File | null;
};
