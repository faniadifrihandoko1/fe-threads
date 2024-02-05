import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Input,
} from "@chakra-ui/react";
import { LuImagePlus } from "react-icons/lu";
import React from "react";

const CreatePost: React.FC = () => {
  return (
    <Card p={4}>
      <Box mt={2} mb={6}>
        <Heading>Home</Heading>
      </Box>
      <Flex gap={4} alignItems="center">
        <Avatar name="Dan Abrahmov" src="https://bit.ly/sage-adebayo" />
        <Input placeholder="Whats Is Happening!!" />
        <Button bg="white">
          <LuImagePlus color="green" size={35} />
        </Button>
        <Button bg="green" textColor="white" rounded={15}>
          Post
        </Button>
      </Flex>
    </Card>
  );
};

export default CreatePost;
