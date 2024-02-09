import { Card, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo-dumbways.png";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Card mx={4} my={2} px="20px" py="10px">
      <Flex alignItems="center" gap={2}>
        <Text> Developed by Fani </Text>
        <Icon boxSize={2} color="gray" mt={1} viewBox="0 0 200 200">
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
        <FaGithub />
        <FaLinkedin />
        <FaFacebook />
        <FaInstagram />
      </Flex>
      <Flex alignItems="center" gap="4px" fontSize={13}>
        <Text>Powered by</Text>
        <Image w="17px" h="10px" mt="2px" src={logo} />
        <Text>Dumbways Indoensia</Text>
      </Flex>
    </Card>
  );
};

export default Footer;
