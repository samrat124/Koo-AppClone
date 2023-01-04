import React from 'react';
import FollowButton from "./FollowButton";
import { Flex,Heading,Text } from "@chakra-ui/react";
import { Image, Box } from "@chakra-ui/react";
function GlobalCreators() {
  const globalcreators=[
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/37418771/5FED8329-80EE-4EC7-B807-BBBD18541636-profile.jpeg?tr=n-dp_square",
      "name":"Lula",
      "username":"@lulaofficial",
      "profession":""
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/41741491/profile16700689047069fn40c.png?tr=n-dp_square",
      "name":"Dalai Lama",
      "username":"@dalailama",
      "profession":"Spiritual Leader"
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/37330610/20e3343d-5697-4a40-99ef-fe43538d6c9d.jpg?tr=n-dp_square",
      "name":"Koo For Brasil",
      "username":"@KooForBrasil",
      "profession":"Official Koo Brazil Handle"
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/37475010/profile1669163721528p8f07j.png?tr=n-dp_square",
      "name":"Duolingo Brasil 🇧🇷",
      "username":"@duolingobrasil",
      "profession":"Coruja Poliglota"
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/39006474/48144729-01F8-4158-9784-1DE3C237C4CE-profile.jpeg?tr=n-dp_square",
      "name":"Patrícia Lélis",
      "username":"@patricialelis",
      "profession":""
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/37652305/CA4F17C4-BA99-4EB1-8B4A-43E6CD33915E-profile.jpeg?tr=n-dp_square",
      "name":"Caique Aguiar",
      "username":"@caiqueaguiar",
      "profession":"Actor"
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/42084779/919fa503-28c2-4b19-8ee6-b1c8796cc96bvoke.jpg?tr=n-dp_square",
      "name":"Alex Milone",
      "username":"@alexmilone",
      "profession":"Journalist"
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/19234080/profile1659016692128kzergi.png?tr=n-dp_square",
      "name":"Sputnik",
      "username":"@sputniknews",
      "profession":"Media"
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/37391909/1A98649B-8A5F-4DDD-8912-7358D260FC50-profile.jpeg?tr=n-dp_square",
      "name":"Detremura",
      "username":"@detremura",
      "profession":"escritora"
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/37719741/ec82d4e9-7c4b-428e-aa29-591796789077.jpg?tr=n-dp_square",
      "name":"GIL DO VIGOR",
      "username":"@gildovigorofc",
      "profession":"PhD Student"
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/37762969/profile1668807908563mae0xk.png?tr=n-dp_square",
      "name":"Ale Santos",
      "username":" @Savagefiction",
      "profession":"Escritor"
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/42056831/A24725D9-BB51-4684-820A-EF0E985CBAE9-profile.jpeg?tr=n-dp_square",
      "name":"Prashant Rao",
      "username":"@prashantsrao",
      "profession":"Journalist"
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/37492270/f107206c-8eca-4cd7-9988-833554a14941.jpg?tr=n-dp_square",
      "name":"Nil Moretto",
      "username":"@nilmoretto",
      "profession":"Jornalista e criadora de conteúdo"
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/38221237/9CA8274F-D6F5-48A4-9660-9FF15CB9A1F9-profile.jpeg?tr=n-dp_square",
      "name":"Guga Noblat",
      "username":"@guganoblatreal",
      "profession":"jornalista"
    },
    {
      "image":"https://images.kooapp.com/koo-profile-media/profiles/37588420/d6480075-0f18-4d38-a034-2902bf7f2b9c.jpg?tr=n-dp_square",
      "name":"Ronny Teles",
      "username":"@RonnyCombate",
      "profession":"Criador de Conteúdo"
    }
  ]
  return (
    <div>
      <Heading margin="20px" as='h4' size='md' alignContent="start">Global Creators</Heading>
      {globalcreators.map((person) => {
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

export default GlobalCreators;