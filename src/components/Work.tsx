import React from 'react';
import { Box } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/color-mode'

const Work = () => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    
    return (
        <Box>
            
        </Box>
    );
}

export default Work;
