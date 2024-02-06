import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { RiHome7Fill } from "react-icons/ri";
import { MdPersonSearch } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import logo from "../assets/logo.svg";

export default function Sidebar() {
  return (
    <Flex
      direction="column"
      height="100vh"
      py="15"
      borderRight={2}
      borderEnd="black"
      position="fixed"
    >
      <Box px="30px" w="full">
        <Flex>
          <Heading color="green" my={2}>
            Circle
          </Heading>
          <Image w="35px" ml={1} mt={2} src={logo}></Image>
        </Flex>

        <Box mt="20px">
          <Flex alignItems="center" gap="3">
            <RiHome7Fill size={25} />
            <Text fontWeight="bold">Home</Text>
          </Flex>
        </Box>
        <Box mt="20px">
          <Flex alignItems="center" gap="3">
            <MdPersonSearch size={25} />
            <Text fontWeight="bold">Search</Text>
          </Flex>
        </Box>
        <Box mt="20px">
          <Flex alignItems="center" gap="3">
            <FaRegHeart size={25} />
            <Text fontWeight="bold">Follows</Text>
          </Flex>
        </Box>
        <Box mt="20px">
          <Flex alignItems="center" gap="3">
            <CgProfile size={25} />
            <Text fontWeight="bold">Profile</Text>
          </Flex>
        </Box>

        <Button bg="green" mt="20px" w="full" rounded={20} textColor="white">
          Create Post
        </Button>
      </Box>
      <Spacer />
      <Box px="30px">
        <Flex alignItems="center" mt="10px" gap="3">
          <TbLogout2 size={25} />
          <Text fontWeight="bold">Logout</Text>
        </Flex>
      </Box>
    </Flex>
  );
}
