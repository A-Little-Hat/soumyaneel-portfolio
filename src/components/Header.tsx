import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Center, Heading } from '@chakra-ui/react';
import { Stack, VStack, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import '../styles/header.sass'

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (
        <Stack h="500px" marginTop="" w="100%" style={isDark ? { "backgroundColor": "" } : { "backgroundColor": "rgba(200, 255, 255,0.1)" }}>
            <Flex>
                <div className="container" >
                    <div className="wrapper">
                        <img src="https://avatars.githubusercontent.com/u/65025579?v=4" alt="" />
                    </div>
                    <div className="content">
                        <p>
                            <Center>
                                <VStack>
                                    <Heading bgGradient="linear(to-r, red.300, blue.500, purple.600)" bgClip='text'>Student </Heading>
                                    <Heading bgGradient="linear(to-r, red.300, blue.500, purple.600)" bgClip='text'> Web Developer</Heading>
                                    <Heading bgGradient="linear(to-r, red.300, blue.500, purple.600)" bgClip='text'> Tech Enthusiast</Heading>
                                </VStack>
                            </Center>
                        </p>
                    </div>
                </div>
                <Box mt={isNotSmallerScreen ? 0 : 0} align='flex-start'>
                    <Text fontSize="6xl" fontWeight="bold" bgGradient="linear(to-r, red.300, blue.500, purple.600)" bgClip='text' >Myself Soumyaneel</Text>
                    <Button className="btn" mt={8} colorScheme="blue" onClick={() =>
                        window.open("https://soumyaneel.web.app/")
                    }>Hire Me</Button>
                </Box>
            </Flex>
        </Stack>
    )
}

export default Header
