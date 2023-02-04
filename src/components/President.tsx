import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export default function President() {
  return (
    <>
      <Box as="section" backgroundColor={"#FFF6ED"} py={{base:'70px', lg:'100px'}}>
        <Flex align="center" maxW={"6xl"} mx="auto" px="20px" direction={{base:'column', lg:'row'}}>
          <Box mr={{ base: "0", lg: "100px" }} mb={{ base: "50px", lg: "0" }}>
            <Box
              width={{base: '300px', lg:"500px"}}
              height={{base:"350px", lg:'550px'}}
              overflow="hidden"
              borderTopRadius="50%"
              backgroundImage="url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/President_of_Pakistan_Dr_Arif_Alvi_%28cropped%29.jpg/1200px-President_of_Pakistan_Dr_Arif_Alvi_%28cropped%29.jpg')"
              backgroundSize="cover"
              backgroundPosition="top"
              backgroundRepeat="no-repeat"
            ></Box>
          </Box>
          <Flex direction="column" justify="center">
            <Box
              as="p"
              fontWeight="extrabold"
              fontSize={{base: '25px', lg:"40px"}}
              color="black"
              fontFamily="verdana"
            >
              Supervised by the President of Pakistan - Dr. Arif Alvi
            </Box>
            <Box as="p" mt="20px">
              Dr. Arif Alvi was sworn in as the 13th President of Islamic
              Republic of Pakistan on 9th September 2018.
            </Box>
            <Box as="p" mt="20px">
              President Dr. Arif Alvi has been a renowned professional and has
              held many important positions in the field of Dentistry. He
              remained Dean of Orthodontics, College of Physicians and Surgeons
              of Pakistan, President, Pakistan Dental Association (1997-2001),
              Pakistan Association of Orthodontists (2005), Asia Pacific Dental
              Federation (2006-07) and Councilor of the World Dental Federation
              (2007-2013). Through his sheer hard work in the World Dental
              Federation, he was able to get the declaration of 20th March as
              World Oral Health Day. He is also an author of a book, theses, and
              many articles.
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
