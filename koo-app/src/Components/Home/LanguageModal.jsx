import React from 'react'
import {GrLanguage} from 'react-icons/gr';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure,Button ,Box
  } from '@chakra-ui/react'

const LanguageModal = () => {


    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    
        <>
      <Button bgColor='transparent' onClick={onOpen}><GrLanguage size='20px'/></Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Button onClick={onClose}>English</Button>
              <Button onClick={onClose}>
                Hindi
              </Button>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
             
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
     
  )
}

export default LanguageModal