import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Box,
  } from '@chakra-ui/react'
  import {
     Button, FormControl, Input, useDisclosure, FormLabel, Text
} from '@chakra-ui/react'
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import {useState} from "react";
 
  
import { PostBox } from './PostBox'
import "../../Post/Post.css";

function InitialFocus1() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const[text, setText]= useState('');

  const handlechange = (event)=>{
    console.log("On change");
    setText(event.target.value)
}
  
    return (
      <>
        <button style={{width:"100%"}} onClick={onOpen}><Box w="100%"><PostBox/></Box></button>
        
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            
            <ModalCloseButton />
            <ModalBody   >
            <div >
      <div id="sh-top-div">
        <div id="sh-top-left">
          <div style={{ marginTop: "14px" }}>
            {" "}
            <img
              src="https://www.kooapp.com/_next/static/media/create_back-arrow.cea4aa95.svg"
              alt=""
              width="90%"
            />{" "}
          </div>
          <div style={{ marginTop: "13px" }}>
            {" "}
            <img
              src="https://www.kooapp.com/_next/static/media/profilePlaceholderYellow.df4b6e90.svg"
              width="45%"
              alt=""
            />{" "}
          </div>
        </div>
        <div id="sh-post-div">
          {/* <button id="g-post-button">Post</button> */}
        </div>
      </div>
      <div style={{width:"100%",margin:"20px 0px 20px 0px"}} >
        <textarea style={{width:"100%",color:"grey"}}
          name=""
          id=""
          value={text}
          cols="80"
          rows="10"
          vaalue={text}
          placeholder="Whats on your mind?"
          onChange={handlechange}
        ></textarea>
      </div>
      <div id="sh-bottom-div">
          <div id="sh-bottom-main-left">
              <div><img src="https://img.icons8.com/windows/2x/image-gallery.png" alt="" width="50%"  /></div>
              <div><img src="https://img.icons8.com/fluency-systems-regular/2x/video-clip.png" alt="" width="70%" /></div>
              <div style={{marginTop:"-10px"}}><img src="https://www.kooapp.com/_next/static/media/create_add-link.518e015c.svg" alt=""  /></div>
              <div style={{marginTop:"-10px"}}><img src="https://www.kooapp.com/_next/static/media/create_add-poll.3aec89c2.svg" alt="" width="" /></div>
          </div>
        

          <div id="sh-bottom-main-right">
          <img src="https://img.icons8.com/fluency-systems-regular/512/microphone.png" width="20px"
           alt="" />
        <br />
           {text.length}/400 
          </div>
      
      </div>
    </div>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Post
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default InitialFocus1;