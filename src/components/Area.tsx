import React from 'react'
// import { Box } from "@chakra-ui/react"

import Profile from './Profile'
import Work from './Work'
import Contact from './Contact'

interface AreaProps {
    areaNo: number;
  }

const Area: React.FC<AreaProps> = (props:AreaProps)=> {
    if(props.areaNo===0){
        return (
            <Profile/>
        )
    }
    if(props.areaNo===1){
        return (
            <Work/>
        )
    }
    if(props.areaNo===2){
        return (
            <Contact/>
        )
    }
    return null
}
export default Area