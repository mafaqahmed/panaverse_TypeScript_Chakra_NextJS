"use client";
import { Box, Button, Flex, HStack, List, ListIcon, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";

interface outcome {
  title: string;
  link: string;
}

export default function About() {
  const outcomes: Array<outcome> = [
    {
      title: "Top 5 Metaverse jobs that will rule the future of tech industry",
      link: "https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms",
    },
    {
      title: "Blockchain Developer Salary - Jun 2022",
      link: "https://web3.career/web3-salaries/blockchain-developer",
    },
    {
      title: "Web3 Salaries Soar to $750,000 for Rank-and-File Devs",
      link: "https://thedefiant.io/web3-soaring-salaries/",
    },
    {
      title:
        "The Metaverse and Blockchain: Navigating the Internet's Uncharted Waters",
      link: "https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022",
    },
    {
      title: "How To Become Metaverse Developer: Scope, Skills, and Salary",
      link: "https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/",
    },
  ];
  return (
    <>
      <Box
        as="section"
        fontFamily="verdana"
        mt={{ base: "100px", lg: "150px" }}
      >
        <Box py={{base:'70px', lg:'100px'}}>
        <VStack maxW={"4xl"} mx="auto" align={"center"} px="30px">
          <Text
            fontSize={{ base: "30px", lg: "40px" }}
            textAlign="center"
            fontWeight="extrabold"
            color="black"
          >
            The Program in a Nutshell
          </Text>
          <Text
            fontSize={{ base: "20px", lg: "25px" }}
            textAlign="center"
            fontWeight="bold"
            color="#002C6A"
            letterSpacing="3px"
          >
            Earn While You Learn
          </Text>
          <Text textAlign="center" fontWeight="medium" color="gray.600">
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within six months of the program's beginning. It resembles a
            cross between a corporate venture and an educational project.
          </Text>
        </VStack>
        </Box>
        <Box backgroundColor='#FFF6ED' py={{base:'70px', lg:'100px'}}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          maxW={"6xl"}
          mx="auto"
          align={"center"}
          justify="center"
          px="30px"
          mt={{ base: "70px", lg: "100px" }}
        >
          <Box width={{ lg: "50%" }} mr={{ base: "0", lg: "100px" }} mb={{ base: "0", lg: "100px" }}>
            <Text
              fontSize={{ base: "30px", lg: "35px" }}
              mb={{ base: "20px", lg: "35px" }}
              textAlign="left"
              fontWeight="bold"
              color="black"
            >
              Course <Text as="span" color="orange">Config</Text>uration
            </Text>
            <Text fontSize="15px" color="gray.600">
              This curriculum is intended for beginners who want to learn
              software development from the ground up. The first three quarters
              are shared by all specialties and are dedicated to studying
              Object-Oriented Programming and cutting-edge Full-Stack Web 2.0
              development. It is going to be a fifteen-month-long hybrid program
              that includes both onsite and online classes and is divided into
              five quarters of 13 weeks each. The emphasis will be on hands-on
              learning by educating students to produce projects. To accommodate
              everyone, courses will be held primarily on weekends or after 6:00
              p.m. (Pakistan Time) on weekdays.
            </Text>
            <HStack mt="30px">
              <Button width="100%" colorScheme="orange" p="24px">
                Apply
              </Button>
              <Button width="100%" colorScheme="gray" p="24px">
                Explore More
              </Button>
            </HStack>
          </Box>
          <Box width={{base:'400px', sm: "500px" }}>
            <Image src="/courseStructure.svg" alt="" width="500" height="500" />
          </Box>
        </Flex>
        </Box>
        <Box>
        <Flex
          direction={{ base: "column", lg: "row" }}
          maxW={"6xl"}
          mx="auto"
          alignContent="center"
          justify="center"
          px="30px"
          mt={{ base: "70px", lg: "100px" }}
        >
          <Box width={{ lg: "500px" }} mr={{ base: "0", lg: "100px" }} mb={{ base: "0", lg: "100px" }}>
            <Image src="/program.svg" alt="" width="500" height="500" />
          </Box>
          <Box width={{ lg: "50%" }}>
            <Text
              fontSize={{ base: "30px", lg: "35px" }}
              mb={{ base: "20px", lg: "35px" }}
              textAlign="left"
              fontWeight="bold"
              color="black"
            >
              You will <Text as="span" color="orange">Achieve</Text>
            </Text>
            <Text fontSize="15px" color="gray.600">
              The graduates of this program will own products (Full-Stack App
              Templates, AR and VR Experiences, and APIs) that are marketed
              globally by the Panaverse DAO and, if they like, will also be able
              to start off by offering services at a rate of $50 per hour
              ($96,000 per year). This would give Pakistani professionals and
              students a fantastic opportunity to better their financial
              situation while also giving the economy a much-needed boost by
              expanding software exports.
            </Text>
            <List fontSize="13px" color="blue.600" spacing={3} mt='8px'>
              {outcomes.map((item) => (
                <ListItem _hover={{textDecoration:'underline'}}>
                  <Link href={item.link}>
                    <HStack>
                      <Box as="p">{item.title}</Box>
                      <FaExternalLinkAlt />
                    </HStack>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Flex>
        </Box>
      </Box>
    </>
  );
}
