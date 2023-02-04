import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BiBook, BiVideo } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

export default function Quarter1() {
  return (
    <>
      <Box mt="30px">
        <Text textAlign="center" fontWeight="bold" fontSize="30px">
          Quarter I (Core)
        </Text>
        <Text
          textAlign="center"
          fontWeight="bold"
          fontSize="20px"
          color="orange.600"
        >
          CS-101: Object-Oriented Programming using TypeScript
        </Text>
        <Text
          textAlign="center"
          fontWeight="bold"
          fontSize="20px"
          color="orange.600"
        >
          Duration: 13 Weeks
        </Text>
        <Accordion allowToggle mt="30px">
          <AccordionItem border="1px" borderColor="gray.300">
            <h2>
              <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="18px"
                  fontWeight="bold"
                  letterSpacing="1px"
                  p="7px"
                >
                  HTML and CSS (Pre-requisite)
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <HStack
                fontSize="15px"
                gap="12px"
                px="10px"
                py="8px"
                borderBottom="1px"
                borderColor="orange.300"
              >
                <BiVideo fontSize="22px" />
                <Link href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6">
                  Learn HTML by Hira Khan
                </Link>
              </HStack>
              <HStack fontSize="15px" gap="12px" px="10px" py="8px">
                <BiVideo fontSize="22px" />
                <Link href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob">
                  Learn CSS by Hira Khan
                </Link>
              </HStack>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem border="1px" borderColor="gray.300">
            <h2>
              <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="18px"
                  fontWeight="bold"
                  letterSpacing="1px"
                  p="7px"
                >
                  Web 3.0 and Metaverse Theory
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <HStack
                fontSize="15px"
                gap="12px"
                px="10px"
                py="8px"
                borderBottom="1px"
                borderColor="orange.300"
              >
                <BiBook fontSize="22px" />
                <Link href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing">
                  Introduction to Panaverse DAO
                </Link>
              </HStack>
              <HStack
                fontSize="15px"
                gap="12px"
                px="10px"
                py="8px"
                borderBottom="1px"
                borderColor="orange.300"
              >
                <BiBook fontSize="22px" />
                <Link href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing">
                  Web 3.0 User Guide
                </Link>
              </HStack>
              <HStack fontSize="15px" gap="12px" px="10px" py="8px">
                <BiBook fontSize="22px" />
                <Link href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing">
                  Metaverse User Guide
                </Link>
              </HStack>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem border="1px" borderColor="gray.300">
            <h2>
              <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="18px"
                  fontWeight="bold"
                  letterSpacing="1px"
                  p="7px"
                >
                  Fundamentals of JavaScript
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <HStack
                fontSize="15px"
                gap="12px"
                px="10px"
                py="8px"
                borderBottom="1px"
                borderColor="orange.300"
              >
                <BiVideo fontSize="22px" />
                <Link href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo">
                  Learn JavaScript by Zeeshan Hanif
                </Link>
              </HStack>
              <HStack
                fontSize="15px"
                gap="12px"
                px="10px"
                py="8px"
                borderBottom="1px"
                borderColor="orange.300"
              >
                <BiBook fontSize="22px" />
                <Link href="https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4">
                  Chapters 2-6, 13 of JavaScript Book
                </Link>
              </HStack>
              <HStack fontSize="15px" gap="12px" px="10px" py="8px">
                <BsGithub fontSize="22px" />
                <Link href="https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional">
                  JavaScript Book Code
                </Link>
              </HStack>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem border="1px" borderColor="gray.300">
            <h2>
              <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="18px"
                  fontWeight="bold"
                  letterSpacing="1px"
                  p="7px"
                >
                  Objected Oriented Programming with TypeScript
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <HStack
                fontSize="15px"
                gap="12px"
                px="10px"
                py="8px"
                borderBottom="1px"
                borderColor="orange.300"
              >
                <BiBook fontSize="22px" />
                <Link href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1">
                  Chapters 1-11 of Learning TypeScript Book
                </Link>
              </HStack>
              <HStack
                fontSize="15px"
                gap="12px"
                px="10px"
                py="8px"
                borderBottom="1px"
                borderColor="orange.300"
              >
                <BsGithub fontSize="22px" />
                <Link href="https://github.com/panaverse/learn-typescript">
                  TypeScript Learning Repository
                </Link>
              </HStack>
              <HStack
                fontSize="15px"
                gap="12px"
                px="10px"
                py="8px"
                borderBottom="1px"
                borderColor="orange.300"
              >
                <CgWebsite fontSize="22px" />
                <Link href="https://www.learningtypescript.com/">
                  Projects and articles for Learning TypeScript
                </Link>
              </HStack>
              <HStack fontSize="15px" gap="12px" px="10px" py="8px">
                <CgWebsite fontSize="22px" />
                <Link href="https://profy.dev/article/react-typescript">
                  TypeScript for React
                </Link>
              </HStack>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem border="1px" borderColor="gray.300">
            <h2>
              <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="18px"
                  fontWeight="bold"
                  letterSpacing="1px"
                  p="7px"
                >
                  Assignments and Quizes (During Session)
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <HStack
                fontSize="15px"
                gap="12px"
                px="10px"
                py="8px"
                borderBottom="1px"
                borderColor="orange.300"
              >
                <BiBook fontSize="22px" />
                <Link href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing">
                  Complete Web 3 Assignments included in the Web 3 User Guide
                </Link>
              </HStack>
              <HStack
                fontSize="15px"
                gap="12px"
                px="10px"
                py="8px"
                borderBottom="1px"
                borderColor="orange.300"
              >
                <BsGithub fontSize="22px" />
                <Link href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md">
                  Getting Started Exercises with JavaScript and Node.js
                </Link>
              </HStack>
              <HStack
                fontSize="15px"
                gap="12px"
                px="10px"
                py="8px"
                borderBottom="1px"
                borderColor="orange.300"
              >
                <CgWebsite fontSize="22px" />
                <Link href="https://www.learningtypescript.com/">
                  JavaScript and Node JS Quiz
                </Link>
              </HStack>
              <Box fontSize="15px" px="10px" py="8px">
                <List>
                  <ListItem>
                    <ListIcon as={ArrowRightIcon} color="green.500" />
                    Topics Covered in the Quiz:
                  </ListItem>
                  <ListItem>
                    <ListIcon as={ArrowRightIcon} color="green.500" />
                    Background of JavaScript and How to use JavaScript in
                    Browser
                  </ListItem>
                  <ListItem>
                    <ListIcon as={ArrowRightIcon} color="green.500" />
                    Variables, Primitive data types Analyzing and modifying data
                    types, and Operators (Chapter 2 of JavaScript from Beginner
                    to Professional)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={ArrowRightIcon} color="green.500" />
                    Intro to Node.js, .mjs files, Modules, NPM, import, export,
                    and using external modules with npm:
                    <Link
                      mx="5px"
                      color="blue"
                      href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing"
                    >
                      Click here
                    </Link>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={ArrowRightIcon} color="green.500" />
                    How to accept user input in your Node.js JavaScript
                    programs, this will allow us to create interactive Node.js
                    console programs using prompt-sync library. The last example
                    in this presentation shows you how to use prompt-sync
                    library in your Node.js programs:
                    <Link
                      mx="5px"
                      color="blue"
                      href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing"
                    >
                      Click here
                    </Link>
                    Note: After this point, we will do all our class work and
                    exercises using Node.js in .mjs files. We will also be able
                    to develop interactive Node.js console programs which will
                    greatly help the students to learn.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={ArrowRightIcon} color="green.500" />
                    Using Arrays and Objects in Node.js Programs (chapter 3 of
                    JavaScript from Beginner to Professional)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={ArrowRightIcon} color="green.500" />
                    Using if and if else statements, else if statements,
                    Conditional ternary operators, and switch statements in
                    Node.js programs (chapter 4 of JavaScript from Beginner to
                    Professional)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={ArrowRightIcon} color="green.500" />
                    Using while loop, do while loop, for loop, for in, and for
                    of loop in Node.js (chapter 5 of JavaScript from Beginner to
                    Professional)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={ArrowRightIcon} color="green.500" />
                    Using Basic functions, Function arguments, Return, Variable
                    scope in functions, Recursive functions, Nested functions,
                    Anonymous functions, and Function callbacks in Node.js
                    (chapter 6 of JavaScript from Beginner to Professional)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={ArrowRightIcon} color="green.500" />
                    Using Concurrency, Callbacks, Promises, async / await, and
                    Event loop (chapter 13 of JavaScript from Beginner to
                    Professional)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={ArrowRightIcon} color="green.500" />
                    JavaScript promises, mastering the asynchronous
                    <Link
                      ml="5px"
                      color="blue"
                      href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript"
                    >
                      Click here
                    </Link>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={ArrowRightIcon} color="green.500" />
                    New JavaScript Features in ECMAScript 2022 and 2021
                    <Link
                      ml="5px"
                      color="blue"
                      href="https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg"
                    >
                      Click here
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
}
