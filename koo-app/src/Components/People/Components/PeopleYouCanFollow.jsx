import React from "react";
import FollowButton from "./FollowButton";
import { Flex,Heading,Text } from "@chakra-ui/react";
import { Image, Box } from "@chakra-ui/react";

function PeopleYouCanFollow() {
  const peopleyoucanfollow = [
    {
      image:
        "https://images.kooapp.com/koo-profile-media/profiles/31386620/profile1661424911315t1a2pj.png?tr=n-dp_square",
      name: "Piramal Capital & Housing Finance Limited",
      username: "@PiramalFinance",
      profession: "Financial Services",
    },
    {
      image:
        "https://images.kooapp.com/koo-profile-media/profiles/41741491/profile16700689047069fn40c.png?tr=n-dp_square",
      name: "Dalai Lama",
      username: "@dalailama",
      profession: "Spiritual Leader",
    },
    {
      image:
        "https://images.kooapp.com/koo-profile-media/profiles/36613113/profile1667287043124fqvucs.png?tr=n-dp_square",
      name: "Mamata Banerjee",
      username: "@MamataOfficial",
      profession: "Politician",
    },
    {
      image:
        "https://images.kooapp.com/koo-profile-media/profiles/11664193/c05e75f0-ba92-4d0c-9b30-fcebaf6b3cf8voke.jpg?tr=n-dp_square",
      name: "Virat Kohli",
      username: "@virat.kohli",
      profession: "Cricketer",
    },
    {
      image:
        "https://images.kooapp.com/koo-profile-media/profiles/7036203/56DB03B1-A153-4705-8EA7-D0A54A1644BF-profile.jpeg?tr=n-dp_square",
      name: "Sadhguru",
      username: "@SadhguruJV",
      profession: "Spiritual Leader",
    },
    {
      image:
        "https://images.kooapp.com/koo-profile-media/profiles/5096644/profile16178873649853itdal.png?tr=n-dp_square",
      name: "All India Radio News",
      username: "@airnewsalerts",
      profession: "Public Service Broadcaster",
    },
    {
      image:
        "https://images.kooapp.com/koo-profile-media/profiles/2850930/8836D206-927E-4BBF-9EF9-795756CEF6E4-profile.jpeg?tr=n-dp_square",
      name: "Swami Avdheshanand Giri",
      username: "@avdheshanandg",
      profession: "Spiritual Leader",
    },
    {
      image:
        "https://images.kooapp.com/koo-profile-media/profiles/3072079/6B6C5408-7CCB-4BCF-8213-89CDC36A24FE-profile.jpeg?tr=n-dp_square",
      name: "Nitin Gadkari",
      username: "@nitin.gadkari",
      profession:
        "Minister of Road Transport & Highways, Government of India.",
    },
    {
      image:
        "https://images.kooapp.com/koo-profile-media/profiles/7374198/5c50ab26-efdd-4df0-b378-a9701e239a91voke.jpg?tr=n-dp_square",
      name: "Rajeev Chandrasekhar",
      username: "@rajeev_chandrasekhar",
      profession:
        "Union Minister of State for Electronics and Information Technology and ...",
    },
    {
      image:
        "https://images.kooapp.com/koo-profile-media/profiles/2486862/0e1be0ac-1921-4126-9d97-47db6ffe22ffvoke.jpg?tr=n-dp_square",
      name: "Piyush Goyal",
      username: "@piyushgoyal",
      profession: "Politician",
    },
    {
      image:
        "https://images.kooapp.com/koo-profile-media/profiles/2796361/63aba622-bb0e-4ae2-8df9-4d8aac860bc2voke.jpg?tr=n-dp_square",
      name: "Pralhad Joshi",
      username: "@joshipralhad",
      profession: "Politician",
    },
    {
      image:
        "https://images.kooapp.com/koo-profile-media/profiles/8325202/profile16605884586118zt3d.png?tr=n-dp_square",
      name: "BKShivani",
      username: "@BKShivani",
      profession: "Spiritual Guide on TV Prog.: Awakening With Brahma Kumaris",
    },
    {
      image:
        "https://images.kooapp.com/koo-profile-media/profiles/8438048/00C70459-6EDA-40FA-859D-520AD2159A23-profile.jpeg?tr=n-dp_square",
      name: "Chief Minister, Goa",
    },
    {
      image:
        "https://images.kooapp.com/koo-profile-media/profiles/9875395/618cbf2b-deb7-4c3c-bca4-5c2474662637.jpg?tr=n-dp_square",
      name: "All India Trinamool Congress",
      username: "@AITCOfficial",
      profession: "Political Party India",
    },
    {
      image:
        "https://images.kooapp.com/koo-profile-media/profiles/7019830/8BCA58E1-6F36-4743-9730-C29062BB4CFD-profile.jpeg?tr=n-dp_square",
      name: "Office Of Nitin Gadkari",
      username: "@OfficeOfNG",
      profession: "Politics",
    },
    {
      image:
        "https://images.kooapp.com/koo-profile-media/profiles/5250318/62ab9661-fa52-4198-95c1-192b673b2f09voke.jpg?tr=n-dp_square",
      name: "Gurudev Sri Sri Ravi Shankar",
      username: "@Gurudev",
      profession: "Spiritual Leader",
    },
    {
      image:
        "https://images.kooapp.com/koo-profile-media/profiles/11015086/profile163281125231462j4sp.png?tr=n-dp_square",
      name: "ABP Live",
      username: "@abplive",
      profession: "News",
    },
  ];

  return (
    <div>
      <Heading margin="20px" as='h4' size='md' alignContent="start">People You Can Follow</Heading>
      {peopleyoucanfollow.map((person) => {
        return (
          <>
            <Flex borderRadius="10px 10px 0px 0px" border="1px solid #e8e8e3" color="#424242" w={570} h={77} maxWidth={900} alignItems="center" gap="30" m={0}>
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
  );
}

export default PeopleYouCanFollow;
