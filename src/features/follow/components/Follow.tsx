import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Skeleton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import useFollow from "../hooks/useFollow";
import { IUser } from "../../../types/thread";

const Follow: React.FC = () => {
  const {
    follower,
    following,
    handleFollow,
    isloadingFollower,
    isloadingFollowing,
  } = useFollow();
  return (
    <Card mt={2}>
      <Tabs>
        <TabList>
          <Tab w={"50%"}>Follower</Tab>
          <Tab w={"50%"}>Following</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Flex direction="column" gap={2}>
              {follower.map((item: IUser, index) => (
                <Skeleton isLoaded={isloadingFollower}>
                  <Flex justify="space-between" key={index}>
                    <Flex gap={2} alignItems="center">
                      <Avatar name="Dan Abrahmov" src={item.photo_profile} />
                      <Box>
                        <Text>{item.fullName}</Text>
                        <Text color="gray" mt={-1}>
                          @{item.username}
                        </Text>
                      </Box>
                    </Flex>
                    <Button
                      onClick={() => handleFollow(Number(item.userId))}
                      fontSize="13px"
                      fontWeight="bold"
                      border="1px"
                      my="3px"
                      h="30px"
                      rounded="16px"
                    >
                      {item.is_following ? "unfollow" : "follow"}
                    </Button>
                  </Flex>
                </Skeleton>
              ))}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex direction="column" gap={2}>
              {following.map((item: IUser, index) => (
                <Skeleton isLoaded={isloadingFollowing}>
                  <Flex justify="space-between" key={index}>
                    <Flex gap={2} alignItems="center">
                      <Avatar name="Dan Abrahmov" src={item.photo_profile} />
                      <Box>
                        <Text>{item.fullName}</Text>
                        <Text color="gray" mt={-1}>
                          @{item.username}
                        </Text>
                      </Box>
                    </Flex>
                    <Button
                      onClick={() => handleFollow(Number(item.userId))}
                      fontSize="13px"
                      fontWeight="bold"
                      bg="transparent"
                      border="1px"
                      my="3px"
                      h="30px"
                      rounded="16px"
                    >
                      {item.is_following ? "unfollow" : "follow"}
                    </Button>
                  </Flex>
                </Skeleton>
              ))}
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Card>
  );
};

export default Follow;
