import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FollowButton from './FollowButton';
import Post from './Post';


function IndividualUser() {
      const {id}=useParams();
      const [user,setUser]=useState({})
      useEffect(()=>{
        fetch(`http://localhost:3001/users/${id}`)
        .then((res)=>res.json())
        .then((data)=>setUser(data))
      },[])

      
  return (
    <Box marginLeft='4.5%' mt='2%'> 
                <Box >
              <Image src={user.image} w={570}/>
              </Box>
        <Flex borderRadius="10px 10px 0px 0px" border="1px solid #e8e8e3" color="#424242" w={570} h={77} maxWidth={900} alignItems="center" gap="30" m={0}>
              <Box>
                <Box display={"flex"}>
                <Heading as='h3' size='sm' marginLeft={2} noOfLines={1}>{user.name}</Heading>
                <Image src="https://images.kooapp.com/VerifiedAccountSheild96x96.png" w={4} m="0px 0px 2px 4px"/>
                </Box>
                <Box w={450}>
                <Text fontSize='lg' marginLeft={1} fontWeight={400} >{`${user.username} - ${user.profession}`}</Text>
                </Box>
              </Box>
              <Box style={{ marginLeft: "10px" }}>
                <FollowButton />
              </Box>
            </Flex>
            <Box marginLeft={2} lineHeight={10}>
                {user.profession}
            </Box>
            <Box w={570} marginLeft={2} noOfLines="2">
                {user.description}
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="flex-start" maxW="270px" marginTop={5} marginBottom={5}>
                <Box flexGrow={1} marginLeft="7px">
                    <span ><b>{user.followers}</b></span>
                    <span >Followers</span>
                </Box>
                <Box flexGrow={5} marginRight="1em">
                    <span><b>{user.following}</b></span>
                    <span>Following</span>
                </Box>
            </Box>
    </Box>
  )
}
export default IndividualUser;