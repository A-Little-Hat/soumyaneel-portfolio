import React, { useState } from "react";

import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer,Box } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

import Header from "./components/Header";
// import Social from "./components/Social";
import Section from "./components/Section"
import Area from "./components/Area"

import './styles/app.sass'

function App() {
  const [areaNo, setAreaNo] = useState(0);
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";


  return (
    <VStack style={{marginTop:"10px",overflowX:"hidden",width:"100%",overflowY:"hidden"}} className="mainBg">
        <Box style={{height:"90vh",marginTop:"20px",width:"100%"}}>
          <Flex Width="100%" mx="10px">
            <Heading
              ml="15" size="lg" fontWeight='semibold' color="cyan.400">A Little Hat</Heading>
            <Spacer />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} isRound={true} onClick={() =>
              window.open("https://www.linkedin.com/in/soumyaneel-sarkar-04158a1b0/")
            } ></IconButton>
            <IconButton aria-label="Twitter" ml={2} icon={<FaTwitter />} isRound={true} onClick={() =>
              window.open("https://twitter.com/im_soumyaneel")
            } ></IconButton>
            <IconButton aria-label="Github" ml={2} icon={<FaGithub />} isRound={true} onClick={() =>
              window.open("https://github.com/A-Little-Hat")
            } ></IconButton>
            <IconButton aria-label="dark" ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound={true} onClick={toggleColorMode}></IconButton>
          </Flex>
          <Header />
        </Box>
        <Box style={{ width: "100%",height:"100vh", }}>
          <Section setArea={setAreaNo} />
          <Area areaNo={areaNo} />
        </Box>
    </VStack>
  );
}
export default App;
