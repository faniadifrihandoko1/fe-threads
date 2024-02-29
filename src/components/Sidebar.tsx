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
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AUTH_LOGOUT } from "../store/rootRecuder";

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleLogout() {
    dispatch(AUTH_LOGOUT());
    navigate("/login");
  }
  return (
    <Flex
      borderRadius={"1%"}
      mt={2}
      direction={{ base: "row", md: "column" }}
      height={{ base: "", md: "100vh" }}
      bg={"white"}
      py="15"
      borderRight={2}
      borderEnd="black"
      position={{ base: "relative", md: "fixed" }}
      w={{ base: "", md: "19%" }}
    >
      <Box px="30px" w="full">
        <Flex
          direction={{ base: "row", md: "column" }}
          justifyContent="space-around"
        >
          <Flex display={{ base: "none", md: "flex" }} ml={4}>
            <Heading color="green" my={2}>
              Circle
            </Heading>
            <Image w="40px" ml={1} mt={2} src={logo} />
          </Flex>

          <Box mt="10px">
            <NavLink to={"/"}>
              <Button alignItems="center" gap="3" bg="transparent">
                <RiHome7Fill size={25} />
                <Text
                  fontWeight="semibold"
                  display={{ base: "none", md: "block" }}
                >
                  Home
                </Text>
              </Button>
            </NavLink>
          </Box>
          <Box mt="10px">
            <NavLink to={"/search"}>
              <Button alignItems="center" gap="3" bg="transparent">
                <MdPersonSearch size={25} />
                <Text
                  fontWeight="semibold"
                  display={{ base: "none", md: "block" }}
                >
                  Search
                </Text>
              </Button>
            </NavLink>
          </Box>
          <Box mt="10px">
            <NavLink to={"/follows"}>
              <Button alignItems="center" gap="3" bg="transparent">
                <FaRegHeart size={25} />
                <Text
                  fontWeight="semibold"
                  display={{ base: "none", md: "block" }}
                >
                  Follows
                </Text>
              </Button>
            </NavLink>
          </Box>

          <Box mt="10px">
            <NavLink to={"/profile"}>
              <Button alignItems="center" gap="3" bg="transparent">
                <CgProfile size={25} />
                <Text
                  fontWeight="semibold"
                  display={{ base: "none", md: "block" }}
                >
                  Profile
                </Text>
              </Button>
            </NavLink>
          </Box>

          <Button
            bg="green"
            mt="20px"
            w="full"
            rounded={20}
            textColor="white"
            display={{ base: "none", md: "block" }}
          >
            Create Post
          </Button>
        </Flex>
      </Box>
      <Spacer />
      <Box px="30px" display={{ base: "none", md: "block" }}>
        <Button
          alignItems="center"
          onClick={handleLogout}
          mt="10px"
          gap="3"
          bg="transparent"
        >
          <TbLogout2 size={25} />
          Logout
        </Button>
      </Box>
    </Flex>
  );
}
