import React from "react";

import StatusDetail from "../features/replyThread/component/StatusDetail";
import SetLayout from "../layout/SetLayout";
import { Box } from "@chakra-ui/react";

const DetailStatus: React.FC = () => {
  return (
    <SetLayout>
      <StatusDetail />
      <Box
        display={{ base: "block", md: "none" }}
        bottom={0}
        position={"fixed"}
        w={"full"}
      ></Box>
    </SetLayout>
  );
};

export default DetailStatus;
