import React from "react";
import SetLayout from "../layout/SetLayout";

import Search from "../features/search/components/Search";
import { Box } from "@chakra-ui/react";

export default function SearchPage() {
  return (
    <>
      <SetLayout>
        <Search />
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
