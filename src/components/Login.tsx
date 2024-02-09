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
import logo from "../assets/logo.svg";

export default function Login() {
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
          Login Circle Account
        </Text>
        <Flex direction={"column"} gap={2} mt={2}>
          <Input borderColor={"black"} placeholder="email/username" />
          <Input borderColor={"black"} placeholder="password" />
        </Flex>
        <Text textAlign={"right"} fontSize="13px" my={1}>
          Forgot password?
        </Text>
        <Button bg={"green"} textColor={"white"}>
          Login
        </Button>
        <Flex fontSize="13px" mt={1} gap="2px">
          <Text>Don't have an account?</Text>
          <Text color={"green"} textDecoration={"underline"}>
            Create Account
          </Text>
        </Flex>
      </Card>
    </Container>
  );
}
