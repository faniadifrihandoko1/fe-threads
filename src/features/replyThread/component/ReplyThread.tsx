/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Avatar,
  Box,
  Card,
  Flex,
  Heading,
  Icon,
  Image,
  Skeleton,
  Text,
} from "@chakra-ui/react";

import { FaRegHeart } from "react-icons/fa";
import convertTimeToAgo from "../../../utils/convertTime";
import { IReply } from "../../../types/thread";
import { useAppSelector } from "../../../store/type/RootState";

export default function ReplyThread({
  content,
  created_at,
  image,
  user,
}: IReply) {
  // const { data } = useFetchThread();
  const isLoad = useAppSelector((state) => state.threadById.isLoading);

  return (
    <>
      <Skeleton isLoaded={isLoad}>
        <Card my={2} p={4}>
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
                {!!image && (
                  <Image mt={"5px"} borderRadius={"10px"} src={image}></Image>
                )}
                <Flex gap={5} mt={2} alignItems="center">
                  <Text
                    // onClick={handleLike}
                    bg="white"
                  >
                    <Flex gap={1} alignItems="center">
                      <FaRegHeart
                        // onClick={() => {
                        //   handleLike(item.id);
                        // }}
                        // color={item.isLiked ? "red" : "gray"}
                        size={18}
                      />
                      <Text color="gray" fontSize={15} mb={"2px"}>
                        2
                      </Text>
                    </Flex>
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Card>
      </Skeleton>
    </>
  );
}
