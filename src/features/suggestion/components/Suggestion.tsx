import { Avatar, Box, Button, Card, Flex, Text } from "@chakra-ui/react";
import React from "react";
import useSuggestion from "../hooks/useSuggestion";

const CardFollow: React.FC = () => {
  const { handleFollow, suggest } = useSuggestion();

  return (
    <Card my={2} px="20px" py="10px">
      <Text my={2} fontSize={18} fontWeight="bold">
        Suggested For You
      </Text>
      <Flex direction="column" gap={2}>
        {suggest.map((item, index) => (
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
              onClick={() => handleFollow(item.id, item.is_following)}
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
        ))}
      </Flex>
    </Card>
  );
};

export default CardFollow;
