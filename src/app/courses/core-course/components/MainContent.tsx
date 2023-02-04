import {
  Box,
  Flex,
  HStack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Quarter1 from "./Quarter1";

export default function MainContent() {
  const [quarter, setQuarter] = useState("1");
  return (
    <>
      <Flex direction="column" justifyContent="left" ml="30px" mt="30px">
        <Text color="orange.900" fontWeight="bold" fontSize="20px">
          Course Description
        </Text>
        <Text color="gray.600">
          We will start the program by learning the fundamentals of
          Object-Oriented programming using JavaScript and TypeScript. We will
          also understand the latest Web trends i.e. Web 3.0 and Metaverse
          concepts and try to understand their working from the perspective of
          the users.
        </Text>
        <HStack
          mt="30px"
          fontSize="20px"
          color="orange.600"
          fontWeight="bold"
          divider={<StackDivider borderColor="gray.400" />}
          justifyContent="space-evenly"
        >
          <Text
            cursor="pointer"
            _hover={{ transform: "scale(1.1)" }}
            onClick={() => {
              setQuarter("1");
            }}
          >
            Quarter 01
          </Text>
          <Text
            cursor="pointer"
            _hover={{ transform: "scale(1.1)" }}
            onClick={() => {
              setQuarter("2");
            }}
          >
            Quarter 02
          </Text>
          <Text
            cursor="pointer"
            _hover={{ transform: "scale(1.1)" }}
            onClick={() => {
              setQuarter("3");
            }}
          >
            Quarter 03
          </Text>
          <Text
            cursor="pointer"
            _hover={{ transform: "scale(1.1)" }}
            onClick={() => {
              setQuarter("4");
            }}
          >
            Quarter 04
          </Text>
        </HStack>
        {quarter === "1" && (
          <Quarter1 />
        )}
        {quarter === "2" && (
          <VStack>
            <Box>Quarter 02</Box>
          </VStack>
        )}
        {quarter === "3" && (
          <VStack>
            <Box>Quarter 03</Box>
          </VStack>
        )}
        {quarter === "4" && (
          <VStack>
            <Box>Quarter 04</Box>
          </VStack>
        )}
      </Flex>
    </>
  );
}
