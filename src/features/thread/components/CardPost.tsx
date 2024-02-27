import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Icon,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaEllipsisH, FaRegHeart, FaRegTrashAlt, FaEdit } from "react-icons/fa";
import { BiMessageAltDetail } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import ModalReply from "../../replyThread/component/ModalReply";

import { Link } from "react-router-dom";
import convertTimeToAgo from "../../../utils/convertTime";
import { useDispatch, useSelector } from "react-redux";
import { IThread } from "../../../types/thread";
import { RootState } from "../../../store/type/RootState";

import { ThunkDispatch } from "@reduxjs/toolkit";
import { getThread } from "../../../store/redux/createAsync";

import { axiosInstance } from "../../../lib/axios";
import useThreads from "../hooks/useThread";

const CardPost: React.FC = () => {
  const [modals, setModals] = useState<{ [key: number]: boolean }>({});
  const { handleLike } = useThreads();
  // const { content, created_at, id, image, user } = props;
  // const [liked, setLiked] = useState<boolean>(false);
  // const [countLike, setCountLike] = useState<number>(like);
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const data = useSelector((state: RootState) => state.thread);
  const data = useSelector((state: RootState) => state.user);
  // const userId = useSelector((state: RootState) => state.auth.id);
  console.log(`data`, data);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const fetch = async () => {
    const response = await axiosInstance.get("/thread");
    return response.data;
  };

  useEffect(() => {
    dispatch(getThread());
    fetch();
  }, [dispatch]);

  // const handleLike = () => {
  //   if (!liked) {
  //     setLiked(true);
  //     setCountLike(countLike + 1);
  //   } else {
  //     setLiked(false);
  //     setCountLike(countLike - 1);
  //   }
  // };
  const handleModal = (id: number) => {
    setModals((prevModals) => ({
      ...prevModals,
      [id]: !prevModals[id],
    }));
  };

  return (
    <>
      {data.user?.map((item: IThread, key: number) => (
        <Card mt={2} p={4} position={"relative"} key={key}>
          <Box>
            <Flex gap={4}>
              <Box>
                <Avatar name="Dan Abrahmov" src="https://bit.ly/sage-adebayo" />
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
                        color={item.isLike ? "red" : "gray"}
                        size={18}
                      />
                      <Text color="gray" fontSize={14}>
                        {item.like_count}
                      </Text>
                    </Flex>
                  </Button>
                  <Button bg="white" pt={"2px"} onClick={onOpen}>
                    <Flex gap={2}>
                      <BiMessageAltDetail color="gray" size={20} />
                      <Text color="gray" marginTop="0px" fontSize={14}>
                        {item.reply_count} Replies
                      </Text>
                    </Flex>
                  </Button>
                  {/* Modal */}
                  <Modal
                    blockScrollOnMount={false}
                    isOpen={isOpen}
                    onClose={onClose}
                  >
                    <ModalOverlay />
                    <ModalContent
                      p={3}
                      maxW={{ base: "400px", md: "550px", lg: "550px" }}
                    >
                      <ModalHeader ml={460} mt={-5}>
                        <Button onClick={onClose}>x</Button>
                      </ModalHeader>
                      <ModalReply />
                    </ModalContent>
                  </Modal>
                  {/* End Modal */}
                </Flex>
              </Box>
              <Box
                ml="auto"
                mr={4}
                // {...modals[item.id] ? { display: "block" } : { display: "none" }}
              >
                <FaEllipsisH onClick={() => handleModal(item.id)} />
              </Box>
              {modals[item.id] && (
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
              )}
            </Flex>
          </Box>
        </Card>
      ))}
    </>
  );
};

export default CardPost;
