import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { LuImagePlus } from "react-icons/lu";
import useReply from "../hooks/useReply";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/type/RootState";
// import { useParams } from "react-router-dom";

export default function CreateReplyStatus({ id }: { id: number }) {
  // const { id } = useParams();
  const { handleChange, handleSubmit } = useReply();
  const userLogin = useSelector((state: RootState) => state.auth);

  return (
    <Card p={4}>
      <Flex gap={4} alignItems="center">
        <Avatar name="Dan Abrahmov" src={userLogin.photo_profile} />
        <Input
          placeholder="Whats Is Happening!!"
          name="content"
          onChange={handleChange}
        />
        <Box>
          <FormLabel htmlFor="image" _hover={{ cursor: "pointer" }}>
            <LuImagePlus size={25} />
          </FormLabel>
          <Input
            id="image"
            display={"none"}
            type="file"
            name="image"
            onChange={handleChange}
          ></Input>
        </Box>
        <Button
          bg="green"
          onClick={() => handleSubmit(id)}
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
