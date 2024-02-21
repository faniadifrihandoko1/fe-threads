/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Avatar,
  Box,
  Card,
  Flex,
  Heading,
  Icon,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { BiMessageAltDetail } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
// import data from "../utils/data";
import { useParams } from "react-router-dom";

import React from "react";
import { useFetchThread } from "../features/threads/useFetchThread";
import convertTimeToAgo from "../utils/convertTime";

const ReplyStatus: React.FC = () => {
  const { data } = useFetchThread();
  const { id } = useParams();
  console.log(
    `data Reply Status:`,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?.data.filter((item: any) => item.id === 1)
  );
  console.log(`params id:`, id);
  const filterData = data?.data.filter(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (item: any) => item.id === parseInt(id!)
  );
  const dataPost = filterData[0];
  // console.log(typeof dataPost.comment);
  return (
    <div>
      {dataPost.reply.map((item: any) => {
        return (
          <Card mt={2} p={4}>
            <Box>
              <Flex gap={4}>
                <Box>
                  <Avatar name="Dan Abrahmov" src={item.avatar} />
                </Box>
                <Box>
                  <Flex gap={1} alignItems="center">
                    <Heading size="m">{item.user.fullName}</Heading>
                    <Text color="gray">{item.username}</Text>
                    <Icon boxSize={2} color="gray" mt={1} viewBox="0 0 200 200">
                      <path
                        fill="currentColor"
                        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                      />
                    </Icon>
                    <Text color="gray" fontSize={13} mt="1px">
                      {convertTimeToAgo(item.created_at)}
                    </Text>
                  </Flex>
                  <Text>{item.content}</Text>
                  <Flex gap={2}>
                    <Flex alignItems={"center"}>
                      <IconButton
                        aria-label="Like"
                        icon={<FaRegHeart />}
                        bg={"transparent"}
                      />
                      <Text color="gray" fontSize={15} mb="1px"></Text>
                    </Flex>
                    <Flex alignItems={"center"}>
                      <IconButton
                        aria-label="Like"
                        size="lg"
                        icon={<BiMessageAltDetail />}
                        bg={"transparent"}
                      />
                      <Text color="gray" fontSize={15} mb="1px" ms={-1}></Text>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Card>
        );
      })}
    </div>
  );
};

export default ReplyStatus;
