import React, { useState } from 'react';
import { Flex, Center, FormControl, FormLabel, FormHelperText, Input, Button } from '@chakra-ui/react';

const Contact = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [msg, setMsg] = useState("")
    const send = () => {
        var data = { email, name, msg }
        console.log(data)
        window.open(`mailto:soumyasarkar309@gmail.com?subject=${name}&body=${msg}`);
        setEmail("")
        setName("")
        setMsg("")
    }
    return (
        <Center px="60px" >
            <Flex h="100%" p="15px" w="100%" style={{borderWidth:"10px"}} >
                <FormControl >
                    <FormHelperText>Fill free to reach me.</FormHelperText>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <FormLabel>Name</FormLabel>
                    <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <FormLabel>Message</FormLabel>
                    <Input type="textarea" value={msg} onChange={(e) => setMsg(e.target.value)} />
                    <Center>
                        <Button colorScheme="blue" mt="5" onClick={send} >SEND</Button>
                    </Center>
                </FormControl>
            </Flex>
        </Center>
    );
}

export default Contact;
