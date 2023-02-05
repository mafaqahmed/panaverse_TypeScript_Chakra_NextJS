"use client";

import {
  Box,
  Button,
  Flex,
  IconButton,
  Spacer,
  Stack,
  StackDivider,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { usePathname } from 'next/navigation';

interface toggling {
  onToggle: () => void
}

export default function Header() {
  const location = usePathname();
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onToggle } = useDisclosure();

  const pathCheck = (route: string):boolean => {
    if(route === location) return true
    else return false
  }
  return (
    <>
      <Box
        as="section"
        position={"sticky"}
        zIndex="40"
        shadow={
          "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;"
        }
        style={{position: 'relative'}}
      >
        <Flex as="nav" maxW={"6xl"} mx="auto" align={"center"} px="20px">
          <Box as="div" py={"10px"}>
            <Link href='/'>
            <Image
              src="https://www.panaverse.co/red-p-logo-text_dao_croped.png"
              alt="Logo"
              width={100}
              height={50}
            />
            </Link>
          </Box>
          <Spacer />
          {isDesktop ? (
            <Box as="div">
              <Stack
                as="ul"
                direction={"row"}
                style={{ listStyleType: "none" }}
              >
                {["Home", "About", "Courses", "FAQs", "Blog"].map((item, index) => (
                  <Link href={`/${item==='Home' ? '' : item.toLowerCase()}`} key={index}>
                  <Button
                    as="li"
                    px={"25px"}
                    py="5px"
                    color={"#4D4D4D"}
                    _hover={{ color: "#F76400" }}
                    cursor="pointer"
                    _active={{ color: "#F76400" }}
                    variant="ghost"
                    transform= 'scale(1.1)'
                    style={{...pathCheck(`/${item==='Home' ? '' : item.toLowerCase()}`) && {transform: 'scale(1.1)', color: "#F76400"}}}
                  >
                    {item}
                  </Button>
                  </Link>
                ))}
                <Link href="/contact">
                <Button
                  as="li"
                  px="25px"
                  variant={"outline"}
                  colorScheme="black"
                  py="5px"
                  _hover={{ color: "white", backgroundColor: "#101010" }}
                  cursor="pointer"
                  _active={{ color: "white", backgroundColor: "#101010" }}
                  transition="0.2s ease-in-out"
                >
                  Contact
                </Button>
                </Link>
              </Stack>
            </Box>
          ) : (
            <IconButton
              onClick={onToggle}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label="open menu"
            />
          )}
        </Flex>
        {(isOpen && !isDesktop) && <MobileNav  onToggle={onToggle}/>}
      </Box>
    </>
  );
}


const MobileNav = (onToggle:toggling) => {
  return (
    <>
      <Box as="div" position='absolute' bgColor='white' width='100%'>
        <VStack as="ul" style={{ listStyleType: "none" }} divider={<StackDivider borderColor='gray.400' />}>
          {["Home", "About", "Courses", "Techers", "Blog", "Contact"].map((item, index) => (
            <Link href={`/${item==='Home' ? '' : item.toLowerCase()}`} key={index}>
            <Button
              as="li"
              py="7px"
              color={"#4D4D4D"}
              _hover={{ color: "#F76400" }}
              cursor="pointer"
              _active={{ color: "#F76400" }}
              variant="ghost"
              onClick={onToggle.onToggle}
            >
              {item}
            </Button>
            </Link>
          ))}
        </VStack>
      </Box>
    </>
  );
};
