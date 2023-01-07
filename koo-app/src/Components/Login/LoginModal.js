import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody, Box,
    ModalCloseButton, Button, FormControl, Input, useDisclosure, FormLabel, Text
} from '@chakra-ui/react'
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import { useState, useRef } from 'react'
import { FcGoogle } from "react-icons/fc"
import ReCAPTCHA from "react-google-recaptcha";
import { App } from "./Google"
import { toast, ToastContainer } from 'react-toastify';
import { BsFacebook } from "react-icons/bs"
import {useDispatch} from "react-redux"

import ReactAudioPlayer from 'react-audio-player';
import { myAction, myAction1 } from './Redux/action';

export const InitialFocus = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [state, setState] = useState(true);
    const dispatch=useDispatch();

    const [check, setCheck] = useState(true);
    const captacharef = useRef();
    const [obj, setObj] = useState({
        number: "",
        otp: "",
        name: "",
        email: ""
    })
const[sound,setSound]=useState("");

    const notify1 = () => {

        toast.warn("Wrong OTP")

    }
    const notify2 = () => {

        toast.success("Login Successfull")

    }
    const notify3 = () => {

        toast.success(`Hello ${obj.name}`)




    }
    const notify4 = () => {

        toast.success(`OTP Sent Successfully`)

    }

    const handle1 = () => {

        notify4();

        setState(false);


    }
    const handle2 = () => {
        if (obj.otp == 1234) {
            setState(true);

            notify2();

            setState("Details");

        }
        else {
            setObj({ ...obj, otp: "" })
            notify1();
        }

    }
    const handle3 = () => {

        notify3();
        localStorage.setItem("isAuth", true);
        localStorage.setItem("loginData", JSON.stringify(obj));

        onClose();
        setSound("sound");

        fetch("http://localhost:3001/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        


        }).then((res) => {

            console.log(res.ok);

        })
        myAction(true,dispatch);
        myAction1(obj,dispatch);
        

    }


    const handleRecaptcha = (value) => {


        setCheck(false)

    }


    return (
        <>
            <ToastContainer theme="dark" />
           {sound?<ReactAudioPlayer style={{position:"absolute",top:"-100px"}}
                src="/Hello,Welcome To KOO APP.mp3"
                autoPlay={true}
                controls

            />:null} 
            <Button onClick={onOpen}>Login</Button>


            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent textAlign="center" borderRadius="18px" height="650px" >
                    {state == true ? <ModalHeader marginTop="20px" > Enter your Mobile Number </ModalHeader> : null}
                    {state == false ? <ModalHeader marginTop="20px"> Please Enter OTP </ModalHeader> : null}


                    {state == false ? <ModalHeader fontSize="16px" marginBottom="5px" > {`OTP Sent to ${obj.number}`}</ModalHeader> : null}
                    {state !== "Details" ? null : <ModalHeader fontSize="16px" marginTop="20px" >Please Enter Your Details</ModalHeader>}



                    <ModalCloseButton />
                    <ModalBody pb={6} >
                        <FormControl  >
                            {/* <FormLabel>First name</FormLabel> */}
                            {state == true ? <Box p='2' ><Input ref={initialRef} value={obj.number} onChange={(event) => setObj({ ...obj, number: event.target.value })} w="70%" textAlign="center" type="number" borderRadius="20px" placeholder='Mobile Number' /></Box> :
                                null}
                            {state == false ? <Box ><Input ref={initialRef} value={obj.otp} onChange={(event) => setObj({ ...obj, otp: event.target.value })} w="70%" textAlign="center" type="password" borderRadius="20px" placeholder='Enter OTP' /></Box> : null}
                            {state == "Details" ? <Box p='2' ><Input ref={initialRef} value={obj.name} onChange={(event) => setObj({ ...obj, name: event.target.value })} w="70%" textAlign="center" type="text" borderRadius="20px" placeholder='Enter Your Name' /></Box> : null}
                            {state == "Details" ? <Box p='2' ><Input ref={initialRef} value={obj.email} onChange={(event) => setObj({ ...obj, email: event.target.value })} w="70%" textAlign="center" type="email" borderRadius="20px" placeholder='Enter Your Email' /></Box> : null}

                        </FormControl>

                        <br></br>



                        {obj.number !== "" ? <Box display="flex" pb="10" justifyContent="center" > <ReCAPTCHA ref={captacharef} sitekey="6LfNXdEjAAAAALF6Gp4pMyNhdx7vSArQAP3bkw2E" onChange={handleRecaptcha} /> </Box> : null}

                        {state == true ? <Button disabled={check || obj.number.length !== 10} colorScheme='blue' bg="blue" onClick={handle1} w="70%" borderRadius="20px"  >Get OTP</Button> : null}
                        {state == false ? <Button colorScheme='blue' bg="blue" disabled={obj.otp.length == 0} onClick={handle2} w="70%" borderRadius="20px">Verify</Button> : null}
                        {state == "Details" ? <Button colorScheme='blue' bg="blue" disabled={obj.name.length == 0 || obj.email.length == 0} onClick={handle3} w="70%" borderRadius="20px">Submit</Button> : null}


                        <br></br>


                        <br></br>
                        <hr />

                        {obj.number == "" ? <Box display="flex" flexDirection="column" textAlign="center" gap="5" padding="5">
                            <Button bg="none" border="1px solid grey" borderRadius="40px" p='6' w="90%" margin="auto" display="flex" gap="3" alignItems="center"><div style={{ fontSize: "22px" }}><FcGoogle /></div><div>Sign-in with Google</div></Button>
                            <Button bg="none" border="1px solid grey" borderRadius="40px" p='6' w="90%" margin="auto" display="flex" gap="3" alignItems="center"><div style={{ fontSize: "22px" }}><BsFacebook /></div><div>Sign-in with FaceBook</div></Button>
                            {/* <Button bg="none" border="1px solid grey" borderRadius="40px" p='6' w="90%" margin="auto" display="flex" gap="3" alignItems="center"><div style={{ fontSize: "22px" }}><FcGoogle /></div><div>Sign-in with Gmail</div></Button> */}

                        </Box> : null}

                        {/* <Box><img style={{width:"100%",height:"150px"}} src="https://wp-socialnation-assets.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/06/18184047/Koo-app.png" alt="one" /></Box> */}

                    </ModalBody>

                    <ModalFooter >
                        <Box p="7">

                            <Box display="flex" justifyContent="center" gap="2" alignItems="center" fontSize="14px"><input type="checkbox" checked /> <Text textAlign="center">I agree to receive important updates via Whatsapp</Text>
                            </Box>
                            {/* <Text display="flex" justifyContent="center" gap="2" alignItems="center" fontSize="14px"> By continuing, I accept <b>Terms of Service Privacy Policy and Community Guidelines</b>. */}
                            {/* </Text> */}

                        </Box>
                    </ModalFooter>

                </ModalContent>
            </Modal>
        </>
    )
}