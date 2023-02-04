"use client";
import FaqList from "@/components/FaqList";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Box, Center, Container } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function Faqs() {
  return (
    <>
      <Box as="section" style={{ fontFamily: "sans-serif" }} color="black">
        <Container
          maxW={"6xl"}
          mx="auto"
          px="20px"
          mt={{ base: "70px", lg: "90px" }}
          mb={{ base: "70px", lg: "90px" }}
          position="relative"
        >
          <Box>
            <Center
              as="p"
              fontSize={{ base: "30px", lg: "40px" }}
              fontWeight="bold"
              textAlign="center"
              letterSpacing="1px"
              color="black"
            >
              Frequently Asked Questions
            </Center>
            <Center
              as="p"
              fontSize={{ base: "10px", lg: "15px" }}
              textAlign="center"
              letterSpacing="1px"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis
              esse quos totam quidem asperiores.
            </Center>
          </Box>
          <Box
          width={{base:'150px', lg:'250px'}}
          height={{base:'150px', lg:'250px'}}
            position="absolute"
            zIndex="-1"
            top={{base:'400px', lg:'350px'}}
            right={{base:'-35px', lg:'-60px'}}
            backgroundImage="url('/paperBoat.svg')"
            backgroundSize="cover"
            backgroundPosition="top"
            backgroundRepeat="no-repeat"
          >
          </Box>
          <Box
          width={{base:'150px', lg:'250px'}}
          height={{base:'150px', lg:'250px'}}
            position="absolute"
            zIndex="-1"
            top={{base:'190px', lg:'120px'}}
            left={{base:'0px', lg:'25px'}}
            backgroundImage="url('/paperPlane.svg')"
            backgroundSize="cover"
            backgroundPosition="top"
            backgroundRepeat="no-repeat"
          >
            {/* <Image src='/paperPlane.svg' alt='' width={{base:'150', lg:'250'}} height='500' /> */}
          </Box>
        </Container>
        <Container
          maxW={"6xl"}
          mx="auto"
          px="20px"
          mt={{ base: "70px", lg: "90px" }}
          mb={{ base: "70px", lg: "90px" }}
        >
          <Box zIndex="1">
            <FaqList />
          </Box>
        </Container>
      </Box>
    </>
  );
}
