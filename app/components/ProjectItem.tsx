"use client";
import { BellIcon, AddIcon, StarIcon } from "@chakra-ui/icons";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Avatar,
  Box,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";

export default function ProjectItem() {
  return (
    <Card maxW="md" as="article">
      <CardHeader as="header">
        <Flex>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Box>
              <Heading size="sm" as="h3">
                프로젝트 이름
              </Heading>
              <Text>모집자 이름</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>프로젝트 설명</CardBody>
      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        gap="10px"
        sx={{
          "& > button": {
            w: "50px",
          },
        }}
      >
        <IconButton aria-label="Join" icon={<AddIcon />}></IconButton>
        <IconButton aria-label="Subscribe" icon={<BellIcon />}></IconButton>
        <IconButton aria-label="Star" icon={<StarIcon />}></IconButton>
      </CardFooter>
    </Card>
  );
}
