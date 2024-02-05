import data from "../utils/data";
import CardPost from "./CardPost";

export default function Cards() {
  const dataPost = data;
  return (
    <div>
      {dataPost.map(
        (item, index) => (
          console.log(item, index),
          (
            <CardPost
              key={index}
              id={item.id}
              name={item.name}
              username={item.username}
              avatar={item.avatar}
              date={item.date}
              desc={item.desc}
              like={item.like}
              comment={item.comment}
            />
          )
        )
      )}
    </div>
  );
}
