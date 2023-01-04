import React from 'react';
import {useState} from "react";
import { Box, Button, useDisclosure } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
function FollowButton() {
  const [follow,setFollow]=useState("+ Follow");
  const [isFollowed,setisFollowed]=useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleFollow=()=>{
    onOpen();
    setisFollowed(!isFollowed);
    setTimeout(()=>{
      isFollowed ? setFollow("Unfollow") :setFollow(" + Follow")
    },500)
  }
  return (
    <>
    <Button color="#fff" bg="#809b9d"  size="sm" onClick={handleFollow}>{follow}</Button>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>You will not be able to see any more content from this person. Are you sure you want to {follow}?</Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Yes
            </Button>
            <Button variant='ghost' onClick={onClose}>No</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      </>
  )
}

export default FollowButton;