import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {BsFillMicFill}  from "react-icons/bs"
import { Box, Input, Button, Text, Image } from "@chakra-ui/react"
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"
import Login from "./Login";
 

const Dictaphone = ({onChange1,state}) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  if(transcript!="")
  {
   onChange1(transcript);
  }
  

  return (
    <div>
      {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
      <Box display="flex" alignItems="center" w="90%" margin="auto" ><FaSearch style={{ marginRight: "-35px" }} /><Input textAlign="center" borderRadius="20px" placeholder="Search" type="text" autoFocus value={state}  onChange={(event) => {
        onChange1(event.target.value);
         
      }} /><Button  ml="-50px" bg="none" onClick={SpeechRecognition.startListening}><BsFillMicFill/></Button>   </Box>
 
      {/* <button onClick={SpeechRecognition.stopListening}>Stop</button> */}
      {/* <button onClick={resetTranscript}>Reset</button> */}
      {/* <p>{transcript}</p> */}
    </div>
  );
};
export default Dictaphone;