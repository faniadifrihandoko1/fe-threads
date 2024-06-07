import { Box } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../components/Sidebar";

import CardFollow from "../features/suggestion/components/Suggestion";
import Footer from "../components/Footer";
import SideProfile from "../components/SideProfile";

interface isLayoutProps {
  children: React.ReactNode;
}
export default function SetLayout({ children }: isLayoutProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const token: any = localStorage.getItem("token");
  // if (token === null) {
  //   window.location.href = "/login";
  // }

  return (
    <Box display={"flex"} w="full">
      <Box w="20%" display={{ base: "none", md: "block" }}>
        <Sidebar />
      </Box>
      <Box
        className="side-center"
        w={{ base: "100%", md: "50%" }}
        position="relative"
      >
        <Box h={{ base: "calc(100vh - 60px)", md: "auto" }} overflowY="auto">
          {children}
        </Box>
        <Box
          display={{ base: "block", md: "none" }}
          bottom={0}
          position={"fixed"}
          w={"full"}
          zIndex={2}
        >
          <Sidebar />
        </Box>
      </Box>
      <Box w="30%" display={{ base: "none", md: "block" }} px={4}>
        <SideProfile />
        <CardFollow />
        <Footer />
      </Box>
    </Box>
  );
}
