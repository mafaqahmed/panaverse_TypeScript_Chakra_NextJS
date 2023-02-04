"use client";
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react'
import theme from './theme';

export default function ChakraWrapper({
    children
  }: {
    children: React.ReactNode
  }) {
  return (
    <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
    {children}
    </ChakraProvider>
    </>
  )
}
