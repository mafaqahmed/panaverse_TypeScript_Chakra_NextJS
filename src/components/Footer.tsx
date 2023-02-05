import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  Input,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import React from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: React.ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <Button
      bg="whiteAlpha.100"
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "blackAlpha.100",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
};

export default function Footer() {
  return (
    <>
      <Box position='relative'>
        <Box
          mt="90px"
          maxW={"6xl"} mx="auto" px="20px"
        >
          <Box as="div" px="50px" bgColor="orange.300" py={{base:'30px', lg:'50px'}}>
            <Box>
              <Center
                as="p"
                fontSize={{ base: "20px", md: "40px" }}
                fontWeight="bold"
                textAlign="center"
                letterSpacing="1px"
                color="black"
              >
                Join our newsletter
              </Center>
              <Center
                as="p"
                fontSize={{ base: "10px", lg: "15px" }}
                textAlign="center"
                letterSpacing="1px"
              >
                Subscribe to get weekly access to our events and deals
              </Center>
            </Box>
            <Box width={{ base: "100%", lg: "40%" }} mt="30px" mx="auto">
              <form>
                <Flex>
                  <FormControl mr="15px">
                    <Input
                      type="email"
                      placeholder="Type your email"
                      _placeholder={{ color: "#AEAEAE" }}
                      bgColor="white"
                      fontSize='13px'
                    />
                  </FormControl>
                  <Button type="submit" colorScheme="blackAlpha" fontSize='13px'>
                    Subscribe
                  </Button>
                </Flex>
              </form>
            </Box>
          </Box>
        </Box>
        <Box
          backgroundColor="black"
          color="white"
          paddingTop={{base: '130px', lg:'200px'}}
          width='100%'
          position='absolute'
          top='150px'
          zIndex='-1'
        >
          <Flex justify={{base: 'flex-start', md:'center'}} px='20px'>
            <SimpleGrid columns={{ base: 1, md:4 }} spacing={{base: '8', lg:"28"}}>
              <Stack align={"flex-start"}>
                <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
                  Company
                </Text>
                <Link href={"#"} style={{color:'#8F8D97'}}>About Us</Link>
                <Link href={"#"} style={{color:'#8F8D97'}}>Blog</Link>
                <Link href={"#"} style={{color:'#8F8D97'}}>Careers</Link>
                <Link href={"#"} style={{color:'#8F8D97'}}>Contact Us</Link>
              </Stack>

              <Stack align={"flex-start"}>
                <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
                  Support
                </Text>
                <Link href={"#"} style={{color:'#8F8D97'}}>Help Center</Link>
                <Link href={"#"} style={{color:'#8F8D97'}}>Safety Center</Link>
                <Link href={"#"} style={{color:'#8F8D97'}}>Community Guidelines</Link>
              </Stack>

              <Stack align={"flex-start"}>
                <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
                  Legal
                </Text>
                <Link href={"#"} style={{color:'#8F8D97'}}>Cookies Policy</Link>
                <Link href={"#"} style={{color:'#8F8D97'}}>Privacy Policy</Link>
                <Link href={"#"} style={{color:'#8F8D97'}}>Terms of Service</Link>
                <Link href={"#"} style={{color:'#8F8D97'}}>Law Enforcement</Link>
              </Stack>

              <Stack align={"flex-start"}>
                <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
                  Install App
                </Text>
                {/* <AppStoreBadge />
            <PlayStoreBadge /> */}
              </Stack>
            </SimpleGrid>
          </Flex>
          <Box borderTopWidth={1} borderStyle={"solid"}>
            <Container
              as={Stack}
              py={4}
              direction={{ base: "column", md: "row" }}
              spacing={4}
              justify={{ md: "space-between" }}
              align={{ md: "center" }}
            >
              <Text>Designed by Afaq Ahmed. All rights reserved</Text>
              <Stack direction={"row"} spacing={6}>
                <SocialButton label={"Twitter"} href={"#"}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={"YouTube"} href={"#"}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
}
