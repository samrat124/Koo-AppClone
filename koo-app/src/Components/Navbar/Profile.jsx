import React from 'react'
import {Box,Text,Heading,Button} from "@chakra-ui/react"

export default function Profile({img,name,position}) {
  return (
    <div>
        <Box h="185px" w="125px"  p='3' bg="white" boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' borderRadius='8px'>
                    
            <Box display="flex" flexDirection="column" textAlign="center">

        <Box  ><img style={{borderRadius:"50%" }}  src={img} alt="one" /></Box>
                <Box><Heading fontSize="12px">{name}</Heading></Box> 
                <Box><Text fontSize="12px">{position}</Text></Box> 

                <Button marginTop="10px" size="xs"  colorScheme='blue' onClick={(event)=>{

                   if(event.target.innerText==="Follow"){
                    event.target.innerText="Following"
                    event.target.style.color="black"
                    
                    event.target.style.backgroundColor="#FFD700";
                   }
                   else{
                    event.target.innerText="Follow"
                    event.target.style.backgroundColor="blue";
                    event.target.style.color="white"



                   }

                }}>Follow</Button>
            </Box>

        </Box>
    </div>
  )
}
