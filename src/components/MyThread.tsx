import {
  Card,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import EditProfile from "./EditProfile";
import CardPost from "../features/thread/components/CardPost";

export default function MyThread() {
  return (
    <Card mt={2}>
      <Tabs>
        <TabList>
          <Tab w={"50%"}>Thread</Tab>
          <Tab w={"50%"}>Following</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {" "}
            <CardPost />
          </TabPanel>
          <TabPanel>
            <EditProfile />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Card>
  );
}
