"use client";

import { Center, Flex, VisuallyHidden } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface IProps {
  pageName: string;
}

export default function PageContainer({ children, pageName }: PropsWithChildren<IProps>) {
  return (
    <Center as="section" w="100%" maxW="1180px" m="auto" h="calc(100vh - 165px)">
      <VisuallyHidden>{pageName}</VisuallyHidden>
      {children}
    </Center>
  );
}
