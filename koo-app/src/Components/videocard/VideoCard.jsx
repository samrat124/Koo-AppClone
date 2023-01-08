import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  IconButton,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import ReactPlayer from "react-player";

import { BsThreeDotsVertical } from "react-icons/bs";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import {BsFillShareFill } from "react-icons/bs";
import {AiFillLike} from "react-icons/ai";
import { Center} from '@chakra-ui/react'

import {AiFillDislike,BiCommentDetail,FaShare} from 'react-icons/fa'
export default function VideoCard(props) {
const[like,setLike]=useState(99);

  return (
    <>
    <Center>
      <Card maxW="xl"  m='auto'  mt='20px'  w='90%' bg='white'>
        <CardHeader >
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar
                name="Segun Adebayo"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Koo.svg/1200px-Koo.svg.png"
              />

              <Box>
                <Heading size="sm">{props.userName}</Heading>
                <Text>@{props.id}</Text>
              </Box>
            </Flex>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              icon={<BsThreeDotsVertical />}
            />
          </Flex>
        </CardHeader>
        <CardBody>
          
          <Text mt="-10px" >{props.description}</Text>

          <ol style={{display:"flex",marginTop:"20px",marginBottom:"20px", gap:"10px", flexDirection:"column" }}>

          <li>Follow people you like by clicking on the ’+ Follow’ button to see their posts in your feed.</li>
<li>Share your thoughts with others and gain a following.</li>
          </ol>
          <p>Happy Koo to you!</p>
        </CardBody>
        <ReactPlayer
          className='react-player'
         url='https://www.youtube.com/shorts/QQuOS0PeoQI'
          width='100%'
          height='250px'
          playing={true}
        />

        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <Button flex="1" variant="ghost" disabled={like>=100?true:false} leftIcon={<AiFillLike/>} onClick={()=>{

                         setLike(like+1);

          }}>
            Like  {like}
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<BsFillChatLeftDotsFill/>}>
            Comment
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<BsFillShareFill/>}>
            Share
          </Button>
        </CardFooter>
      </Card>
      </Center>
    </>
  );
}
