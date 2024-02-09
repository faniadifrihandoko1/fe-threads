import { Box, Button, Card, Divider, Flex, Input } from "@chakra-ui/react";
import { LuImagePlus } from "react-icons/lu";
import React from "react";

const CreatePost: React.FC = () => {
  return (
    <Card p={4}>
      <Input placeholder="Whats Is Happening!!" h={"50px"} border={"none"} />
      <Divider my={2} />
      <Flex justify={"space-between"}>
        <Box>
          <Button bg="white">
            <LuImagePlus size={25} />
          </Button>
        </Box>
        <Box>
          <Button bg="green" textColor="white" rounded={15}>
            Post
          </Button>
        </Box>
      </Flex>
    </Card>
  );
};

export default CreatePost;
