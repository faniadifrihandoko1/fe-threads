import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.svg";

const Register = () => {
  return (
    <Container
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      h="100vh"
    >
      <Card p={4} w={"300px"}>
        <Box>
          <Flex justifyContent={"center"}>
            <Heading color="green" my={4}>
              Circle
            </Heading>
            <Image w="35px" ml={1} mt={2} src={logo} />
          </Flex>
        </Box>
        <Text fontWeight="bold" textAlign={"center"}>
          Create Account Circle
        </Text>
        <Flex direction={"column"} gap={2} mt={2}>
          <Input borderColor={"black"} placeholder="fullname" />
          <Input borderColor={"black"} placeholder="email" />
          <Input borderColor={"black"} placeholder="password" />
        </Flex>
        <Button mt={3} bg={"green"} textColor={"white"}>
          Create{" "}
        </Button>
        <Flex fontSize={15} mt={1} gap="2px">
          <Text>Already have account?</Text>
          <Text color={"green"} textDecoration={"underline"}>
            Login
          </Text>
        </Flex>
      </Card>
    </Container>
  );
};

export default Register;
