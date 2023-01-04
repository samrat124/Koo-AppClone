import React from 'react';
import FollowButton from "./FollowButton";
import { Flex,Heading,Text } from "@chakra-ui/react";
import { Image, Box } from "@chakra-ui/react";
function Popular() {
  const popular=[
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/31386620/profile1661424911315t1a2pj.png?tr=n-dp_square",
      "name":"Piramal Capital & Housing Finance Limited",
      "username":"@PiramalFinance",
      "profession":"Financial Services"
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/3560322/profile1670146872363xrpem6.png?tr=n-dp_square",
      "name":"francois gautier",
      "username":"@francoisgautier",
      "profession":"Journalist & Writer"
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/3117321/90c1d534-14b1-4ee2-b3a9-c274f8367b53voke.jpg?tr=n-dp_square",
      "name":"",
      "username":"@f_for_fun_memes",
      "profession":"Memer"
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/2756051/328A7E6F-0BB1-4681-BA70-907A244090B3-profile.jpeg?tr=n-dp_square",
      "name":"Sumit Peer",
      "username":"@sumit_peercula",
      "profession":"Political commentator"
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/5573176/8511655C-2395-4BBB-B0C6-821175BAC76B-profile.jpeg?tr=n-dp_square",
      "name":"Vivek Mishraa",
      "username":"@iamvivekmishraa",
      "profession":"Musician"
    }
  ]
  return (
    <div>
      <Heading margin="20px" as='h4' size='md' alignContent="start">Popular</Heading>
      {popular.map((person) => {
        return (
          <>
            <Flex borderRadius="8px 8px 0px 0px" borderBottom="1px solid #e8e8e3" color="#424242" w={570} h={77} maxWidth={900} alignItems="center" gap="30" m={3}>
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

export default Popular;