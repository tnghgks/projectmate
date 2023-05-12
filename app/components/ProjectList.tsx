"use client";

import { SimpleGrid } from "@chakra-ui/react";
import ProjectItem from "./ProjectItem";

export default function ProjectList() {
  return (
    <SimpleGrid columns={4} spacing={5} margin="10px 0px">
      <ProjectItem />
      <ProjectItem />
    </SimpleGrid>
  );
}
