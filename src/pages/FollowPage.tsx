import { Box } from "@chakra-ui/react";
// import Cards from "../features/thread/components/Cards";
import CreatePost from "../features/thread/components/CreatePost";
import Sidebar from "../components/Sidebar";

import SetLayout from "../layout/SetLayout";
import CardPost from "../features/thread/components/CardPost";

export default function Home() {
  return (
    <>
      <SetLayout>
        <CreatePost />
        <CardPost />
        <Box
          display={{ base: "block", md: "none" }}
          bottom={0}
          position={"fixed"}
          w={"full"}
        >
          <Sidebar />
        </Box>
      </SetLayout>
    </>
  );
}
