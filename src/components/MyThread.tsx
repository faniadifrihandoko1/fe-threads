import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";

import { useSelector } from "react-redux";
import { RootState } from "../store/type/RootState";
import { IThread } from "../types/thread";
import { FaEllipsisH, FaRegHeart } from "react-icons/fa";
import convertTimeToAgo from "../utils/convertTime";
import { Link } from "react-router-dom";
import { BiMessageAltDetail } from "react-icons/bi";

export default function MyThread() {
  const thread = useSelector((state: RootState) => state.threads.threads);
  const userId = useSelector((state: RootState) => state.auth.id);
  const mappedThread = thread.filter((item: IThread) => {
    return item.user?.id == userId;
  });

  return (
    <>
      {mappedThread.map((item: IThread, key: number) => (
        <Card my={2} p={4} position={"relative"} key={key}>
          <Box>
            <Flex gap={4}>
              <Box>
                <Avatar name="Dan Abrahmov" src={item.user?.photo_profile} />
              </Box>
              <Box>
                {item.user?.fullName ? (
                  <Heading fontSize={"md"}>{item.user?.fullName}</Heading>
                ) : (
                  <Heading fontSize={"md"}>Hamba Allah</Heading>
                )}
                <Flex gap={1} alignItems="center">
                  {item.user?.fullName ? (
                    <Text color="gray">@{item.user?.username}</Text>
                  ) : (
                    <Text color="gray">@anonymous</Text>
                  )}
                  <Icon boxSize={1.5} color="gray" mt={1} viewBox="0 0 200 200">
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </Icon>
                  <Text color="gray" fontSize="14px">
                    {convertTimeToAgo(item.created_at)}
                  </Text>
                </Flex>
                <Link to={`detail-status/${item.id}`}>
                  <Text fontSize={15}>{item.content}</Text>
                </Link>
                {!!item.image && <Image src={item.image}></Image>}
                <Flex gap={2} mt={2} alignItems="center">
                  <Button
                    // onClick={handleLike}
                    bg="white"
                  >
                    <Flex gap={2}>
                      <FaRegHeart
                        // onClick={() => {
                        //   handleLike(item.id);}
                        // }
                        color={item.isLiked ? "red" : "gray"}
                        size={18}
                      />
                      <Text color="gray" fontSize={14}>
                        {item.like_count}
                      </Text>
                    </Flex>
                  </Button>
                  <Link to={`detail-status/${item.id}`}>
                    <Button bg="white" pt={"2px"}>
                      <Flex gap={2}>
                        <BiMessageAltDetail color="gray" size={20} />
                        <Text color="gray" marginTop="0px" fontSize={14}>
                          {item.reply_count} Replies
                        </Text>
                      </Flex>
                    </Button>
                  </Link>
                </Flex>
              </Box>
              <Box
                ml="auto"
                mr={4}
                // {...modals[item.id] ? { display: "block" } : { display: "none" }}
              >
                <FaEllipsisH />
              </Box>
              {/* {modals[item.id] && (
                <Box
                  position={"absolute"}
                  w={"85px"}
                  bg={"darkgray"}
                  shadow={10}
                  rounded={5}
                  top={7}
                  px={1}
                  py={1}
                  right={7}
                >
                  <Button
                    w={"100%"}
                    rounded={5}
                    display={"flex"}
                    alignItems={"center"}
                    bg={"white"}
                    textColor={"black"}
                    fontWeight={"bold"}
                    justifyContent={"center"}
                    h={"30px"}
                  >
                    <FaEdit />
                  </Button>
                  <Button
                    h={"30px"}
                    w={"100%"}
                    mt={1}
                    rounded={5}
                    display={"flex"}
                    alignItems={"center"}
                    bg={"red"}
                    textColor={"white"}
                  >
                    <FaRegTrashAlt />
                  </Button>
                </Box>
              )} */}
            </Flex>
          </Box>
        </Card>
      ))}
    </>
  );
}
