import React from 'react'
import { SimpleGrid } from "@chakra-ui/react"
import IconTech from './IconTech'


function Icons() {
    return (
        <SimpleGrid background="facebook.300" columns={6} spacing={10}>
            <IconTech /><IconTech /><IconTech /><IconTech /><IconTech /><IconTech /><IconTech /><IconTech /><IconTech /><IconTech /><IconTech /><IconTech />
            <IconTech /><IconTech /><IconTech /><IconTech /><IconTech /><IconTech /><IconTech /><IconTech /><IconTech /><IconTech /><IconTech /><IconTech />            
        </SimpleGrid>
    )
}

export default Icons
