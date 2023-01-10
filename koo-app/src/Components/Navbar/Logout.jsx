import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    ButtonGroup,
    useDisclosure,Box
  } from '@chakra-ui/react'

import { myAction } from '../Login/Redux/action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function ControlledUsage() {
    const { isOpen, onToggle, onClose } = useDisclosure()
    const dispatch1=useDispatch();
    let navigate=useNavigate();
  
    return (
      <>
        <Button  onClick={onToggle} colorScheme="blue" bg="blue" w="75%" m="auto">
          Logout
        </Button>
      <Box position="absolute" top="450px" left="70px"> <Popover
          returnFocusOnClose={false}
          isOpen={isOpen}
          onClose={onClose}
          placement='right'
          closeOnBlur={false}
        >
          <PopoverContent style={{width:"100%"}}>
            <PopoverHeader fontWeight='semibold'>Confirmation</PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              Are you sure ?
            </PopoverBody>
            <PopoverFooter display='flex' justifyContent='flex-start'>
              <ButtonGroup size='sm'>
                <Button variant='outline'  onClick={()=>{
                  
                   
                   onClose();

                }} >Cancel</Button>
                <Button colorScheme='red' onClick={()=>{
                  
                  myAction(false,dispatch1);
                   onClose();
                   navigate("/");

                }} >Apply</Button>
              </ButtonGroup>
            </PopoverFooter>
          </PopoverContent>
        </Popover></Box>
      </>
    )
  }
  export default ControlledUsage;