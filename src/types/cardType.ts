interface userType {
  id: number;
  username: string;
  fullName: string;
  email: string;
  photo_profile: string;
  bio: string;
  created_at: string;
  updated_at: string;
}

export default interface CardType {
  id: number;
  name: string;
  username: string;
  avatar: string;
  date: string;
  desc: string;
  like: number;
  image: string;
  comment: Comment[];
}

export interface replyProps {
  id: number;
  image: string;
  content: string;
  created_at: string;
  updated_at: string;
}
export interface threadPorps {
  content?: string;
  created_at?: string;
  id?: number | undefined;
  image?: string;
  updated_at?: string;
  user?: userType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reply?: object;
}

export interface userProps {
  email?: string;
  exp?: number;
  iat?: number;
  password?: string;
  username?: string;
}

