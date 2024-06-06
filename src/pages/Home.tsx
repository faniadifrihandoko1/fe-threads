import CreatePost from "../features/thread/components/CreatePost";
import SetLayout from "../layout/SetLayout";
import CardPost from "../features/thread/components/CardPost";

export default function Home() {
  return (
    <>
      <SetLayout>
        <CreatePost />
        <CardPost />
      </SetLayout>
    </>
  );
}
