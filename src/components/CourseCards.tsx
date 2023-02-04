import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsPeople } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
interface course {
  name: string;
  href: string;
  desc: string;
  src: string;
}

export default function CourseCard() {
  const courses: Array<course> = [
    {
      name: "Core Course (Manadatory)",
      href: "courses/core-course",
      desc: "Every participant of the program will start by completing this course comprising of three quarters",
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Web 3.0 (Blockchain) and Metaverse Specialization",
      href: "courses/core-course",
      desc: "This specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet",
      src: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHZyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Artificial Intelligence (AI) and Deep Learning Specialization",
      href: "courses/core-course",
      desc: "This specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
      src: "https://images.unsplash.com/photo-1655721528985-c491cc1a3d57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFpfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Cloud-Native Computing Specialization",
      href: "courses/core-course",
      desc: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes",
      src: "https://images.unsplash.com/photo-1577760258779-e787a1733016?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Ambient Computing and IoT Specialization",
      href: "courses/core-course",
      desc: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices. ",
      src: "https://images.unsplash.com/photo-1512446816042-444d641267d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJuZXQlMjBvZiUyMHRoaW5nc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Genomics and Bioinformatics Specialization",
      href: "courses/core-course",
      desc: "This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
      src: "https://images.unsplash.com/photo-1563273941-9b69c469e03d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGludGVybmV0JTIwb2YlMjB0aGluZ3N8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Network Programmability and Automation Specialization",
      href: "courses/core-course",
      desc: "This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXV0b21hdGlvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap="15px"
      >
        {courses.map((course) => (
          <Card
            maxW="sm"
            _hover={{ transform: "scale(1.02)" }}
            transitionDuration="0.15s"
            transition="ease-in-out"
          >
              <CardBody>
              <Link href={course.href}>
                <Image
                  src={course.src}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                </Link>
                <Stack mt="6" spacing="3">
                  <Heading size="md">{course.name}</Heading>
                  <Text fontSize="13px" color="gray.600">
                    {course.desc}
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    3000 PKR / Quarter
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <HStack color="gray.500" spacing={8}>
                  <HStack>
                    <BsPeople fontSize="20px" />
                    <Text fontSize="15px">2,000</Text>
                  </HStack>
                  <HStack>
                    <IoMdTime fontSize="20px" />
                    <Text fontSize="15px">9 Months</Text>
                  </HStack>
                </HStack>
              </CardFooter>
          </Card>
        ))}
      </Grid>
    </>
  );
}
