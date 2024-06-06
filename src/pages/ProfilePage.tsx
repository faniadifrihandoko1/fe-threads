import React from "react";
import SetLayout from "../layout/SetLayout";

import MyProfile from "../features/user/components/MyProfile";
import MyThread from "../features/myThread/Component/MyThread";
import { Box } from "@chakra-ui/react";

export default function ProfilePage() {
  return (
    <>
      <SetLayout>
        <MyProfile />
        <MyThread />
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
