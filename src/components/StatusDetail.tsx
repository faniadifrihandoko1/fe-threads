import {
  Avatar,
  Box,
  Card,
  Flex,
  Icon,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { IoMdArrowRoundBack } from "react-icons/io";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { BiMessageAltDetail } from "react-icons/bi";
// import data from "../utils/data";
import { NavLink, useParams } from "react-router-dom";

import convertISOToReadableTime from "../utils/convertTimeHours";
import convertDateFormat from "../utils/convertDate";
import { useSelector } from "react-redux";
import { RootState } from "../store/type/RootState";
import { IThread } from "../types/thread";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StatusDetail = () => {
  const data = useSelector((state: RootState) => state.thread);
  const { id } = useParams();
  const filterData = data.filter((item: IThread) => item.id === Number(id));

  const dataPost = filterData[0];

  return (
    <Card p={4}>
      <Flex alignItems={"center"} gap={2}>
        <NavLink to={"/"}>
          <IoMdArrowRoundBack />
        </NavLink>

        <Text my={1} fontSize={18} fontWeight="bold">
          Status
        </Text>
      </Flex>

      <Box mt={3}>
        <Box>
          <Flex gap={2} alignItems="center">
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Box>
              <Text>{dataPost.user?.fullName}</Text>
              <Text color="gray" mt={-1}>
                dummy
              </Text>
            </Box>
          </Flex>
          <Text mt={2} lineHeight="19px">
            {dataPost.content}
          </Text>
          <Image src={dataPost.image}></Image>
          <Flex
            alignItems="center"
            gap={1}
            textColor={"gray"}
            fontSize={14}
            mt={2}
          >
            <Text>{convertISOToReadableTime(dataPost.created_at)}</Text>
            <Icon boxSize={2} color="gray" mt="2px" viewBox="0 0 200 200">
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
            <Text>{convertDateFormat(dataPost.created_at)}</Text>
          </Flex>
          <Flex mt={2} gap={2}>
            <Flex alignItems={"center"}>
              <IconButton
                aria-label="Like"
                icon={<FaRegHeart />}
                bg={"transparent"}
              />
              <Text color="gray" fontSize={15} mb="1px">
                {dataPost.like_count}
              </Text>
            </Flex>
            <Flex alignItems={"center"}>
              <IconButton
                aria-label="Like"
                size="lg"
                icon={<BiMessageAltDetail />}
                bg={"transparent"}
              />
              <Text color="gray" fontSize={15} mb="1px" ms={-1}>
                {dataPost.reply_count} Replies
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
      {/* <Box>status orang</Box> */}
    </Card>
  );
};

export default StatusDetail;
