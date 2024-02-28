/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Avatar,
  Box,
  Card,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { BiMessageAltDetail } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
// import data from "../utils/data";

import convertTimeToAgo from "../../../utils/convertTime";

import { IReply } from "../../../types/thread";

export default function ReplyThread({
  content,
  created_at,
  image,
  user,
}: IReply) {
  // const { data } = useFetchThread();
  console.log(user);
  return (
    <>
      <Card mt={2} p={4}>
        <Box>
          <Flex gap={4}>
            <Box>
              <Avatar name={user?.fullName} src={user?.photo_profile} />
            </Box>
            <Box>
              <Flex gap={1} alignItems="center">
                <Heading size="m">{user?.fullName}</Heading>
                <Text color="gray">@{user?.username}</Text>
                <Icon boxSize={2} color="gray" mt={1} viewBox="0 0 200 200">
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
                <Text color="gray" fontSize={13} mt="1px">
                  {convertTimeToAgo(created_at)}
                </Text>
              </Flex>
              <Text>{content}</Text>
              {!!image && <Image src={image}></Image>}
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
    </>
  );
}
