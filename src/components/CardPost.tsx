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
import { FaRegHeart } from "react-icons/fa";
import { BiMessageAltDetail } from "react-icons/bi";
import React, { useState } from "react";
import ModalReply from "./ModalReply";
import CardType from "../types/cardType";
import { Link } from "react-router-dom";

const CardPost: React.FC<CardType> = (props) => {
  const { id, name, username, avatar, date, desc, like, image, comment } =
    props;
  const [liked, setLiked] = useState<boolean>(false);
  const [countLike, setCountLike] = useState<number>(like);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setCountLike(countLike + 1);
    } else {
      setLiked(false);
      setCountLike(countLike - 1);
    }
  };
  return (
    <Card mt={2} p={4}>
      <Box>
        <Flex gap={4}>
          <Box>
            <Avatar name="Dan Abrahmov" src={avatar} />
          </Box>
          <Box>
            <Heading fontSize={"md"}>{name}</Heading>
            <Flex gap={1} alignItems="center">
              <Text color="gray">@{username}</Text>
              <Icon boxSize={1.5} color="gray" mt={1} viewBox="0 0 200 200">
                <path
                  fill="currentColor"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                />
              </Icon>
              <Text color="gray" fontSize="14px">
                {date}
              </Text>
            </Flex>
            <Link to={`detail-status/${id}`}>{desc}</Link>
            <Image src={image}></Image>
            <Flex gap={2} mt={2} alignItems="center">
              <Button onClick={handleLike} bg="white">
                <Flex gap={2}>
                  <FaRegHeart color={liked ? "red" : "gray"} size={18} />
                  <Text color="gray" fontSize={14}>
                    {countLike}
                  </Text>
                </Flex>
              </Button>
              <Button bg="white" pt={"2px"} onClick={onOpen}>
                <Flex gap={2}>
                  <BiMessageAltDetail color="gray" size={20} />
                  <Text color="gray" marginTop="0px" fontSize={14}>
                    {comment.length} Replies
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
        </Flex>
      </Box>
    </Card>
  );
};

export default CardPost;
