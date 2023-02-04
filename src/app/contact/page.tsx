"use client";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BiMapPin } from "react-icons/bi";
import { IoMdMailUnread } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";

export default function Contact() {
  return (
    <>
      <Box as="section" style={{ fontFamily: "sans-serif" }} color="black">
        <Container
          maxW={"6xl"}
          mx="auto"
          px="20px"
          mt={{ base: "70px", lg: "90px" }}
          mb={{ base: "70px", lg: "90px" }}
        >
          <Box as="div">
            <Center
              as="p"
              fontSize={{ base: "30px", lg: "40px" }}
              fontWeight="bold"
              textAlign="center"
              letterSpacing="1px"
              color="black"
            >
              We'd love to hear from you
            </Center>
            <Center
              as="p"
              fontSize={{ base: "10px", lg: "15px" }}
              textAlign="center"
              letterSpacing="1px"
            >
              Our friendly team is always here to chat.
            </Center>
          </Box>
          <Box width="100%" mt={{ base: "70px", lg: "90px" }}>
            <Stack
              direction={{ base: "column", md: "row" }}
              width="100%"
              spacing={{base: '50px',lg:"auto"}}
              align='center'
            >
              <VStack width={{ base: "75%", md: "30%" }}>
                <BiMapPin fontSize="50px" color="#FE7D55" />
                <Center
                  as="p"
                  fontSize="20px"
                  fontWeight="semibold"
                  textAlign="center"
                >
                  Office Address
                </Center>
                <Center
                  as="p"
                  fontSize="15px"
                  textAlign="center"
                  color="#333637"
                >
                  4517 Washington Ave. Manchester,Kentucky 39495
                </Center>
              </VStack>
              <VStack width={{ base: "75%", md: "30%" }}>
                <IoMdMailUnread fontSize="50px" color="#FE7D55" />
                <Center
                  as="p"
                  fontSize="20px"
                  fontWeight="semibold"
                  textAlign="center"
                >
                  Chat to Support
                </Center>
                <Center
                  as="p"
                  fontSize="15px"
                  textAlign="center"
                  color="#333637"
                >
                  support@panaverse.com
                </Center>
                <Center
                  as="p"
                  fontSize="15px"
                  textAlign="center"
                  color="#333637"
                >
                  info@panaverse.com
                </Center>
              </VStack>
              <VStack width={{ base: "75%", md: "30%" }}>
                <FiPhoneCall fontSize="50px" color="#FE7D55" />
                <Center
                  as="p"
                  fontSize="20px"
                  fontWeight="semibold"
                  textAlign="center"
                >
                  Call us
                </Center>
                <Center
                  as="p"
                  fontSize="15px"
                  textAlign="center"
                  color="#333637"
                  letterSpacing="2px"
                >
                  0000 0000000
                </Center>
                <Center
                  as="p"
                  fontSize="15px"
                  textAlign="center"
                  color="#333637"
                  letterSpacing="2px"
                >
                  0000 0000000
                </Center>
              </VStack>
            </Stack>
          </Box>
        </Container>
        <Container
          maxW={"6xl"}
          mx="auto"
          px="20px"
          mt={{ base: "70px", lg: "90px" }}
          mb={{ base: "70px", lg: "90px" }}
        >
          <Box as="div">
            <Center
              as="p"
              fontSize={{ base: "30px", lg: "40px" }}
              fontWeight="bold"
              textAlign="center"
              letterSpacing="1px"
              color="black"
            >
              Get in touch
            </Center>
            <Center
              as="p"
              fontSize={{ base: "10px", lg: "15px" }}
              textAlign="center"
              letterSpacing="1px"
            >
              We'd love to hear from you. Please fill out this form.
            </Center>
          </Box>
          <Box width={{base:'75%', lg:'50%'}} mx='auto'>
            <form>
              <Flex justifyContent='space-between' mt='30px' direction={{base:'column', md:'row'}}>
              <FormControl isRequired mr='15px'>
                <FormLabel>First name</FormLabel>
                <Input type="text" placeholder="Enter your first name here" _placeholder={{ color: '#AEAEAE' }}/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Last name</FormLabel>
                <Input type="text" placeholder="Enter your last name here" _placeholder={{ color: '#AEAEAE' }}/>
              </FormControl>
              </Flex>
              <Flex justifyContent='space-between' mt='25px' direction={{base:'column', md:'row'}}>
              <FormControl isRequired mr='15px'>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Enter your email here" _placeholder={{ color: '#AEAEAE' }}/>
              </FormControl>
              <FormControl>
                <FormLabel>Phone number</FormLabel>
                <Input
                  type="number"
                  placeholder="Enter your phone number here"
                  _placeholder={{ color: '#AEAEAE' }}
                />
              </FormControl>
              </Flex>
              <FormControl mt='25px'>
                <FormLabel>Your message</FormLabel>
                <Textarea placeholder="Type your message here" _placeholder={{ color: '#AEAEAE' }}/>
              </FormControl>
              <Flex justify='right' mt='40px'>
              <Button type="submit" colorScheme='orange'>
                Send message
              </Button>
              </Flex>
            </form>
          </Box>
        </Container>
      </Box>
    </>
  );
}
