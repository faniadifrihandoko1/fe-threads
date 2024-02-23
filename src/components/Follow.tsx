import { Box, Card, Flex } from "@chakra-ui/react";
import React from "react";

const Follow: React.FC = () => {
  return (
    <>
      <Card py={4}>
        <Flex justify={"space-between"} px={6}>
          <Box>Followers</Box>
          <Box>Following</Box>
        </Flex>
        <Flex>
          <Box>
            <Flex></Flex>
          </Box>
        </Flex>
      </Card>
    </>
  );
};

export default Follow;
