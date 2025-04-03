import React from "react"
import {
    VStack,
    Image,
} from "@chakra-ui/react";

import logo from "../images/logo-full.svg"

const Header = () => {
    return (
        <VStack p={8}>
            <Image src={logo} alt="Header logo"/>
        </VStack>
        
    )
}

export default Header

