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
