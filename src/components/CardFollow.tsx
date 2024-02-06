import { Avatar, Box, Button, Card, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const CardFollow: React.FC = () => {
  const [follow, setFollow] = useState<boolean>(false);

  const handleFollow = () => {
    if (!follow) {
      setFollow(true);
    } else {
      setFollow(false);
    }
  };
  return (
    <Card mx={4} my={2} px="20px" py="10px">
      <Text my={2} fontSize={18} fontWeight="bold">
        Suggested For You
      </Text>
      <Flex direction="column" gap={2}>
        <Flex justify="space-between">
          <Flex gap={2} alignItems="center">
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Box>
              <Text>Fani Adi Frihandoko</Text>
              <Text color="gray" mt={-1}>
                @faniadifr
              </Text>
            </Box>
          </Flex>
          <Button
            onClick={handleFollow}
            fontSize="13px"
            fontWeight="bold"
            bg="transparent"
            border="1px"
            my="3px"
            h="30px"
            rounded="16px"
          >
            {follow ? "following" : "follow"}
          </Button>
        </Flex>
        <Flex justify="space-between">
          <Flex gap={2} alignItems="center">
            <Avatar name="Dan Abrahmov" src="https://bit.ly/sage-adebayo" />
            <Box>
              <Text>Septian David</Text>
              <Text color="gray" mt={-1}>
                @septdvd
              </Text>
            </Box>
          </Flex>
          <Button
            fontSize="13px"
            fontWeight="bold"
            bg="transparent"
            border="1px"
            my="3px"
            h="30px"
            rounded="16px"
          >
            follow
          </Button>
        </Flex>
        <Flex justify="space-between">
          <Flex gap={2} alignItems="center">
            <Avatar name="Dan Abrahmov" src="https://bit.ly//kent-c-dodds" />
            <Box>
              <Text>Farhan Alfariz</Text>
              <Text color="gray" mt={-1}>
                @farhnlfrz
              </Text>
            </Box>
          </Flex>
          <Button
            fontSize="13px"
            fontWeight="bold"
            bg="transparent"
            border="1px"
            my="3px"
            h="30px"
            rounded="16px"
          >
            follow
          </Button>
        </Flex>
        <Flex justify="space-between">
          <Flex gap={2} alignItems="center">
            <Avatar name="Dan Abrahmov" src="https://bit.ly/ryan-florence" />
            <Box>
              <Text>Hisyammudin</Text>
              <Text color="gray" mt={-1}>
                @hisyammdn
              </Text>
            </Box>
          </Flex>
          <Button
            fontSize="13px"
            fontWeight="bold"
            bg="transparent"
            border="1px"
            my="3px"
            h="30px"
            rounded="16px"
          >
            follow
          </Button>
        </Flex>
        <Flex justify="space-between">
          <Flex gap={2} alignItems="center">
            <Avatar name="Dan Abrahmov" src="https://bit.ly/prosper-baba" />
            <Box>
              <Text>M Rezza Ahmad</Text>
              <Text color="gray" mt={-1}>
                @rezzahmd
              </Text>
            </Box>
          </Flex>
          <Button
            fontSize="13px"
            fontWeight="bold"
            bg="transparent"
            border="1px"
            my="3px"
            h="30px"
            rounded="16px"
          >
            follow
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default CardFollow;
