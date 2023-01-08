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
    useDisclosure
  } from '@chakra-ui/react'

import { myAction } from '../Login/Redux/action';
import { useDispatch } from 'react-redux';


function ControlledUsage() {
    const { isOpen, onToggle, onClose } = useDisclosure()
    const dispatch1=useDispatch();
  
    return (
      <>
        <Button mr={5} onClick={onToggle}>
          Logout
        </Button>
        <Popover
          returnFocusOnClose={false}
          isOpen={isOpen}
          onClose={onClose}
          placement='right'
          closeOnBlur={false}
        >
          <PopoverContent>
            <PopoverHeader fontWeight='semibold'>Confirmation</PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              Are you sure you want to continue with your action?
            </PopoverBody>
            <PopoverFooter display='flex' justifyContent='flex-end'>
              <ButtonGroup size='sm'>
                <Button variant='outline'  onClick={()=>{
                  
                   
                   onClose();

                }} >Cancel</Button>
                <Button colorScheme='red' onClick={()=>{
                  
                  myAction(false,dispatch1);
                   onClose();

                }} >Apply</Button>
              </ButtonGroup>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      </>
    )
  }
  export default ControlledUsage;