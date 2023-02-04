import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function HomeInitial() {
  return (
    <>
      <Box maxW={"6xl"} mx="auto" px="20px" overflow="hidden">
        <Flex width="100%" align="center" justify="space-between" mb="100px" direction={{base:'column', lg:'row'}}>
          <Box maxW={"md"}>
            <Box as="h1" fontWeight='bold' fontSize='40px'>Certified Web 3.0 and Metaverse Developer</Box>
            <Box as="p">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </Box>
            <HStack mt='50px'>
                <Button width='100%' colorScheme='orange' p='24px'>Apply</Button>
                <Button width='100%' colorScheme='gray' p='24px'>Explore Course</Button>
            </HStack>
          </Box>
          <Box mt={{base:'30px', lg:'0'}}>
            <Image src="/home_img.svg" alt="" width="600" height="500" />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
