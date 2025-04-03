import React, {useState, useEffect} from "react";
import {
    VStack,
    HStack,
    Box,
    Image,
    Text,
    Icon
} from "@chakra-ui/react";

import ticketPattern from "../images/pattern-ticket.svg"
import logo from "../images/logo-full.svg"
import gitIcon from "../images/icon-github.svg"

const Ticket = ( {values} ) => {

    const getDate = () => {
        const date = new Date();
        return new Intl.DateTimeFormat("en-EN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }).format(date);
    }

    const getTimeZone = () => {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return timeZone.replace("/", ", ");
    };

    return (
        <VStack pt={16}>
            <Box key={values.id} position="relative" width="70%" height="100%">
                <Image src={ticketPattern} w="full" h="full" objectFit="cover"/>
                <Box
                    position="absolute"
                    top="50%"
                    right="0%"
                    color="white"
                    textAlign="center"
                    transform="translateY(-50%) rotate(90deg)"
                >
                    <Text textStyle="3xl" color="whiteAlpha.900/20">#{values.code}</Text>
                </Box>    
                <Box
                    position="absolute"
                    top="10%"
                    left="5%"
                    color="white"
                    textAlign="left"
                >
                    <HStack flexWrap="wrap" alignItems="center">
                        <Image boxSize="50%" src={logo}/>
                        <Text ml={16} fontSize="md" color="gray.300">{getDate()} / {getTimeZone()}</Text>
                    </HStack>
                    
                </Box>
                <Box
                    position="absolute"
                    bottom="10%"
                    left="5%"
                    color="white"
                    textAlign="left"
                >
                    <HStack gap={4}>
                        <Image 
                            src={values.image}
                            alt="Uploaded Avatar"
                            boxSize="15%"
                            borderRadius="15%"
                            aspectRatio={1}
                        />
                        <VStack gap={1} alignItems="left">
                            <Text textStyle="3xl">{values.fullName}</Text>
                            <HStack gap={1}>
                                <Icon>
                                    <img src={gitIcon} alt="Github Icon" />
                                </Icon>
                                <Text textStyle="xl" color="gray.300">@{values.github}</Text>
                            </HStack>
                            
                        </VStack>
                    </HStack>
                </Box>
            </Box>
        </VStack>
    )

}

export default Ticket