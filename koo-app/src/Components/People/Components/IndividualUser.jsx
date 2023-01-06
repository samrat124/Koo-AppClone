import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import FollowButton from './FollowButton';

function IndividualUser() {
    const user={
        "id": 1,
        "image": "https://images.kooapp.com/koo-profile-media/profiles/36613113/profile1667287043124fqvucs.png",
        "name": "Mamata Banerjee",
        "username": "@MamataOfficial",
        "profession": "Politician",
        "description": "The Official Koo handle of Mamata Banerjee, founder Chairperson All India Trinamool Congress. Honourable Chief Minister, West Bengal.",
        "followers": "145.8K",
        "following": "4",
        "posts": [
          {
            "id": 1,
            "title": "It is been my dream to ensure every resident of Bengal leads a secure & fulfilling life.This dream has inspired me to design schemes that give holistic protection to all. Today, these schemes have come together as a testimony of my endeavor my Suraksha Kawach",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlOmDMDyRRWB2huva9_BWjx9AMH6MqY-8bqw&usqp=CAU"
          },
          {
            "id": 2,
            "title": "Through #DidirSurakshaKawach campaign, my delegates will reach out to every household to ensure that every family is covered under the protective shield of 15 GoWB schemes across 6 core sectors.It’s my resolve to not leave anyone behind in this welfare mission. (2/2)",
            "img": ""
          },
          {
            "id": 3,
            "title": "This day, 25 years ago, TMC came into existence. I recall our struggles through the years & the role we have played in empowering people, fighting injustice and inspiring hope.  I heartily congratulate everyone for believing in the power of MAA, MAATI, MANUSH.",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmM25jgnxGfaJJGdfKhaJMuH-jIdPQdIQ2rQ&usqp=CAU"
          },
          {
            "id": 4,
            "title": "I inaugurated the 28th Kolkata International Film Festival today with luminaries like Hon’ble Governor CV Bose, @SrBachchan, Jaya ji, @iamsrk, @ShatruganSinha, @SGanguly99, Rani Mukherjee, among others",
            "img": "https://images.kooapp.com/transcode_input/36613113/2213FB48-BF84-433A-9AE1-EC23B59059AE-image.jpeg"
          },
          {
            "id": 5,
            "title": "TMC’s Peace & Goodwill Concert in Shillong was a sight to behold.  Performances by the talented musicians from the North-East truly moved me.     Pre-Christmas jubilation & rejoicing with the children took me back to my childhood. I thank the hosts for this lovely evening.",
            "img": "https://images.kooapp.com/transcode_input/36613113/DA3474AA-F977-4C75-9A27-ED6F7A3C9BCD-image.jpeg"
          }
        ]
      }
  return (
    <>
                <Box>
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
    </>
  )
}

export default IndividualUser;