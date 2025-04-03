import React from "react";
import {
    VStack,
    Text,
    Heading
} from "@chakra-ui/react";

const TitleSection = ({ successSubmit, values}) => {
    const headingStart=(
        <p>Your Journey to Coding Conf 2025 Starts Here!</p>
    )

    const headingEnd=(
        <Text>Congrats, {" "}
            <Text 
                as="span" 
                bgGradient="linear-gradient(90deg, rgb(252, 119, 119) 0%, rgba(255,255,255,1) 100%)" 
                bgClip="text"
            >
                {values.fullName}!
            </Text> {" "}
            <br/> Your ticket is ready.
        </Text>
    )

    const textStart= (
        <Text w="90%">Secure your spot at next year's biggest coding conference.</Text>
    )
    const textEnd=(
        <Text textStyle="2xl" w="65%">
            We have emailed your ticket to {" "}
            <Text 
                as="span" 
                bgColor="rgb(255, 119, 119)" 
                bgClip="text"
            >
                {values.email}
            </Text> {" "}
            and will send updates in the run up to the event.
        </Text>
    )
    return (
        <VStack gap={6} p={6}>
            <Heading size="6xl">{successSubmit ? headingEnd : headingStart}</Heading>
            {successSubmit ? textEnd : textStart}
        </VStack>
    )
}

export default TitleSection;