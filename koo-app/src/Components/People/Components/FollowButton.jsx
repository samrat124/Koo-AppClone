import React from 'react';
import {useState} from "react";
import { Box, Button, useDisclosure,CircularProgress } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,Spinner
} from '@chakra-ui/react'
function FollowButton() {
  const [follow,setFollow]=useState("+ Follow");
  const [isFollow,setIsFollow]=useState("Unfollow");
  const [isFollowed,setisFollowed]=useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading,setLoading]=useState(false);
  const handleFollow=()=>{
    onOpen();
    setisFollowed(!isFollowed);
    setLoading(true);
    setTimeout(()=>{
      isFollowed ? setFollow("Unfollow") :setFollow(" + Follow")
      isFollowed ? setIsFollow("Follow") :setIsFollow("Unfollow")
      setLoading(false)
    },500)
  }
  if(loading){
    // return <CircularProgress isIndeterminate color='green.300' />
    return <Spinner color='blue.500' size='lg' />
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
            <Box>You will not be able to see any more content from this person. Are you sure you want to {isFollow}?</Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='gray' bg={"rgb(128, 155, 157)"} w="80px" h="32px" borderRadius="20px" mr={3} onClick={onClose}>
              Yes
            </Button>
            <Button variant='ghost' w="80px" h="32px" border="1px solid rgb(128, 155, 157)" borderRadius="20px" onClick={onClose}>No</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      </>
  )
}

export default FollowButton;