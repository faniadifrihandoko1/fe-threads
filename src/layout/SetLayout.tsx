import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../components/Sidebar";
import MyProfile from "../components/MyProfile";
import CardFollow from "../components/CardFollow";
import Footer from "../components/Footer";

interface isLayoutProps {
  children: React.ReactNode;
}
export default function SetLayout({ children }: isLayoutProps) {
  return (
    <Flex w="full">
      <Box w="20%" display={{ base: "none", md: "block" }}>
        <Sidebar />
      </Box>
      <Box w={{ base: "100%", md: "50%" }} py={2}>
        {children}
      </Box>
      <Box w="30%" display={{ base: "none", md: "block" }}>
        <MyProfile />
        <CardFollow />
        <Footer />
      </Box>
    </Flex>
  );
}
