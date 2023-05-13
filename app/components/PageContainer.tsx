"use client";

import { Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default function PageContainer({ children }: PropsWithChildren) {
  return <Flex as="section">{children}</Flex>;
}
