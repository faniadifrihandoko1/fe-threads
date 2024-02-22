import { Avatar, Box, Button, Card, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useUpdateUser } from "../features/user/hooks/useUpdateUser";

const EditProfile: React.FC = () => {
  const { handleChange, handleSubmit, form } = useUpdateUser();
  return (
    <>
      <Card pt={4}>
        <Flex alignItems={"center"} gap={2} ml={4}>
          <NavLink to={"/"}>
            <IoMdArrowRoundBack />
          </NavLink>

          <Text my={1} fontSize={18} fontWeight="bold">
            Status
          </Text>
        </Flex>
        <Box
          display="flex"
          flexDirection="column"
          alignItems={"center"}
          gap={2}
        >
          <Avatar
            name="Dan Abrahmov"
            size={"xl"}
            src="https://bit.ly/sage-adebayo"
          />
          <Text>Change Profile Photo</Text>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={10}
          borderTop={"1px solid darkgray"}
          px={5}
          py={2}
          mt={5}
        >
          <Text w={"20%"}>Username</Text>
          <Input
            w={"80%"}
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={10}
          borderTop={"1px solid darkgray"}
          px={5}
          py={2}
        >
          <Text w={"20%"}>Full Name</Text>
          <Input
            w={"80%"}
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
          />
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={10}
          borderTop={"1px solid darkgray"}
          px={5}
          py={2}
        >
          <Text w={"20%"}>Email</Text>
          <Input
            w={"80%"}
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={10}
          borderY={"1px solid darkgray"}
          px={5}
          py={2}
        >
          <Text w={"20%"}>Bio</Text>
          <Input
            w={"80%"}
            name="bio"
            value={form.bio}
            onChange={handleChange}
            placeholder="Write something about yourself"
          />
        </Box>
        <Box display={"flex"} justifyContent={"right"} px={5} py={2}>
          <Button
            bg={"green"}
            color={"white"}
            type="submit"
            onClick={handleSubmit}
          >
            Edit
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default EditProfile;
