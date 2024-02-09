import { Avatar, Button, Card, Flex, Input } from "@chakra-ui/react";
import React from "react";
import { LuImagePlus } from "react-icons/lu";

export default function CreateReplyStatus() {
  return (
    <Card p={4}>
      <Flex gap={4} alignItems="center">
        <Avatar name="Dan Abrahmov" src="https://bit.ly/sage-adebayo" />
        <Input placeholder="Whats Is Happening!!" />
        <Button bg="white">
          <LuImagePlus color="green" size={35} />
        </Button>
        <Button
          bg="green"
          textColor="white"
          fontSize={15}
          fontWeight={"semibold"}
          rounded={15}
        >
          Reply
        </Button>
      </Flex>
    </Card>
  );
}
