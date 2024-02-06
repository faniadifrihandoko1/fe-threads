import { Box, Flex } from "@chakra-ui/react";
import Cards from "../components/Cards";
import CreatePost from "../components/CreatePost";
import Sidebar from "../components/Sidebar";
import MyProfile from "../components/MyProfile";
import CardFollow from "../components/CardFollow";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Flex w="full">
      <Box w="20%" display={{ base: "none", md: "block" }}>
        <Sidebar />
      </Box>
      <Box
        w={{ base: "100%", md: "50%" }}
        px={{ base: "10px", md: "0px" }}
        py={2}
      >
        <CreatePost />
        <Cards />
        <Box display={{ base: "block", md: "none" }} bottom={0}>
          <Sidebar />
        </Box>
      </Box>
      <Box w="30%" display={{ base: "none", md: "block" }}>
        <MyProfile />
        <CardFollow />
        <Footer />
      </Box>
    </Flex>
  );
}
