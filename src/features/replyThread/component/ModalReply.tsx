import { Avatar, Box, Button, Divider, Flex, Input } from "@chakra-ui/react";
import { LuImagePlus } from "react-icons/lu";

export default function ModalReply() {
  return (
    <Box>
      <Flex gap={2}>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/sage-adebayo" />
        <Input placeholder="Whats Is Happening!!" h={"120px"} />
      </Flex>
      <Divider my={4} />
      <Flex justify={"space-between"}>
        <Button bg="white">
          <LuImagePlus color="green" size={25} />
        </Button>
        <Button bg="green" textColor="white" rounded={15}>
          Post
        </Button>
      </Flex>
    </Box>
  );
}
