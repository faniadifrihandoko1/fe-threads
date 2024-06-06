import React from "react";
import SetLayout from "../layout/SetLayout";
import EditProfile from "../features/user/components/EditProfile";
import { Box } from "@chakra-ui/react";

export default function ProfileEdit() {
  return (
    <>
      <SetLayout>
        <EditProfile />
        <Box
          display={{ base: "block", md: "none" }}
          bottom={0}
          position={"fixed"}
          w={"full"}
        ></Box>
      </SetLayout>
    </>
  );
}
