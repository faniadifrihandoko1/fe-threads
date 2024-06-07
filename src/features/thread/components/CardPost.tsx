import {
  Avatar,
  Box,
  Card,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaEllipsisH, FaRegHeart } from "react-icons/fa";
import { BiMessageAltDetail } from "react-icons/bi";
import React from "react";
import { GoReport } from "react-icons/go";
import { MdBlock } from "react-icons/md";
import { Link } from "react-router-dom";
import convertTimeToAgo from "../../../utils/convertTime";
import { IThread } from "../../../types/thread";

import useThreads from "../hooks/useThread";

const CardPost: React.FC = () => {
  const { handleLike, handleModal, modals, dataThread } = useThreads();

  return (
    <>
      {dataThread.threads?.map((item: IThread, key: number) => (
        // <Skeleton isLoaded={isloadingThread}>
        <Card mt={2} p={4} position={"relative"} key={key}>
          <Box>
            <Flex gap={4}>
              <Box>
                <Avatar name="Dan Abrahmov" src={item.user?.photo_profile} />
              </Box>
              <Box>
                <Link to={`profile/${item.user?.username}`}>
                  <Heading fontSize="md">
                    {item.user?.fullName || "Hamba Allah"}
                  </Heading>
                </Link>
                <Flex gap={1} alignItems="center">
                  <Text color="gray">
                    @{item.user?.fullName ? item.user.username : "anonymous"}
                  </Text>
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

                  {!!item.image && (
                    <Image
                      mt={"5px"}
                      borderRadius={"10px"}
                      src={item.image}
                    ></Image>
                  )}
                </Link>
                <Flex gap={5} mt={2} alignItems="center">
                  <Text
                    // onClick={handleLike}
                    bg="white"
                  >
                    <Flex
                      gap={1}
                      alignItems="center"
                      _hover={{ cursor: "pointer" }}
                    >
                      <FaRegHeart
                        onClick={() => {
                          handleLike(item.id);
                        }}
                        color={item.isLiked ? "red" : "gray"}
                        size={18}
                      />
                      <Text color="gray" fontSize={15} mb={"2px"}>
                        {item.like_count}
                      </Text>
                    </Flex>
                  </Text>
                  <Link to={`detail-status/${item.id}`}>
                    <Text bg="white" pt={"2px"}>
                      <Flex gap={1} alignItems="center">
                        <BiMessageAltDetail color="gray" size={20} />
                        <Text color="gray" fontSize={15} mb={1}>
                          {item.reply_count} Replies
                        </Text>
                      </Flex>
                    </Text>
                  </Link>
                </Flex>
              </Box>
              <Box ml="auto" _hover={{ cursor: "pointer" }} mr={4}>
                <FaEllipsisH onClick={() => handleModal(item.id)} />
              </Box>
              {modals[item.id] && (
                <Box
                  position={"absolute"}
                  w={"100px"}
                  bg={"darkgray"}
                  shadow={10}
                  rounded={5}
                  top={7}
                  px={1}
                  py={1}
                  right={7}
                >
                  <Flex
                    _hover={{
                      cursor: "pointer",
                      color: "red",
                      borderRadius: "5px",
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                    }}
                    w={"100%"}
                    rounded={5}
                    display={"flex"}
                    bg={"white"}
                    textColor={"white"}
                    justifyContent={"space-between"}
                    align={"center"}
                    alignItems={"center"}
                    fontWeight={"bold"}
                    px={2}
                    py={1}
                  >
                    <Text fontSize={12} color={"red"} fontWeight={"regular"}>
                      Laporkan
                    </Text>
                    <GoReport size={14} color="red" />
                  </Flex>
                  <Flex
                    _hover={{
                      cursor: "pointer",
                      color: "red",
                      borderRadius: "5px",
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                    }}
                    mt={1}
                    w={"100%"}
                    rounded={5}
                    display={"flex"}
                    bg={"white"}
                    textColor={"white"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    fontWeight={"bold"}
                    px={2}
                    py={1}
                  >
                    <Text fontSize={12} color={"red"}>
                      Blokir
                    </Text>
                    <MdBlock size={14} color="red" />
                  </Flex>
                </Box>
              )}
            </Flex>
          </Box>
        </Card>
        // </Skeleton>
      ))}
    </>
  );
};

export default CardPost;
