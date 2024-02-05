import { Box, Flex } from "@chakra-ui/react";
import Cards from "../components/Cards";
import CreatePost from "../components/CreatePost";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <Flex w="full">
      <Box w="25%" display="block">
        <Sidebar />
      </Box>
      <Box w="50%">
        <CreatePost />
        <Cards />
      </Box>
    </Flex>
  );
}
