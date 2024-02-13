import { Box } from "@chakra-ui/react";
import Cards from "../components/Cards";
import CreatePost from "../components/CreatePost";
import Sidebar from "../components/Sidebar";

import SetLayout from "../layout/SetLayout";

export default function Home() {
  return (
    <>
      <SetLayout>
        <CreatePost />
        <Cards />
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
