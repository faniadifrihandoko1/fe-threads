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
import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useFetchRegister } from "../hooks/useFetchRegister";

const Register: React.FC = () => {
  const [isMessage, setIsMessage] = useState<string>("");
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    onSubmit: () => {
      console.log(formik.values);
      formik.resetForm();
      const { fullName, email, password } = formik.values;
      mutate({ fullName, email, password });
    },
  });

  const { mutate } = useFetchRegister({
    onError: (message) => {
      setIsMessage(message);
    },
  });
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
        {isMessage && (
          <Text fontSize={13} textAlign={"center"} textColor={"red"}>
            {isMessage}
          </Text>
        )}
        <form onSubmit={formik.handleSubmit}>
          <Flex direction={"column"} gap={2} mt={2}>
            <Input
              borderColor={"black"}
              placeholder="fullname"
              name="fullName"
              onChange={formik.handleChange}
              value={formik.values.fullName}
            />
            <Input
              borderColor={"black"}
              placeholder="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <Input
              borderColor={"black"}
              placeholder="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </Flex>
          <Button
            mt={3}
            bg={"green"}
            textColor={"white"}
            w={"full"}
            type="submit"
          >
            Create{" "}
          </Button>
          <Flex fontSize={13} mt={1} gap="2px">
            <Text>Already have account?</Text>
            <ChakraLink
              as={ReactRouterLink}
              to={"/login"}
              color={"green"}
              textDecoration={"underline"}
            >
              Login
            </ChakraLink>
          </Flex>
        </form>
      </Card>
    </Container>
  );
};

export default Register;
