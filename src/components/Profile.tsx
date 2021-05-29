import React from 'react';
import { Flex, Box } from '@chakra-ui/layout';
import { Spacer } from '@chakra-ui/react';
// import Icons from './Icons'

const Profile = () => {
    return (
        <Box w="100%" p="10">
            {/* <Box bg="red.100" w="100%" minH="100px" >
                <Icons />
            </Box> */}
        <Flex w="100%" >
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=A-Little-Hat&amp;layout=compact" alt="A-Little-Hat Most Used Languages"/>
                <Spacer/>
            {/* <img  src="https://github-readme-stats.vercel.app/api?username=A-Little-Hat&amp;show_icons=true" alt="A-Little-Hat GitHub Stats"/> */}
        </Flex>
        </Box>
        );
}

export default Profile;
