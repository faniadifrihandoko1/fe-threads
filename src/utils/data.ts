export interface Comment {
  id: number;
  name: string;
  username: string;
  avatar: string;
  desc: string;
}
[];
interface Data {
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
[];
const data: Data[] = [
  {
    id: 1,
    name: "fani",
    username: "faniadfr",
    avatar: "https://bit.ly/dan-abramov",
    date: "4 Hours ago",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi laboriosam quia necessitatibus? Amet vitae facere soluta quam laboriosam explicabo at modi quibusdam quae, animi, natus possimus totam odio illum accusamus! ",
    like: 30,
    image: "",
    comment: [
      {
        id: 1,
        name: "reihan",
        username: "reihanadfr",
        avatar: "https://bit.ly/sage-adebayo",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
      },
    ],
  },
  {
    id: 2,
    name: "reihan",
    username: "reihanadfr",
    avatar: "https://bit.ly/sage-adebayo",
    date: "5 Hours ago",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi laboriosam quia necessitatibus? Amet vitae facere soluta quam laboriosam explicabo at modi quibusdam quae, animi,  Modi laboriosam quia necessitatibus? Amet vitae facere soluta quam natus possimus totam odio illum accusamus! ",
    like: 69,
    image: "",
    comment: [
      {
        id: 2,
        name: "reihan",
        username: "reihanadfr",
        avatar: "https://bit.ly/sage-adebayo",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
      },
    ],
  },
  {
    id: 3,
    name: "abdirahman",
    username: "nuradfr",
    avatar: "https://bit.ly//kent-c-dodds",
    date: "6 Hours ago",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi laboriosam quia necessitatibus? Amet vitae facere soluta quam laboriosam explicabo at modi quibusdam quae, animi,  Modi laboriosam quia necessitatibus? Amet vitae facere soluta quam natus possimus totam odio illum accusamus! ",
    like: 56,
    image: "",
    comment: [
      {
        id: 3,
        name: "reihan",
        username: "reihanadfr",
        avatar: "https://bit.ly/sage-adebayo",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
      },
    ],
  },
  {
    id: 4,
    name: "nurhayati",
    username: "nuradfr",
    avatar: "https://bit.ly/ryan-florence",
    date: "6 Hours ago",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi laboriosam quia necessitatibus? Amet vitae facere soluta quam laboriosam explicabo at modi quibusdam quae, animi,  Modi laboriosam quia necessitatibus? Amet vitae facere soluta quam natus possimus totam odio illum accusamus! ",
    like: 27,
    image:
      "https://img.freepik.com/free-photo/marketing-strategy-planning-strategy-concept_53876-42950.jpg?w=826&t=st=1707279706~exp=1707280306~hmac=e85f1dc4e0336eb23749deb6ad30099b25de311e75259a1da43da919a33d2681",
    comment: [
      {
        id: 4,
        name: "reihan",
        username: "reihanadfr",
        avatar: "https://bit.ly/sage-adebayo",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
      },
    ],
  },
  {
    id: 5,
    name: "nurfadillah",
    username: "nuradfr",
    avatar: "https://bit.ly/prosper-baba",
    date: "6 Hours ago",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi laboriosam quia necessitatibus? Amet vitae facere soluta quam laboriosam explicabo at modi quibusdam quae, animi,  Modi laboriosam quia necessitatibus? Amet vitae facere soluta quam natus possimus totam odio illum accusamus! ",
    like: 34,
    image: "",
    comment: [
      {
        id: 5,
        name: "reihan",
        username: "reihanadfr",
        avatar: "https://bit.ly/sage-adebayo",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
      },
    ],
  },
];

export default data;
