"use client";
import Events from "@/components/Events";
import Features from "@/components/Features";
import HomeInitial from "@/components/HomeInitial";
import President from "@/components/President";
import Teachers from "@/components/Teachers";
import {
  Box,
  Container,
  VStack,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box as='section' width='100%'>
          <HomeInitial />
          <President />
          <Features />
          <Teachers />
          <Events />
      </Box>
    </>
  );
}
