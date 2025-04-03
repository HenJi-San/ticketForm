import React from "react"
import {
    VStack,
    Image,
} from "@chakra-ui/react";

import logo from "../images/logo-full.svg"

const Header = () => {
    return (
        <VStack p={8} w="full">
            <Image src={logo} alt="Header logo" boxSize={{ base: "60%", md: "40%" }}/>
        </VStack>
        
    )
}

export default Header

