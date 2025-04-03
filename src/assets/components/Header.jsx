import React from "react"
import {
    VStack,
    Image,
} from "@chakra-ui/react";

import logo from "../images/logo-full.svg"

const Header = () => {
    return (
        <VStack p={{ base: 4, md: 8 }} w="full" width="100%">
            <Image src={logo} alt="Header logo" boxSize={{ base: "50%", sm: "60%", md: "40%" }}/>
        </VStack>
        
    )
}

export default Header

