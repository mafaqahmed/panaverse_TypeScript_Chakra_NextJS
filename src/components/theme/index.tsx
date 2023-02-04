"use client";
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "'Plus Jakarta Sans' ,sans-serif",
    body: "'Plus Jakarta Sans' , sans-serif",
  },
});

export default theme;