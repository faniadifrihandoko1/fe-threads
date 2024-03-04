import { Avatar, Box, Button, Card, Flex, Input, Text } from "@chakra-ui/react";

import useSearch from "../hooks/useSearch";

export default function Search() {
  const { handleSearch, users, handleFollow } = useSearch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  return (
    <Card p={2} mt={2}>
      <Input
        placeholder="cari berdasarkan username"
        name="search"
        onChange={handleSearch}
      />
      <Flex direction="column" gap={2} mt={5}>
        {users.map((user) => (
          <Flex justify="space-between">
            <Flex gap={2} alignItems="center">
              <Avatar name="Dan Abrahmov" src={user.photo_profile} />
              <Box>
                <Text>{user.fullName}</Text>
                <Text color="gray" mt={-1}>
                  {user.username}
                </Text>
              </Box>
            </Flex>
            <Button
              onClick={() => handleFollow(Number(user.id))}
              fontSize="13px"
              fontWeight="bold"
              bg="transparent"
              border="1px"
              my="3px"
              h="30px"
              rounded="16px"
            >
              {user.is_following ? "following" : "follow"}
            </Button>
          </Flex>
        ))}
      </Flex>
    </Card>
  );
}
