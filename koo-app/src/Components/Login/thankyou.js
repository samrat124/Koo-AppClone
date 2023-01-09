import React from 'react'
import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

function Thankyou() {
    let [sound,setSound]=useState(false);
  return (
    <div>
    {sound?<ReactAudioPlayer style={{position:"absolute",top:"-500px"}}
                src="/Thankyou,We are Open For your Suggestion..mp3"
                autoPlay={true}
                controls

            />:null} 

    <Button bg="RGB(167 180 194)" colorScheme="white" w="50%" onClick={()=>{
        setSound(!sound);
    }} >
Thankyou
 
    </Button>
    </div>
  )
}

export default Thankyou