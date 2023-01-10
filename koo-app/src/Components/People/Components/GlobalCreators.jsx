import React from 'react';
import FollowButton from "./FollowButton";
import { Flex,Heading,Text } from "@chakra-ui/react";
import { Image, Box } from "@chakra-ui/react";
import { useEffect } from 'react';
import { useState } from 'react';
function GlobalCreators() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch(`https://mock-server-app-fqpl.onrender.com/globalcreators`)
    .then(res=>res.json())
    .then((data)=>setData(data))
  },[])
  
  return (
    <div>
      <Heading margin="20px" as='h4' size='md' alignContent="start">Global Creators</Heading>
      {data.map((person) => {
        return (
          <>
            <Flex borderRadius="8px 8px 0px 0px" borderBottom="1px solid #e8e8e3" color="#424242" w={570} h={77} maxWidth={900} alignItems="center" gap="30" m="auto">
              <Box boxSize="80px">
                <Image
                  src={person.image}
                  alt={person.name}
                  borderRadius="full"
                  h="60px"
                  m="10px"
                />
              </Box>
              <Box>
                <Box display={"flex"}>
                <Heading as='h3' size='sm' noOfLines={1}>{person.name}</Heading>
                <Image src="https://images.kooapp.com/VerifiedAccountSheild96x96.png" w={4} m="0px 0px 2px 4px"/>
                </Box>
                <Box w={350}>
                <Text fontSize='lg' fontWeight={400} >{`${person.username} - ${person.profession}`}</Text>
                </Box>
              </Box>
              <Box style={{ marginLeft: "10px" }}>
                <FollowButton />
              </Box>
            </Flex>
          </>
        );
      })}
    </div>
  )
}
export default GlobalCreators;