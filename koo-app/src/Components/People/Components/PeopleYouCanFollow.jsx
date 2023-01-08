import React, { useState } from "react";
import FollowButton from "./FollowButton";
import { Flex,Heading,Text } from "@chakra-ui/react";
import { Image, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import {Link,useParams} from "react-router-dom";


function PeopleYouCanFollow() {
  let {id}=useParams();
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch(`http://localhost:3001/peopleyoucanfollow`)
    .then(res=>res.json())
    .then((data)=>setData(data))
  },[])

  return (
    <div>
      <Heading margin="20px" as='h4' size='md' alignContent="start">People You Can Follow</Heading>
      {data.map((person) => {
        return (
          <>
            <Link to={`/navbar/individualuser/${person.id}`}>
            <Flex borderRadius="10px 10px 0px 0px" border="1px solid #e8e8e3" color="#424242" w={570} h={77} maxWidth={900} alignItems="center" gap="30" m="auto">
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
            </Link>
          </>
        );
      })}
    </div>
  );
}
export default PeopleYouCanFollow;