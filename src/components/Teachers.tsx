import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  HStack,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

interface teacher {
  name: string;
  address: string;
  desc: string;
}

export default function Teachers() {
  const teachers: Array<teacher> = [
    {
      name: "Zia Khan",
      address: "zia-khan",
      desc: "Chief Faculty Member",
    },
    {
      name: "Daniyal Nagori",
      address: "daniyal-nagori",
      desc: "Remote Faculty Member",
    },
    {
      name: "Hira Khan",
      address: "hira-khan",
      desc: "Remote Faculty Member",
    },
    {
      name: "Adil Altaf",
      address: "adil-altaf",
      desc: "Remote Faculty Member",
    },
    {
      name: "Asif Shah",
      address: "asif-shah",
      desc: "UI/UX Designing Expert",
    },
  ];
  return (
    <>
      <Box backgroundColor="#FFF6ED" py={{ base: "70px", lg: "150px" }}>
        <VStack maxW={"6xl"} mx="auto" px="20px">
          <Center
            as="p"
            fontSize={{ base: "30px", lg: "40px" }}
            textAlign="center"
            fontWeight="extrabold"
            color="black"
            fontFamily="verdana"
          >
            The Teachers
          </Center>
          <Box>
            <Center
              as="p"
              fontSize={{ base: "10px", lg: "12px" }}
              textAlign="center"
              letterSpacing="2.5px"
              mt="-12px"
            >
              Best chefs in our school
            </Center>
            <Center mt="20px" width="100%">
              <Divider
                orientation="horizontal"
                borderWidth="1px"
                borderColor="orange"
                width="60%"
              />
            </Center>
          </Box>
          <Flex
            direction={{ base: "column", sm: "row" }}
            justify={{ base: "center", lg: "space-between" }}
            width="100%"
            flexWrap="wrap"
          >
            {teachers.map((teacher) => (
              <VStack
                align="center"
                mt={{ base: "12px", md: "30px", lg: "70px" }}
              >
                <Box
                  borderRadius="50%"
                  overflow="hidden"
                  width="150px"
                  height="150px"
                >
                  <Image
                    src={`/${teacher.address}.jpeg`}
                    alt=""
                    width="150"
                    height="150"
                  />
                </Box>
                <Box
                  as="p"
                  letterSpacing="1.5px"
                  fontWeight="bold"
                  fontSize="20px"
                  color="#1C1C33"
                >
                  {teacher.name}
                </Box>
                <Box
                  as="p"
                  letterSpacing="1.5px"
                  fontWeight="medium"
                  fontSize="15px"
                  color="#4E4E65"
                  whiteSpace="nowrap"
                >
                  {teacher.desc}
                </Box>
                <Link href={`/faculty/${teacher.address}`}>
                  <HStack
                    mb={{ base: "18px" }}
                    _hover={{ textDecoration: "underline", fontSize: "20px"}}
                    transition='ease-in-out'
                  >
                    <Box
                      as="p"
                      letterSpacing="1px"
                      fontWeight="medium"
                      fontSize="13px"
                      color="gray.500"
                    >
                      My Bio
                    </Box>
                    <BsFillArrowRightCircleFill color="gray.100" />
                  </HStack>
                </Link>
              </VStack>
            ))}
          </Flex>
        </VStack>
      </Box>
    </>
  );
}
