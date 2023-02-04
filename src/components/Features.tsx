
import { Box, Flex, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <>
      <Box backgroundColor="white" py="120px">
        <Box
          as="p"
          textAlign="center"
          fontWeight="extrabold"
          fontSize={{ base: "30px", lg: "40px" }}
          color="black"
          fontFamily="verdana"
          mb={{ base: "30px", lg: "50px" }}
        >
          What is included?
        </Box>
        <Flex
          alignContent="center"
          justify="space-between"
          direction={{ base: "column", lg: "row" }}
          maxW={"6xl"}
          mx="auto"
          px="20px"
        >
          <Flex
            direction="column"
            align="center"
            borderRadius="5px"
            shadow="rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
            px="30px"
            py="70px"
            mx="30px"
            _hover={{transform: 'scale(1.02)'}}
            transition="ease-in-out"
            transitionDuration='0.1s'
          >
            <Image src="/community.svg" alt="" width="60" height="60" />
            <Box as="p" fontWeight="semibold" fontSize="18px" my="25px">
              10k+ Community
            </Box>
            <Box as="p" textAlign="center" color="gray.500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque a
              nam ducimus nobis corrupti
            </Box>
          </Flex>
          <Flex
            direction="column"
            align="center"
            borderRadius="5px"
            shadow="rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
            px="30px"
            py="70px"
            mx="30px"
            my={{ base: "20px", lg: "0" }}
            transform= {{lg:'scale(1.1)'}}
            _hover={{transform: 'scale(1.12)'}}
            transition="ease-in-out"
            transitionDuration='0.1s'
          >
            <Image src="/teacher.svg" alt="" width="55" height="55" />
            <Box as="p" fontWeight="semibold" fontSize="20px" my="25px">
              Top Teachers
            </Box>
            <Box as="p" textAlign="center" color="gray.500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque a
              nam ducimus nobis corrupti
            </Box>
          </Flex>
          <Flex
            direction="column"
            align="center"
            borderRadius="5px"
            shadow="rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
            px="30px"
            py="70px"
            mx="30px"
            _hover={{transform: 'scale(1.02)'}}
            transition="ease-in-out"
            transitionDuration='0.1s'
          >
            <Box>
              <Image src="/courses.svg" alt="" width="60" height="60" />
            </Box>
            <Box as="p" fontWeight="semibold" fontSize="20px" my="25px">
              Trending Courses
            </Box>
            <Box as="p" textAlign="center" color="gray.500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque a
              nam ducimus nobis corrupti
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
