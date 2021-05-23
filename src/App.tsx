import React, { useState } from "react";

import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

import Header from "./components/Header";
import Social from "./components/Social";
import Section from "./components/Section"
import Area from "./components/Area"

import './styles/app.sass'

function App() {
  const [areaNo, setAreaNo] = useState(0);
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";


  return (
    <VStack p={5} >
      <div className="item">
        <Flex w="100%"  >
          <Heading
            ml="8" size="md" fontWeight='semibold' color="cyan.400">A Little Hat</Heading>
          <Spacer></Spacer>
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
      </div>
      <div style={{width:"100%"}} className="item">
      <Section setArea={setAreaNo} />
      <Area areaNo={areaNo} />
      </div>
      <Social />
    </VStack>
  );
}
export default App;
