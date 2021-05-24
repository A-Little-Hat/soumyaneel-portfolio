import React from 'react'
import { HStack } from "@chakra-ui/layout";
import { Center, Spacer, Button } from '@chakra-ui/react';

interface SectionProps {
    setArea:(areaNo:number)=> void
  }

const Section: React.FC<SectionProps> = (props:SectionProps) => {
    return (
        <HStack w="100%"  >
            <Center w="100%" p="5%">
                <Button w="20%" h="10" colorScheme="blue" bg="teal.500" onClick={()=>{
                    props.setArea(0)
                }} >
                    <Center w="100%" px="5%">
                        Profile
                    </Center>
                </Button>
                <Spacer />
                <Button w="20%" h="10" bg="teal.500" colorScheme="blue" onClick={()=>{
                    props.setArea(1)
                }} >
                    <Center w="100%" px="5%">
                        Work Exprience
                    </Center>
                </Button>
                <Spacer />
                <Button w="20%" h="10" bg="teal.500" colorScheme="blue" onClick={()=>{
                    props.setArea(2)
                }} >
                    <Center w="100%" px="5%">
                        Contact
                    </Center>
                </Button>
            </Center>
        </HStack>
    )
}
export default Section