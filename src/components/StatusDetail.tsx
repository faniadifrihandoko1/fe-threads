import { Avatar, Box, Card, Flex, Link, Text } from "@chakra-ui/react";
import { IoMdArrowRoundBack } from "react-icons/io";
import React from "react";

const StatusDetail: React.FC = () => {
  return (
    <Card p={4}>
      <Flex alignItems={"center"} gap={2}>
        <Link>
          <IoMdArrowRoundBack />
        </Link>

        <Text my={1} fontSize={18} fontWeight="bold">
          Status
        </Text>
      </Flex>

      <Box mt={3}>
        <Flex gap={2} alignItems="center">
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Box>
            <Text>Fani Adi Frihandoko</Text>
            <Text color="gray" mt={-1}>
              @faniadifr
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box>reply</Box>
      <Box>status orang</Box>
    </Card>
  );
};

export default StatusDetail;
