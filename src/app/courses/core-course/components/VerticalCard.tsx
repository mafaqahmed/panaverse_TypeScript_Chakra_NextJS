import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function VerticalCard() {
  return (
    <>
    <Flex direction='column' position='relative' top='-150px' justifyContent='left' shadow='xl'>
        <Box
        width={{base:'100%', lg:"350px"}}
        height='300px'
        backgroundImage="url('https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGphdmFzY3JpcHR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"></Box>
        <Box p='30px'>
        <Text color='orange.900' fontWeight='bold' fontSize='20px' mt='30px'>Main Information</Text>
        <Text mt='30px' color='orange.800' fontWeight='medium'>Group Size</Text>
        <Text mt='5px' color='gray.600'>400</Text>
        <Text mt='30px' color='orange.800' fontWeight='medium'>Duration</Text>
        <Text mt='5px' color='gray.600'>9 Months</Text>
        <Text mt='30px' color='orange.800' fontWeight='medium'>Certificate</Text>
        <Text mt='5px' color='gray.600'>Yes, physical</Text>
        <Text mt='30px' color='orange.800' fontWeight='medium'>Audience</Text>
        <Text mt='5px' color='gray.600'>Beginner level</Text>
        <Button mt='50px' mb='30px' colorScheme='orange'>Take this course</Button>
        </Box>
    </Flex>
    </>
  )
}
