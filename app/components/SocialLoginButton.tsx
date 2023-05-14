"use client";

import { Button, ButtonProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default function SocialLoginButton({ children }: PropsWithChildren) {
  return (
    <Button w="50%" gap="15px" colorScheme="blue" variant="outline">
      {children}
    </Button>
  );
}
