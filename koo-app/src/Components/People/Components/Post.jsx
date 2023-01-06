import {
  Box,
  Flex,
  Heading,
  Image,
  Menu,
  Button,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Avatar,
} from "@chakra-ui/react";
import React from "react";

function Post() {
  const person = {
    id: 1,
    image:
      "https://images.kooapp.com/koo-profile-media/profiles/36613113/profile1667287043124fqvucs.png",
    name: "Mamata Banerjee",
    username: "@MamataOfficial",
    profession: "Politician",
    description:
      "The Official Koo handle of Mamata Banerjee, founder Chairperson All India Trinamool Congress. Honourable Chief Minister, West Bengal.",
    followers: "145.8K",
    following: "4",
    posts: [
      {
        id: 1,
        title:
          "It is been my dream to ensure every resident of Bengal leads a secure & fulfilling life.This dream has inspired me to design schemes that give holistic protection to all. Today, these schemes have come together as a testimony of my endeavor my Suraksha Kawach",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlOmDMDyRRWB2huva9_BWjx9AMH6MqY-8bqw&usqp=CAU",
      },
      {
        id: 2,
        title:
          "Through #DidirSurakshaKawach campaign, my delegates will reach out to every household to ensure that every family is covered under the protective shield of 15 GoWB schemes across 6 core sectors.It’s my resolve to not leave anyone behind in this welfare mission. (2/2)",
        img: "",
      },
      {
        id: 3,
        title:
          "This day, 25 years ago, TMC came into existence. I recall our struggles through the years & the role we have played in empowering people, fighting injustice and inspiring hope.  I heartily congratulate everyone for believing in the power of MAA, MAATI, MANUSH.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmM25jgnxGfaJJGdfKhaJMuH-jIdPQdIQ2rQ&usqp=CAU",
      },
      {
        id: 4,
        title:
          "I inaugurated the 28th Kolkata International Film Festival today with luminaries like Hon’ble Governor CV Bose, @SrBachchan, Jaya ji, @iamsrk, @ShatruganSinha, @SGanguly99, Rani Mukherjee, among others",
        img: "https://images.kooapp.com/transcode_input/36613113/2213FB48-BF84-433A-9AE1-EC23B59059AE-image.jpeg",
      },
      {
        id: 5,
        title:
          "TMC’s Peace & Goodwill Concert in Shillong was a sight to behold.  Performances by the talented musicians from the North-East truly moved me.     Pre-Christmas jubilation & rejoicing with the children took me back to my childhood. I thank the hosts for this lovely evening.",
        img: "https://images.kooapp.com/transcode_input/36613113/DA3474AA-F977-4C75-9A27-ED6F7A3C9BCD-image.jpeg",
      },
    ],
  };
  return (
    <>
      <Flex
        borderRadius="10px 10px 0px 0px"
        border="1px solid #e8e8e3"
        color="#424242"
        w={570}
        h={77}
        maxWidth={900}
        alignItems="center"
        gap="30"
        m={0}
      >
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
            <Heading as="h3" size="sm" noOfLines={1}>
              {person.name}
            </Heading>
            <Image
              src="https://images.kooapp.com/VerifiedAccountSheild96x96.png"
              w={4}
              m="0px 0px 2px 4px"
            />
          </Box>
          <Box w={350}>
            <Text
              fontSize="lg"
              fontWeight={400}
            >{`${person.username} - ${person.profession}`}</Text>
          </Box>
        </Box>
        <Box>
          <Menu>
            <MenuButton as={Button}>
              <Image src="https://www.kooapp.com/img/ic_options_new.svg" />
            </MenuButton>
            <MenuList>
              <MenuItem>Embed Koo</MenuItem>
              <MenuItem>Follow</MenuItem>
              <MenuItem>Report Koo</MenuItem>
              <MenuItem>Block User</MenuItem>
              <MenuItem>Report User</MenuItem>
              <MenuItem>Translate</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
      <Box
        borderRadius="10px 10px 0px 0px"
        border="1px solid #e8e8e3"
        color="#424242"
        w={570}
        maxWidth={900}
        alignItems="center"
        gap="30"
        m={0}
      >
        <Text lineHeight={10} marginLeft="10px">
          {person.posts[0].title}
        </Text>
      </Box>

      <Box borderRadius="10px 10px 0px 0px"
        border="1px solid #e8e8e3"
        color="#424242"
        w={570}
        maxWidth={900}
        alignItems="center"
        gap="30"
        marginTop="16px"
        marginBottom={0}
        >
        <Stack spacing={4}>
          <InputGroup>
            <Avatar h={10} w={10} src='	https://www.kooapp.com/img/profilePlaceholderYellow.svg?tr=n-dp_small' />
            <Input type="tel" placeholder="Write Your Comment" />
          </InputGroup>
        </Stack>
      </Box>

      <Box w="570px" color="rgb(102,102,102)" display="flex" justifyContent="space-between" marginTop={5}>
        <Box display="flex" flexDirection="row" alignItems={"center"}  justifyContent="flex-start">
          <Box marginRight="6px" cursor={"pointer"} position="relative">
            <Image src="https://www.kooapp.com/_next/static/media/like_inactive.b5b17a1a.svg"/>
          </Box>
          <Box>44</Box>
        </Box>

        <Box display="flex" flexDirection="row" alignItems={"center"}  justifyContent="flex-start">
          <Box marginRight="6px" cursor={"pointer"} position="relative">
            <Image src="https://www.kooapp.com/_next/static/media/comment_inactive.6cc30280.svg"/>
          </Box>
          <Box>16</Box>
        </Box>

        <Box display="flex" flexDirection="row" alignItems={"center"} justifyContent="flex-start">
          <Box marginRight="6px" cursor={"pointer"} position="relative">
            <Image src="https://www.kooapp.com/_next/static/media/rekoo_inactive.14170981.svg"/>
          </Box>
          <Box>14</Box>
        </Box>

        <Box display="flex" flexDirection="row" alignItems={"center"} gap={0} justifyContent="flex-start">
          <Box marginRight="6px" cursor={"pointer"} position="relative">
            <Image src="https://www.kooapp.com/_next/static/media/Whatsapp1.5.4c50591a.svg"/>
          </Box>
        </Box>

        <Box display="flex" flexDirection="row" alignItems={"center"} gap={0} justifyContent="flex-start">
          <Box marginRight="6px" cursor={"pointer"} position="relative">
            <Image src="https://www.kooapp.com/_next/static/media/Share1.5.61f8eb18.svg"/>
          </Box>
        </Box>
        
      </Box>
    </>
  );
}

export default Post;
