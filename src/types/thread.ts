export type IThread = {
  id: number;
  content: string;
  image?: string;
  created_at: string;
  updated_at: string;
  user?: IUser;
  reply?: IReply;
  like?: ILike[];
  reply_count?: number;
  like_count?: number;
};

export type IUser = {
  id: number;
  username: string;
  fullName: string;
  email: string;
  photo_profile: string;
  bio: string;
  created_at: string;
  updated_at: string;
};

export type IReply = {
  id: number;
  image: string;
  content: string;
  created_at: string;
  updated_at: string;
  user?: IUser;
  like?: ILike;
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
