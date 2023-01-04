import React from 'react';
import FollowButton from "./FollowButton";
import { Flex,Heading,Text } from "@chakra-ui/react";
import { Image, Box } from "@chakra-ui/react";
function NewToKoo() {
  const newToKoo=[
    {
      "image":"https://images.kooapp.com/transcode_input/42187536/36FADFC4-21A3-4273-967A-E0A9DE9AFB8A-profile.jpeg?tr=n-dp_square",
      "name":"JAGSEER SINGH",
      "username":"@arjuna.jagseer",
      "profession":"Athlete"
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/41838590/C960C452-9434-4F76-BE98-AE6C39294384-profile.jpeg?tr=n-dp_square",
      "name":"Bobby kataria",
      "username":"@bobbykataria",
      "profession":"Influencer"
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/41849490/61a8745a-8160-49e4-a82f-3d74aff9bed1.jpg?tr=n-dp_square",
      "name":"Shibani Kashyap",
      "username":"@shibani_kashyap",
      "profession":"Singer"
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/41887932/fb04452f-a8c8-4a62-b272-41c314758428voke.jpg?tr=n-dp_square",
      "name":"Chandra Kanta Meghwal",
      "username":"@chandra_kantaM052",
      "profession":"Politician"
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/41936142/profile16708261891240hk1bm.png?tr=n-dp_square",
      "name":"Koo for Eminent",
      "username":"@KooForEminent",
      "profession":"Entertainment"
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/1476179/09da9091-b451-4d6c-9256-1c83969de16f.jpg?tr=n-dp_square",
      "name":"Pramod Soni",
      "username":"@thepramodsoni",
      "profession":"Journalist"
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/41988267/profile1671111968684azd3cb.png?tr=n-dp_square",
      "name":"बिज़नेस स्टैंडर्ड हिन्दी",
      "username":"@bshindi",
      "profession":"Newspaper"
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/41991224/65D6D352-5D3F-43EF-96AB-E207670A2B85-profile.jpeg?tr=n-dp_square",
      "name":"Nidhi Taneja",
      "username":"@nidhitaneja",
      "profession":"Journalist"
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/42061814/8DACE720-1DD9-4257-9848-940F3C657D29-profile.jpeg?tr=n-dp_square",
      "name":"Aditya Kalyanpur",
      "username":"@adityatabla",
      "profession":"Music"
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/42093340/da1df823-54b5-477a-8262-70f14fd3f47d.jpeg?tr=n-dp_square",
      "name":"Rangtaal Records",
      "username":"@rangtaalrecords",
      "profession":"Music Production & publisher"
    }
  ]
  return (
    <div>
      <Heading margin="20px" as='h4' size='md' alignContent="start">New To Koo</Heading>
      {newToKoo.map((person) => {
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

export default NewToKoo;