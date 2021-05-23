import React from 'react';
import { Box } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/color-mode'

const Profile = () => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    return (
        <Box mx="5%" minH="90vh" w="100%" style={isDark ? { "backgroundColor": "" } : { "backgroundColor": "rgba(200, 255, 255,0.1)" }} >
            
                    </Box>
                    );
}

                    export default Profile;
