import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Grid,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import React from "react";

interface Prop {
  question: string;
  id: number;
  answer: string;
}

export default function FaqList() {
  let i: number = 0;
  let J: number = 0;
  const Data: Array<Prop> = [
    {
      question: "What is the monthly fee of the program?",
      id: 1,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et cum, reiciendis soluta minus officia? Ipsam est iure praesentium sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et cum, reiciendis soluta minus officia? Ipsam est iure praesentium sit?",
    },
    {
      question: "Will the classes be online or offline?",
      id: 2,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et cum, reiciendis soluta minus officia? Ipsam est iure praesentium sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et cum, reiciendis soluta minus officia? Ipsam est iure praesentium sit?",
    },
    {
      question: "Is this program avaiable in my city?",
      id: 3,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et cum, reiciendis soluta minus officia? Ipsam est iure praesentium sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et cum, reiciendis soluta minus officia? Ipsam est iure praesentium sit?",
    },
    {
      question: "What are the specialized tracks?",
      id: 4,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et cum, reiciendis soluta minus officia? Ipsam est iure praesentium sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et cum, reiciendis soluta minus officia? Ipsam est iure praesentium sit?",
    },
    {
      question: "What's the involvement of Dr. Arif Alvi in this program?",
      id: 5,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et cum, reiciendis soluta minus officia? Ipsam est iure praesentium sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et cum, reiciendis soluta minus officia? Ipsam est iure praesentium sit?",
    },
    {
      question: "Is this program beginner friendly?",
      id: 6,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et cum, reiciendis soluta minus officia? Ipsam est iure praesentium sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et cum, reiciendis soluta minus officia? Ipsam est iure praesentium sit?",
    },
    {
      question: "What can be my future after this course?",
      id: 7,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et cum, reiciendis soluta minus officia? Ipsam est iure praesentium sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et cum, reiciendis soluta minus officia? Ipsam est iure praesentium sit?",
    },
    {
      question: "What are the job opportunities of Web 3.0?",
      id: 8,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et cum, reiciendis soluta minus officia? Ipsam est iure praesentium sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et cum, reiciendis soluta minus officia? Ipsam est iure praesentium sit?",
    },
  ];
  return (
    <>
    <Box maxW={"4xl"} mx="auto" px="20px">
      <Accordion>
        {Data.map((item) => (
          <AccordionItem
            shadow="lg"
            key={item.id}
            width='100%'
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton _expanded={{ color: "#F6AD55" }} mb='10px'>
                    <Box as="span" flex="1" textAlign="left" fontWeight="bold" fontSize={{base: '12px', lg:'18px'}} py='25px'>
                      {item.question}
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize={{base: '12px', lg:'18px'}} />
                    ) : (
                      <AddIcon fontSize={{base: '12px', lg:'18px'}} />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
      </Box>
    </>
  );
}
