import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../components/Sidebar";

import MyProfile from "../components/MyProfile";
import CardFollow from "../components/CardFollow";
import Footer from "../components/Footer";
import StatusDetail from "../components/StatusDetail";
import CreateReplyStatus from "../components/CreateReplyStatus";
import ReplyStatus from "../components/ReplyStatus";
import data from "../utils/data";

const DetailStatus: React.FC = () => {
  return (
    <Flex w="full">
      <Box w="20%" display={{ base: "none", md: "block" }}>
        <Sidebar />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        w={{ base: "100%", md: "50%" }}
        px={{ base: "10px", md: "0px" }}
        py={2}
      >
        <StatusDetail data={data} />
        <CreateReplyStatus />
        <ReplyStatus />
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
};

export default DetailStatus;
