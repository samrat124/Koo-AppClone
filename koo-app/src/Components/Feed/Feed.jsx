

import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FiHash } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { IoIosAddCircle } from "react-icons/io";

import "../Navbar/Navbar.css";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import VideoCard from "../videocard/VideoCard";
import { useState } from "react";
import Profile from "../Navbar/Profile";
import Search from "../Login/Google";


const Feed = () => {
 
    const[data,setState]=useState([]);
    
    useEffect(()=>{
    
      fetch("http://localhost:3001/peopleyoucanfollow?_Page=1&_limit=5").then((res)=>res.json()).then((data)=>{
    
           setState(data);
    console.log(data);
      })
    
    },[])
  return (
    <div>
    <div className="main1">
    <div className="heading">
      <Heading as="h1" size="md">
      People you can follow
      </Heading>
    </div>
    <div className="i">
      <AiOutlineArrowRight />
    </div>
  </div> 


<Box display='flex' gap="10px" w='98%' m='auto'>
{data.map((ele)=>{
  return <Profile img={ele.image} name={ele.name} position={ele.profession} />
})}
</Box>


  <VideoCard 
    userName="Koo English"
    id="kooenglish"
    description="Welcome to the Koo family 🙂"
     url="https://youtu.be/K4TOrB7at0Y"
  ></VideoCard>



  <div className="follow">
  <Button

colorScheme="blue"
bg="blue"
  width="200px"
  m="auto"
  borderRadius="20px"
  
  mt="20px" onClick={(event)=>{

    if(event.target.innerText==="Follow"){
     event.target.innerText="Following"
     event.target.style.backgroundColor="#FFD700";
     event.target.style.color="black";
    }
    else{
     event.target.innerText="Follow"
     event.target.style.backgroundColor="blue";
     event.target.style.color="white";
    }

 }}
>
  Follow 
</Button>
  </div>
  </div>
    
  )
}

export default Feed