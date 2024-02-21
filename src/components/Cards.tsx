import { useFetchThread } from "../features/threads/useFetchThread";
import { threadPorps } from "../types/cardType";
// import datas from "../utils/data";
import CardPost from "./CardPost";

export default function Cards() {
  const { data } = useFetchThread();

  return (
    <div>
      {data?.data.map((item: threadPorps, index: number) => (
        <CardPost
          key={index}
          content={item.content}
          created_at={item.created_at}
          id={item.id}
          image={item.image}
          updated_at={item.updated_at}
          user={item.user}

          // id={item.id}
          // name={item.name}
          // username={item.username}
          // avatar={item.avatar}
          // date={item.date}
          // desc={item.desc}
          // like={item.like}
          // image={item.image}
          // comment={item.comment}
          //              content?: string;
          // created_at?: string;
          // id?: number;
          // image?: string;
          // updated_at?: string;
        />
      ))}
    </div>
  );
}
