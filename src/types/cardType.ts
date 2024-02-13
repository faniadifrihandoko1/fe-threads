interface Comment {
  id: number;
  name: string;
  username: string;
  avatar: string;
  desc: string;
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

export interface threadPorps {
  content?: string;
  created_at?: string;
  id?: number | undefined;
  image?: string;
  updated_at?: string;
}
