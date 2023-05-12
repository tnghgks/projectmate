"use client";

import { Box } from "@chakra-ui/react";
import FilterList from "./components/FilterList";
import Recruit from "./components/Recruit";

export default function Home() {
  return (
    <Box
      as="main"
      maxWidth="1180px"
      justifyContent="space-between"
      alignItems="center"
      gap="2"
      margin="auto"
    >
      <FilterList />
      <Recruit />
    </Box>
  );
}
