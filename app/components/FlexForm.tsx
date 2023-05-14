"use client";

import { Button, Flex, Heading } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface IProps {
  header: string;
}

export default function FlexForm({ children, header }: PropsWithChildren<IProps>) {
  return (
    <Flex
      as="form"
      m="0 auto"
      w="100%"
      maxW="590px"
      padding="40px"
      borderRadius="20px"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="20px"
    >
      <Heading as="h3" fontSize="1.5rem">
        {header}
      </Heading>
      {children}
    </Flex>
  );
}
