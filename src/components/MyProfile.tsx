import {
  Box,
  Button,
  Card,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import bgProfile from "../assets/background-profile.jpg";
import React from "react";
import { userProps } from "../types/cardType";
import { useSelector } from "react-redux";
import { RootState } from "../store/type/RootState";
import { Link } from "react-router-dom";

const MyProfile: React.FC<userProps> = () => {
  const boxBg = useColorModeValue("white !important", "#111c44 !important");
  const mainText = useColorModeValue("gray.800", "white");
  const user = useSelector((state: RootState) => state.auth);

  return (
    <Card my={2}>
      <Flex
        borderRadius="20px"
        bg={boxBg}
        px="20px"
        pt="10px"
        direction="column"
        h="fit-content"
      >
        <Text my={1} fontSize={18} fontWeight="bold">
          My Profile
        </Text>
        <Image src={bgProfile} maxW="100%" h={"100px"} borderRadius="20px" />
        <Flex w="full">
          <Flex flexDirection="column" mb="30px" w="full" px={4}>
            <Image
              src={user.photo_profile}
              border="5px solid red"
              borderColor={boxBg}
              width="68px"
              height="68px"
              mt="-38px"
              borderRadius="50%"
            />
          </Flex>
          <Link to={`/edit-profile/${user.id}`}>
            <Button
              fontSize="13px"
              fontWeight="bold"
              bg="transparent"
              border="1px"
              my="5px"
              h="30px"
              rounded="16px"
            >
              Edit Profile
            </Button>
          </Link>
        </Flex>
        <Box mt={-7} mb={5}>
          <Text fontWeight="600" color={mainText} fontSize="xl">
            {user.fullName}
          </Text>
          <Text color="gray">@{user.username}</Text>
          <Text fontSize="13px">{user.bio}</Text>
          <Flex gap={4} alignItems="center">
            <Flex alignItems="center" gap="2px">
              <Text fontWeight="bold" fontSize={"15px"}>
                {user.following_count ? user.following_count : 0}
              </Text>
              <Text fontSize="14px">Following</Text>
            </Flex>

            <Flex alignItems="center" gap="2px">
              <Text fontWeight="bold" fontSize={"15px"}>
                {user.follower_count ? user.follower_count : 0}
              </Text>
              <Text fontSize="14px" color={mainText}>
                Follower
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default MyProfile;
