import React from "react";
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

// import {AiFillDislike,BiCommentDetail,FaShare} from 'react-icons/fa'
export default function VideoCard(props) {
  return (
    <>
    <Center>
      <Card maxW="xl">
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar
                name="Segun Adebayo"
                src="https://stage-cdn.pchf.in/pchfweb/assets/images/icons/piramal-logo.svg"
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
          <Text>{props.description}</Text>
        </CardBody>
        <ReactPlayer
          className='react-player'
         url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
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
          <Button flex="1" variant="ghost" leftIcon={<AiFillLike/>}>
            Like
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
