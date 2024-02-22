// import { useFetchThread } from "../../threads/useFetchThread";
// import { threadPorps } from "../../../types/cardType";
// // import datas from "../utils/data";
// import CardPost from "./CardPost";
// // import useThreads from "../hooks/useThread";
// import { useSelector } from "react-redux";
// import { RootState } from "../../../store/type/RootState";
// import useThreads from "../hooks/useThread";
// import { useEffect } from "react";
// import { IThread } from "../../../types/thread";

// export default function Cards() {
//   // const { data } = useFetchThread();
//   // const { getThreads } = useThreads();
//   const data = useSelector((state: RootState) => state.thread);
//   console.log(data);
//   // const user = useSelector((state: RootState) => state.auth);

//   // useEffect(() => {
//   //   getThreads();
//   // }, []);

//   return (
//     <div>
//       {data?.map((item: IThread, index: number) => (
//         <CardPost
//           key={index}
//           content={item.content}
//           created_at={item.created_at}
//           id={item.id}
//           image={item.image}
//           updated_at={item.updated_at}
//           user={item.user}
//           reply={item.reply}
//           // like={item.like}

//           // id={item.id}
//           // name={item.name}
//           // username={item.username}
//           // avatar={item.avatar}
//           // date={item.date}
//           // desc={item.desc}
//           // like={item.like}
//           // image={item.image}
//           // comment={item.comment}
//           //              content?: string;
//           // created_at?: string;
//           // id?: number;
//           // image?: string;
//           // updated_at?: string;
//         />
//       ))}
//     </div>
//   );
// }
