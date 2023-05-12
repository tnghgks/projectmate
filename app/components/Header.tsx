"use client";

import { BellIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, Heading, Button, IconButton } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  return (
    <Flex
      as="header"
      maxWidth="1180px"
      justifyContent="space-between"
      alignItems="center"
      gap="2"
      h="85px"
      margin="auto"
    >
      <Box p="2">
        <Heading size="md">LOGO</Heading>
      </Box>
      <HStack gap="2px">
        <IconButton colorScheme="blue" aria-label="See menu" icon={<BellIcon />} />
        <Button colorScheme="blue">
          <Link href="/signup">Sign Up</Link>
        </Button>
        <Button colorScheme="blue">
          <Link href="/signin">Sign In</Link>
        </Button>
      </HStack>
    </Flex>
  );
}
