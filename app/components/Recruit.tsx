"use client";

import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import ProjectList from "./ProjectList";

export default function Recruit() {
  return (
    <Box border="2px" borderRadius="15px" padding="20px" borderColor="#888" margin="30px 0px">
      <Heading as="h2" size="xl">
        프로젝트 모집
      </Heading>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>Project</Tab>
          <Tab>Study</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ProjectList />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
