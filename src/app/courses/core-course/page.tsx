'use client'
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import MainContent from "./components/MainContent";
import VerticalCard from "./components/VerticalCard";

export default function page() {
  return (
    <>
    <Box as="section" position='relative'>
      <Box
        width="100%"
        height={{base:"200px", lg:'300px'}}
        backgroundImage="url('https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      ></Box>
      <Flex direction={{base:'column', lg:'row'}} maxW={"6xl"} mx="auto" px="20px">
      <VerticalCard />
      <MainContent />
      </Flex>
      </Box>
    </>
  );
}
