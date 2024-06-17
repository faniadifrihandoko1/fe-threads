import {
  Box,
  Button,
  Card,
  Flex,
  Image,
  Skeleton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import bgProfile from "../../../assets/background-profile.jpg";
import React from "react";
import { userProps } from "../../../types/cardType";
import { Link, useParams } from "react-router-dom";
import { useGetUser } from "../hooks/useGetUser";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/type/RootState";

const MyProfile: React.FC<userProps> = () => {
  const boxBg = useColorModeValue("white !important", "#111c44 !important");
  const mainText = useColorModeValue("gray.800", "white");
  const user = useSelector((state: RootState) => state.auth.username);
  const { username } = useParams();
  const { users, isloading, handleFollow } = useGetUser(username);

  return (
    <Skeleton isLoaded={isloading}>
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
          <Image
            src={users?.photo_cover ? users.photo_cover : bgProfile}
            maxW="100%"
            h={"100px"}
            borderRadius="20px"
          />
          <Flex w="full">
            <Flex flexDirection="column" mb="30px" w="full" px={4}>
              <Image
                src={users?.photo_profile}
                border="5px solid red"
                borderColor={boxBg}
                width="68px"
                height="68px"
                mt="-38px"
                borderRadius="50%"
              />
            </Flex>
            {user === username && (
              <Link to={`/edit-profile/${users?.id}`}>
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
            )}
          </Flex>
          <Box mt={-7} mb={5}>
            <Box display={"flex"} gap={"13px"} alignItems={"center"}>
              <Text fontWeight="600" color={mainText} fontSize="xx-large">
                {users?.fullName}
              </Text>
              {user !== username && (
                <Button
                  fontSize="13px"
                  fontWeight="bold"
                  bg="transparent"
                  border="1px"
                  my="5px"
                  h="30px"
                  rounded="16px"
                  onClick={() =>
                    users?.id !== undefined && handleFollow(users.id)
                  }
                >
                  {users?.is_following ? "Unfollow" : "Follow"}
                </Button>
              )}
            </Box>
            <Text color="gray" fontSize="19px" mt={-2}>
              @{users?.username}
            </Text>
            <Text fontSize="16px">{users?.bio}</Text>
            <Flex gap={4} alignItems="center" mt={1}>
              <Flex alignItems="center" gap="2px">
                <Text fontWeight="bold" fontSize={"15px"}>
                  {users?.follower_count ? users?.follower_count : 0}
                </Text>
                <Text fontSize="14px">Following</Text>
              </Flex>

              <Flex alignItems="center" gap="2px">
                <Text fontWeight="bold" fontSize={"15px"}>
                  {users?.following_count ? users?.following_count : 0}
                </Text>
                <Text fontSize="14px" color={mainText}>
                  Follower
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Card>
    </Skeleton>
  );
};

export default MyProfile;
