export type IThread = {
  id: number;
  content: string;
  image: string;
  created_at: string;
  updated_at: string;
  user: IUser;
  reply?: IReply[];
  like?: ILike[];
};

export type IUser = {
  id: number;
  username: string;
  fullName: string;
  email: string;
  photo_profile: string;
};

export type IReply = {
  id: number;
  image: string;
  content: string;
  created_at: string;
  updated_at: string;
  user?: IUser;
  like?: ILike[];
};

export type ILike = {
  id: number;
};