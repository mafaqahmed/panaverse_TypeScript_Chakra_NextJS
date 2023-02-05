"use client";
import CourseCard from "@/components/CourseCards";
import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function Courses() {
  return (
    <>
      <Box as="section" fontFamily="verdana, sans-serif" maxW={"6xl"} mx="auto" px="30px">
        <Box py={{ base: "70px", lg: "100px" }}>
          <VStack  align={"center"}>
            <Text
              fontSize={{ base: "25px", lg: "40px" }}
              textAlign="center"
              fontWeight="extrabold"
              color="black"
            >
              Certified Web 3.0 and Metaverse Developer
            </Text>
            <Text
              fontSize={{ base: "17px", lg: "25px" }}
              textAlign="center"
              fontWeight="bold"
              color="orange.900"
            >
              Program to Get Ready for the Next Generation of the Internet
            </Text>
            <Text
              fontSize={{ base: "12px", lg: "20px" }}
              textAlign="center"
              fontWeight="bold"
              color="orange.7800"
            >
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </Text>
          </VStack>
        </Box>
        <Box>
        <CourseCard />
        </Box>
      </Box>
    </>
  );
}
