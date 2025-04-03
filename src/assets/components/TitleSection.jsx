import React from "react";
import {
    VStack,
    Text,
    Heading
} from "@chakra-ui/react";

const TitleSection = ({ successSubmit, values}) => {
    const headingStart=(
        <Text lineHeight={{ base: "short", md: "normal" }} fontSize={{ base: "3xl", md: "6xl" }}>
            Your Journey to Coding Conf 2025 Starts Here!
        </Text>
    )

    const headingEnd=(
        <Text lineHeight={{ base: "short", md: "normal" }} fontSize={{ base: "3xl", md: "6xl" }}>
            Congrats, {" "}
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
        <Text w="90%" fontSize={{ base: "xs", md: "md" }}>Secure your spot at next year's biggest coding conference.</Text>
    )
    const textEnd=(
        <Text textStyle="2xl" w="65%" fontSize={{ base: "xs", md: "md" }}>
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
        <VStack gap={{ base: 3, md: 6 }} p={{ base: 4, md: 6 }} w="full" textAlign="center">
            <Heading size="6xl" fontSize={{ base: "xl", sm: "2xl", md: "6xl" }}>
                {successSubmit ? headingEnd : headingStart}
            </Heading>
            {successSubmit ? (
                <Text textStyle="2xl" w={{ base: "100%", sm: "90%", md: "65%" }} fontSize={{ base: "sm", md: "md" }}>
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
            ) : (
                <Text w={{ base: "100%", sm: "90%", md: "65%" }} fontSize={{ base: "sm", md: "md" }}>
                    Secure your spot at next year's biggest coding conference.
                </Text>
            )}
        </VStack>
    )
}

export default TitleSection;