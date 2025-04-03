import React, {useState} from "react";
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import {
    Field,
    Input,
    Button,
    VStack,
    Box,
    Image,
    Icon,
    Text
} from "@chakra-ui/react";
import {
    FileUploadRoot,
    FileUploadDropzone,
} from "@/components/ui/file-upload"
import infoIcon from "../images/icon-info.svg"

const FormSection = ({ setSuccessSubmit, setFormData }) => {
    const [imageVal, setImageVal] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const imageHelperText = (
        <Text pt={1}>
            <Icon as="img" mb={0.5} src={infoIcon} alt="Info Icon"/> Upload your photo (JPG or PNG, max size: 500kB)
        </Text>
    )

    const toBase64 = (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
    });

    const formikValues = {
        image: null,
        fullName: "",
        email: "",
        github: ""
    }
    
    const formValidation = Yup.object().shape({
        fullName: Yup
            .string("Your name cannot contain integers")
            .min(3, "Your name has to be minimum of 3 letters")
            .required("Required"),
        email: Yup
            .string("Your email has to be string")
            .email("Please enter a valid email")
            .required("Required"),
        github: Yup
            .string("Your github has to be string")
            .min(4, "Your github cannot be less than 4 letters")
            .required("Required"),
    });
    
    return (
        <VStack p={10}>
            <Box w="50%">
            <Formik 
                initialValues={formikValues}
                validationSchema={formValidation}
                validateOnMount={true}
                onSubmit={async (values, actions) => {
                    const formData= {
                        image: values.image ? await toBase64(values.image) : null,
                        fullName: values.fullName,
                        email: values.email,
                        github: values.github,
                        code: Math.floor(10000 + Math.random() * 90000).toString()
                    }
                    console.log("Generated formData:", formData);
                    setFormData(formData); 
                    actions.resetForm();
                    setUploadedFiles([]);
                    setImageVal(false)
                    setSuccessSubmit(true)
                }}
            >
            {(props) => (
            <Form>
                <VStack spaceY={2}>
                    <Field.Root invalid={imageVal}>
                        <Field.Label>Upload File</Field.Label>
                        <FileUploadRoot 
                            value={uploadedFiles}
                            required
                            accept="image/*"
                            invalid={imageVal}
                            onChange={(e) => {
                                const files = e.target.files ? Array.from(e.target.files) : []
                                setUploadedFiles(files)
                                props.setFieldValue("image", files[0])
                            }}
                            onBlur={props.handleBlur}
                            validate={(fileUpload) => {
                                if (fileUpload.size > 500 * 1024) {
                                    setUploadedFiles([]);
                                    setImageVal(true)
                                    return "File is too large"
                                }
                                else {
                                    setImageVal(false)
                                    return null
                                }
                            }}
                        >
                            {uploadedFiles.length > 0 && imageVal == false ? (
                                <VStack 
                                    w="full" 
                                    borderWidth="2px" 
                                    borderStyle="dashed" 
                                    borderRadius="6px" 
                                    p={4} 
                                    minH="36" 
                                    bg="gray.700/20"
                                    _hover={{bg:"gray.700/30"}}
                                >
                                    <Box
                                        borderRadius="25%"
                                        overflow="hidden"
                                        borderWidth="2px"
                                        borderColor="gray.500"
                                        boxSize="70px"
                                    >
                                        <Image
                                            src={URL.createObjectURL(uploadedFiles[0])}
                                            alt="Uploaded Avatar"
                                            boxSize="70px"
                                            objectFit="cover"
                                        />
                                    </Box>
                                    <Box spaceX={2}>
                                        <Button 
                                            size="xxs" 
                                            fontSize="xs"
                                            p={1}
                                            variant="surface"
                                            colorPalette="gray" 
                                            bg="gray.700/30"
                                            _hover={{bg:"gray.700/40"}}
                                            onClick={() => {
                                                setUploadedFiles([]);
                                                props.setFieldValue("image", null);
                                            }}
                                        >
                                            Remove image
                                        </Button>
                                        <Button 
                                            size="xxs"
                                            fontSize="xs"
                                            p={1}
                                            variant="surface"
                                            colorPalette="gray" 
                                            bg="gray.700/30"
                                            _hover={{bg:"gray.700/40"}}
                                            onClick={() => document.getElementById("fileInput").click()}
                                        >
                                            Change image
                                        </Button>
                                    </Box>
                                    <input
                                        id="fileInput"
                                        type="file"
                                        accept="image/*"
                                        style={{ display: "none" }}
                                        onChange={(event) => {
                                            const file = event.target.files[0];
                                            if (file) {
                                                setUploadedFiles([file]);
                                                props.setFieldValue("image", file);
                                        }
                                    }}
                                    />
                                </VStack>
                                
                            ) : (
                                <>
                                    <FileUploadDropzone
                                        w="full"
                                        minH="36"
                                        bg="gray.700/20"
                                        _hover={{bg:"gray.700/30"}}
                                        label="Drag and drop or click to upload"
                                    />
                                </>
                            )}
                        </FileUploadRoot>
                        <Field.ErrorText>File should be an image and max size 500kB</Field.ErrorText>
                        <Field.HelperText>{imageVal ? null : imageHelperText}</Field.HelperText>
                    </Field.Root>
                    <Field.Root invalid={props.errors.fullName && props.touched.fullName}>
                        <Field.Label>
                            Full Name
                        </Field.Label>
                        <Input
                            type="text"
                            placeholder="Enter your full name"
                            value={props.values.fullName}
                            name="fullName"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            bg="gray.700/20"
                            _hover={{bg:"gray.700/30"}}
                        />
                        <Field.ErrorText>{props.errors.fullName}</Field.ErrorText>
                    </Field.Root>
                    <Field.Root invalid={props.errors.email && props.touched.email}>
                        <Field.Label>
                            Email
                        </Field.Label>
                        <Input
                            type="email"
                            placeholder="example@email.com"
                            value={props.values.email}
                            name="email"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            bg="gray.700/20"
                            _hover={{bg:"gray.700/30"}}
                        />
                        <Field.ErrorText>{props.errors.email}</Field.ErrorText>
                    </Field.Root>
                    <Field.Root invalid={props.errors.github && props.touched.github}>
                        <Field.Label>
                            GitHub
                        </Field.Label>
                        <Input
                            type="text"
                            placeholder="@yourname"
                            value={props.values.github}
                            name="github"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            bg="gray.700/20"
                            _hover={{bg:"gray.700/30"}}
                        />
                        <Field.ErrorText>{props.errors.github}</Field.ErrorText>
                    </Field.Root>
                    <Button disabled={uploadedFiles.length == 0 || imageVal} type="submit" bg="red.400" width="full">
                        Generate My Ticket
                    </Button>
                </VStack>
            </Form>
            )}
                
            </Formik>
            </Box>
        </VStack>
    )
}

export default FormSection;