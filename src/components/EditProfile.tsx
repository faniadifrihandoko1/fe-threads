import { Avatar, Box, Button, Card, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

const EditProfile: React.FC = () => {
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
          <Text w={"20%"}>Name</Text>
          <Input w={"80%"} />
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={10}
          borderTop={"1px solid darkgray"}
          px={5}
          py={2}
        >
          <Text w={"20%"}>Username</Text>
          <Input w={"80%"} />
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
          <Input w={"80%"} />
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
          <Input w={"80%"} />
        </Box>
        <Box display={"flex"} justifyContent={"right"} px={5} py={2}>
          <Button bg={"green"} color={"white"}>
            Edit
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default EditProfile;
