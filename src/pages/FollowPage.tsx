import SetLayout from "../layout/SetLayout";
import Follow from "../features/follow/components/Follow";
import { Box } from "@chakra-ui/react";

export default function FollowPage() {
  return (
    <>
      <SetLayout>
        <Follow />
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
