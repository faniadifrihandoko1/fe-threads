import { Box } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../components/Sidebar";
import MyProfile from "../components/MyProfile";
import CardFollow from "../features/suggestion/components/Suggestion";
import Footer from "../components/Footer";

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
      <Box w={{ base: "100%", md: "50%" }}>{children}</Box>
      <Box w="30%" display={{ base: "none", md: "block" }} px={4}>
        <MyProfile />
        <CardFollow />
        <Footer />
      </Box>
    </Box>
  );
}
