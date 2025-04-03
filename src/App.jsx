import Header from './assets/components/Header'
import TitleSection from './assets/components/TitleSection'
import FormSection from './assets/components/FormSection'
import Ticket from './assets/components/Ticket'
import './App.css'
import React, {useState} from "react";
import { Box, Image, useBreakpointValue } from "@chakra-ui/react";

import bgDesktop from "./assets/images/background-desktop.png"
import bgMobile from "./assets/images/background-mobile.png"
import bgTablet from "./assets/images/background-tablet.png"
import patternLines from "./assets/images/pattern-lines.svg"
import patternLinesBottomDesktop from "./assets/images/pattern-squiggly-line-bottom-desktop.svg"
import patternLinesBottomMobileTablet from "./assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg"
import patternLinesTop from "./assets/images/pattern-squiggly-line-top.svg"
import patternCircle from "./assets/images/pattern-circle.svg"

function App() {
  const [successSubmit, setSuccessSubmit] = useState(false)
  const [formData, setFormData] = useState({
    image: null,
    fullName: "",
    email: "",
    github: "",
    code: ""
  })

  return (
    <Box
      bgImage={{ base: `url(${bgMobile})`, sm: `url(${bgTablet})`, md: `url(${bgDesktop})` }}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      minHeight="100vh"
      minWidth="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box 
        px={{ base: "1rem", sm: "2rem", md: "4rem", lg: "6rem" }}
        paddingBottom={{ base: "3rem", md: "1rem", lg: "1rem" }}
        width="100%"
        maxWidth="1200px"
      >
        <Image
          src={patternCircle}
          position="absolute"
          width={{base: "20%", md: "15%", lg: "10%"}}
          top={{base: "-4", md: "-5%", lg: "-10%"}}
          left={{base: "-4", md: "5", lg: "10"}}
        />
        <Image
          src={patternLines}
          position="absolute"
          boxSize="100%"
          top="0"
          left="0"
        />
        <Image
          src={patternLinesTop}
          position="absolute"
          width={{base: "25%", md: "30%"}}
          top={{base: "5", md: "10"}}
          right="0"
        />
        <Image
          src={patternCircle}
          position="absolute"
          width={{base: "20%", md: "15%", lg: "10%"}}
          top="50%"
          right={{base: "-10%", md: "10%", lg: "29%"}}
        />
        <Header/>
        <TitleSection values={formData} successSubmit={successSubmit}/>
        {successSubmit ? (
          <Ticket values={formData}/>
        ) : (
          <FormSection setSuccessSubmit={setSuccessSubmit} setFormData={setFormData}/>
        )}
        <Image
          src={useBreakpointValue({
            base: patternLinesBottomMobileTablet,
            md: patternLinesBottomDesktop
          })}
          position="absolute"
          width={{base: "60%", md: "50%"}}
          bottom="0"
          left="0"
          zIndex="1"
        />
      </Box>
    </Box>
  )
}

export default App
