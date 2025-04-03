import Header from './assets/components/Header'
import TitleSection from './assets/components/TitleSection'
import FormSection from './assets/components/FormSection'
import Ticket from './assets/components/Ticket'
import './App.css'
import React, {useState} from "react";
import { Box } from "@chakra-ui/react";

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
    <Box px={{ base: "1rem", md: "6rem" }}>
      <Header/>
      <TitleSection values={formData} successSubmit={successSubmit}/>
      {successSubmit ? (
        <Ticket values={formData}/>
      ) :
        <FormSection setSuccessSubmit={setSuccessSubmit} setFormData={setFormData}/>
      }
    </Box>
  )
}

export default App
