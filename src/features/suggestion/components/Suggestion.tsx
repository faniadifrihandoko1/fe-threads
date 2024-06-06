import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import React from "react";
import useSuggestion from "../hooks/useSuggestion";
import shortUsername from "../../../utils/shortUsername";

const CardFollow: React.FC = () => {
  const { handleFollow, suggest, isloading } = useSuggestion();
  return (
    <Card my={2} px="20px" py="10px">
      <Text my={2} fontSize={18} fontWeight="bold">
        Suggested For You
      </Text>
      <Flex direction="column" gap={2}>
        {suggest.map((item) => (
          <Skeleton isLoaded={isloading}>
            <Flex justify="space-between">
              <Flex gap={2} alignItems="center">
                <Avatar name="Dan Abrahmov" src={item.photo_profile} />
                <Box>
                  <Text>{item.fullName}</Text>
                  <Text color="gray" mt={-1}>
                    {item.username ? `@${shortUsername(item.username)}` : null}
                  </Text>
                </Box>
              </Flex>
              <Button
                onClick={() => handleFollow(item.id)}
                fontSize="13px"
                fontWeight="bold"
                bg="transparent"
                border="1px"
                my="3px"
                h="30px"
                rounded="16px"
              >
                {item.is_following ? "following" : "follow"}
              </Button>
            </Flex>
          </Skeleton>
        ))}
      </Flex>
    </Card>
  );
};

export default CardFollow;
