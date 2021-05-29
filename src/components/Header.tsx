import { Center, Heading } from '@chakra-ui/react';
import { Stack, VStack, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import '../styles/header.sass'

function Header() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:755px)");
    return (
        <Stack minH="500px" marginTop="50px" style={{ width: "90%" }}>
            <div className="secondary">
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

                <Box className="intro" mt={isNotSmallerScreen ? "0" : "16"} align='flex-start'>
                    <Text ml="5" fontSize="6xl" fontWeight="bold" bgGradient="linear(to-r, red.300, blue.500, purple.600)" bgClip='text' >Myself Soumyaneel</Text>
                    <Box w={isNotSmallerScreen ? "600px" : ""} mx="3" >
                        <Text fontSize="2xl" fontWeight="semibold" fontFamily="monospace" >
                                I'm just an ordinary programmer with tons and tons of bugs to fight. I like to build amazing websites. Learing new things and exploring new tech prods givs me more energy to work.
                                <p style={{paddingTop:"20px"}}>
                                I believe that <strong>ability is nothing without opportunity.</strong>  I always try to make myself better than I am.
                                </p>
                        </Text>
                    </Box>
                </Box>
            </Flex>
            {/* <Box>
                    <Button className="btn" mt={8} colorScheme="blue" onClick={() =>
                        window.open("https://soumyaneel.web.app/")
                    }>Hire Me</Button>
                </Box> */}
        </Stack>
    );
}
export default Header
