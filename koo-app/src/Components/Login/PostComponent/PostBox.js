import React from 'react'
 import { Input,Box} from "@chakra-ui/react"
 import {CgProfile} from "react-icons/cg"
 import {IoIosAddCircle} from "react-icons/io"
 
export const PostBox = () => {

  return (
    <div>
       
     <Box display="flex" alignItems="center" w="92%" margin="auto" marginTop="20px" ><Box mr="-30px" color="grey" fontSize="20px" zIndex="10"><CgProfile /></Box><Input bg="white" textAlign="center" placeholder="What's on Your Mind ?"  borderRadius="12px" borderColor="grey" type="text" /><Box color="grey" ml="-30px" fontSize="20px" zIndex="10"><IoIosAddCircle/></Box></Box> 



    </div>
  )
}

