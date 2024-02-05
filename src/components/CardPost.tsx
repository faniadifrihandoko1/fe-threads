import {
  Avatar,
  Box,
  Button,
  Card,
  
  Flex,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";
import { BiMessageAltDetail } from "react-icons/bi";
import React, { useState } from "react";

interface CardPostProps {
  id: number;
  name: string;
  username: string;
  avatar: string;
  date: string;
  desc: string;
  like: number;
  comment: number;
}

const CardPost: React.FC<CardPostProps> = (props) => {
  const { name, username, avatar, date, desc, like, comment } = props;
  const [liked, setLiked] = useState<boolean>(false);
  const [countLike, setCountLike] = useState<number>(like);

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
            <Flex gap={1} alignItems="center">
              <Heading size="m">{name}</Heading>
              <Text color="gray">{username}</Text>
              <Icon boxSize={2} color="gray" mt={1} viewBox="0 0 200 200">
                <path
                  fill="currentColor"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                />
              </Icon>
              <Text color="gray" fontSize={14}>
                {date}
              </Text>
            </Flex>
            <Text>{desc}</Text>
            <Flex gap={2} mt={2} alignItems="center">
              <Button onClick={handleLike} bg="white">
                <Flex gap={2}>
                  <FaRegHeart color={liked ? "red" : "gray"} size={21} />
                  <Text color="gray" fontSize={16}>
                    {countLike}
                  </Text>
                </Flex>
              </Button>
              <Button bg="white">
                <Flex gap={2}>
                  <BiMessageAltDetail color="gray" size={25} />
                  <Text color="gray" marginTop="2px" fontSize={15}>
                    {comment} Replies
                  </Text>
                </Flex>
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Card>
  );
};

export default CardPost;
