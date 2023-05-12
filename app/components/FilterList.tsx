"use client";

import {
  Box,
  Button,
  HStack,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

const frontendSkills = ["1", "2", "3", "4", "5"];

const backendSkills = ["1", "2", "3", "4", "5"];

const mobileSkills = ["1", "2", "3", "4", "5"];

export default function FilterList() {
  return (
    <Box border="2px" borderRadius="15px" padding="20px" borderColor="#888">
      <Heading as="h2" size="xl">
        관심 기술
      </Heading>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>Frontend</Tab>
          <Tab>Backend</Tab>
          <Tab>Mobile</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <HStack gap={5}>
              {frontendSkills.map((v, i) => (
                <Button key={i} variant={"solid"} colorScheme="blue">
                  {v}
                </Button>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <HStack gap={5}>
              {backendSkills.map((v, i) => (
                <Button key={i} variant={"solid"} colorScheme="blue">
                  {v}
                </Button>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <HStack gap={5}>
              {mobileSkills.map((v, i) => (
                <Button key={i} variant={"solid"} colorScheme="blue">
                  {v}
                </Button>
              ))}
            </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
