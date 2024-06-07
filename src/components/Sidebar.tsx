import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { GoHome, GoHomeFill } from "react-icons/go";

import { MdOutlinePersonSearch, MdPersonSearch } from "react-icons/md";
import {
  IoHeartOutline,
  IoHeartSharp,
  IoPersonOutline,
  IoPersonSharp,
} from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import logo from "../assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_LOGOUT } from "../store/rootRecuder";
import { RootState } from "../store/type/RootState";

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const username = useSelector((state: RootState) => state.auth.username);

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
      position="fixed"
      bottom={{ base: 0, md: "auto" }}
      w={{ base: "100%", md: "19%" }}
    >
      <Box px="10px" w="full">
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

          <Box>
            <NavLink to={"/"}>
              {({ isActive }) => (
                <Button alignItems="center" gap="3" bg="transparent">
                  {isActive ? <GoHomeFill size={25} /> : <GoHome size={25} />}
                  <Text
                    fontWeight={isActive ? "bold" : "semibold"}
                    display={{ base: "none", md: "block" }}
                  >
                    Home
                  </Text>
                </Button>
              )}
            </NavLink>
          </Box>
          <Box>
            <NavLink to={"/search"}>
              {({ isActive }) => (
                <Button alignItems="center" gap="3" bg="transparent">
                  {isActive ? (
                    <MdPersonSearch size={25} />
                  ) : (
                    <MdOutlinePersonSearch size={25} />
                  )}
                  <Text
                    fontWeight={isActive ? "bold" : "semibold"}
                    display={{ base: "none", md: "block" }}
                  >
                    Search
                  </Text>
                </Button>
              )}
            </NavLink>
          </Box>
          <Box>
            <NavLink to={"/follows"}>
              {({ isActive }) => (
                <Button alignItems="center" gap="3" bg="transparent">
                  {isActive ? (
                    <IoHeartSharp size={25} />
                  ) : (
                    <IoHeartOutline size={25} />
                  )}
                  <Text
                    fontWeight={isActive ? "bold" : "semibold"}
                    display={{ base: "none", md: "block" }}
                  >
                    Follows
                  </Text>
                </Button>
              )}
            </NavLink>
          </Box>

          <Box>
            <NavLink to={`/profile/${username}`}>
              {({ isActive }) => (
                <Button alignItems="center" gap="3" bg="transparent">
                  {isActive ? (
                    <IoPersonSharp size={25} />
                  ) : (
                    <IoPersonOutline size={25} />
                  )}
                  <Text
                    fontWeight={isActive ? "bold" : "semibold"}
                    display={{ base: "none", md: "block" }}
                  >
                    Profile
                  </Text>
                </Button>
              )}
              {/* <Button alignItems="center" gap="3" bg="transparent">
                <CgProfile size={25} />
                <Text
                  fontWeight="semibold"
                  display={{ base: "none", md: "block" }}
                >
                  Profile
                </Text>
              </Button> */}
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
