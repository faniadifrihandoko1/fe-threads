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
import { FaEllipsisH, FaRegHeart } from "react-icons/fa";
import { BiMessageAltDetail } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { GoReport } from "react-icons/go";
import { MdBlock } from "react-icons/md";

import { Link } from "react-router-dom";
import convertTimeToAgo from "../../../utils/convertTime";
import { useDispatch, useSelector } from "react-redux";
import { IThread } from "../../../types/thread";
import { RootState } from "../../../store/type/RootState";

import { ThunkDispatch } from "@reduxjs/toolkit";
import { getThread } from "../../../store/asyncThunk/createAsync";

import useThreads from "../hooks/useThread";

const CardPost: React.FC = () => {
  const [modals, setModals] = useState<{ [key: number]: boolean }>({});
  const userId = useSelector((state: RootState) => state.auth.id);
  const { handleLike } = useThreads();
  const data = useSelector((state: RootState) => state.threads);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    dispatch(getThread(userId));
  }, []);

  const handleModal = (id: number) => {
    setModals((prevModals) => ({
      ...prevModals,
      [id]: !prevModals[id],
    }));
  };

  return (
    <>
      {data.threads?.map((item: IThread, key: number) => (
        <Card mt={2} p={4} position={"relative"} key={key}>
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
                        onClick={() => {
                          handleLike(item.id);
                        }}
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
                _hover={{ cursor: "pointer" }}
                // {...modals[item.id] ? { display: "block" } : { display: "none" }}
              >
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
      ))}
    </>
  );
};

export default CardPost;
