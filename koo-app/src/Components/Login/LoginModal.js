import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody, Box,
    ModalCloseButton, Button, FormControl, Input, useDisclosure, FormLabel, Text
} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { FcGoogle } from "react-icons/fc"

export const InitialFocus = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [state, setState] = useState(true);
    const [number, setNumber] = useState("");
    const [otp, setOtp] = useState("");



    const handle = () => {

        setState(false);


    }

    return (
        <>
            <Button onClick={onOpen}>Login</Button>
            {/* <Button ml={4} ref={finalRef}>
          I'll receive focus on close
        </Button> */}

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent textAlign="center" borderRadius="18px" height="600px" >
                    <ModalHeader marginTop="20px"   >{state ? "Enter your Mobile Number" : "Enter OTP"}</ModalHeader>
                    <ModalHeader fontSize="16px" marginBottom="30px" >{state ? null : `OTP Sent to ${number}`}</ModalHeader>

                    <ModalCloseButton />
                    <ModalBody pb={6} marginTop="-40px">
                        <FormControl>
                            {/* <FormLabel>First name</FormLabel> */}
                            {state ? <Box  ><Input ref={initialRef} value={number} onChange={(event) => setNumber(event.target.value)} w="70%" textAlign="center" type="number" borderRadius="20px" placeholder='Mobile Number' /></Box> :
                                <Box><Input ref={initialRef} value={otp} onChange={(event) => setOtp(event.target.value)} w="70%" textAlign="center" type="number" borderRadius="20px" placeholder='Enter OTP' /></Box>}

                        </FormControl>
                        <br></br>



                        {state ? <Button colorScheme='blue' onClick={handle} w="70%" borderRadius="20px">Get OTP</Button> :
                            <Button colorScheme='blue' onClick={handle} w="70%" borderRadius="20px">Verify</Button>}

                        <br></br>
                        <br></br>
                        <hr />
                        {/* <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder='Last name' />
              </FormControl> */}
                        <Box display="flex" flexDirection="column" textAlign="center" gap="5" padding="5">
                            <Button bg="none" border="1px solid grey" borderRadius="40px" p='6' w="90%" margin="auto" display="flex" gap="3" alignItems="center"><div style={{ fontSize: "22px" }}><FcGoogle /></div><div>Sign-in with Google</div></Button>
                            <Button bg="none" border="1px solid grey" borderRadius="40px" p='6' w="90%" margin="auto" display="flex" gap="3" alignItems="center"><div style={{ fontSize: "22px" }}><FcGoogle /></div><div>Sign-in with FaceBook</div></Button>
                            <Button bg="none" border="1px solid grey" borderRadius="40px" p='6' w="90%" margin="auto" display="flex" gap="3" alignItems="center"><div style={{ fontSize: "22px" }}><FcGoogle /></div><div>Sign-in with Gmail</div></Button>

                        </Box>

                        <Box>

                            <Text display="flex" justifyContent="center" gap="2" alignItems="center" fontSize="14px"><input type="checkbox"/> I agree to receive important updates via Whatsapp
                            </Text>
                            {/* <Text display="flex" justifyContent="center" gap="2" alignItems="center" fontSize="14px"> By continuing, I accept <b>Terms of Service Privacy Policy and Community Guidelines</b>. */}
                            {/* </Text> */}

                        </Box>

                    </ModalBody>


                </ModalContent>
            </Modal>
        </>
    )
}