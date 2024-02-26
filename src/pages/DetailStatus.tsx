import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";

import MyProfile from "../components/MyProfile";
import CardFollow from "../components/CardFollow";
import Footer from "../components/Footer";
import StatusDetail from "../features/replyThread/component/StatusDetail";
import CreateReplyStatus from "../features/replyThread/component/CreateReplyStatus";

// import data from "../utils/data";
// import { useFetchThread } from "../features/threads/useFetchThread";
import ReplyStatus from "../features/replyThread/component/ReplyThread";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/type/RootState";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { IThread } from "../types/thread";
import { getThread } from "../store/redux/createAsync";

const DetailStatus: React.FC = () => {
  // const { data } = useFetchThread();
  // console.log("detailstatus", data);
  const data = useSelector((state: RootState) => state.user);
  const { id } = useParams();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const filterData = data.user?.filter(
    (item: IThread) => item.id === Number(id)
  );

  const dataPost = filterData[0];
  console.log(`datapost`, dataPost);
  useEffect(() => {
    dispatch(getThread());
  }, [dispatch]);
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
        <StatusDetail />
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
