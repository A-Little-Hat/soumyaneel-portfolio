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
                <Button className="btn btn-success" onClick={()=>{
                    props.setArea(0)
                }} >
                    <Center w="100%" >
                        Profile
                    </Center>
                </Button>
                <Spacer />
                <Button className="btn btn-success" onClick={()=>{
                    props.setArea(1)
                }} >
                    <Center w="100%" >
                        Work Exprience
                    </Center>
                </Button>
                <Spacer />
                <Button className="btn btn-success" onClick={()=>{
                    props.setArea(2)
                }} >
                    <Center w="100%" >
                        Contact
                    </Center>
                </Button>
            </Center>
        </HStack>
    )
}
export default Section