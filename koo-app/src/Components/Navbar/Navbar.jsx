
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

import "./Navbar.css";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import VideoCard from "../videocard/VideoCard";
import { useState } from "react";
import Profile from "./Profile";
import Search from "../Login/Google";


const Navbar = () => {
const[data,setState]=useState([]);

useEffect(()=>{

  fetch("http://localhost:3001/peopleyoucanfollow?_Page=1&_limit=5").then((res)=>res.json()).then((data)=>{

       setState(data);
console.log(data);
  })

},[])

  return (
    <div className="NavbarMain">
      <div className="sideBarLeft">
        <div className="NavbarLogo">
          <img
            className="navLogo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQale17xtS5E4Kyg8xAhtvl4-V2pPqUJdK_vi8a4Aeq&s"
            alt="logoNav"
          />
        </div>
        <div className="NavbarLink">
          <div className="main">
            <div className="icon">
              <AiFillHome />
            </div>
            <div className="text">
              <Link
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  justifyContent: "center",
                }}
                to="/feed"
              >
                Feed
              </Link>
            </div>
          </div>
          <div className="main">
            <div className="icon">
              <CgProfile />
            </div>
            <div className="text">
              <Link
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  justifyContent: "center",
                }}
                to="/profile"
              >
                Profile
              </Link>
            </div>
          </div>
          <div className="main">
            <div className="icon">
              <FiHash />
            </div>
            <div className="text">
              <Link
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  justifyContent: "center",
                }}
                to="/explore"
              >
                Explore
              </Link>
            </div>
          </div>{" "}
          <div className="main">
            <div className="icon">
              <MdLanguage />
            </div>
            <div className="text">
              <Link
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  justifyContent: "center",
                }}
                to="/language"
              >
                Language
              </Link>
            </div>
          </div>{" "}
          <div className="main">
            <div className="icon">
              <BsSearch />
            </div>
            <div className="text">
              <Link
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  justifyContent: "center",
                }}
                to="/search"
              >
                Search
              </Link>
            </div>
          </div>{" "}
          <div className="main">
            <div className="icon">
              <IoIosNotifications />
            </div>
            <div className="text">
              <Link
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  justifyContent: "center",
                }}
                to="/notification"
              >
                Notification
              </Link>
            </div>
          </div>{" "}
          <div className="main">
            <div className="icon">
              <FiLogOut />
            </div>
            <div className="text">
              <Link
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  justifyContent: "center",
                }}
                to="/logout"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>

        <Button
         
         colorScheme="blue"
          width="200px"
          m="auto"
          mt="20px"
        >
          + Koo
        </Button>
        <Button
          
           colorScheme="blue"
          m="auto"
          mt="100px"
          mb="20px"
          width="200px"
        >
          Signup
        </Button>
      </div>

      <div className="NavbarComp">
        <div className="UpperNav">
          <Link to="/feed">Feed</Link>
          <Link to="/people">People</Link>
          <Link to="/polls">Polls</Link>
          <Link to="/videos">Videos</Link>
          <Link to="/cricket">Cricket</Link>
          <Link to="/new">New</Link>
          <Link to="/Following">Following</Link>
          <Link to="/popular">Popular</Link>
        </div>
                
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
          width="200px"
          m="auto"
          borderRadius="20px"
          
          mt="20px"
        >
          Follow
        </Button>
          </div>
        
      </div>
      <div className="NavbarSidebar">
        <>
          {/* <div className="SearchIcon">
            <div className="Search">
              {" "}
              <BsSearch />
            </div>
            <Input
              type="text"
              className="InputSearch"
              placeholder="Search by the title ..."
              mt="10px"
              width="350px"
              borderRadius="30px"
              padding="20px"
            />
            <div className="MicroPhone">
              {" "}
              <BiMicrophone />
            </div>
          </div> */}
          
          <Box marginLeft="20px" marginTop="20px"><Search/></Box> 



          <div className="main1">
            <div className="heading">
              <Heading as="h1" size="md">
                Trending Hashtag
              </Heading>
            </div>
            <div className="i">
              <AiOutlineArrowRight />
            </div>
          </div>
          <div className="TrendingSideBar">
            <div className="T1">
              <div className="sideMain">
                <Text fontSize="md" textAlign="left">
                #haldwani
                </Text>

                <div className="TreImage">
                  <Image
                    className="im"
                    boxSize="25px"
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abramov"
                    borderRadius="50%"
                    float="left"
                  />
                  <Image
                    className="im"
                    boxSize="25px"
                    src="https://www.shutterstock.com/image-photo/image-happy-brunette-man-wearing-260nw-1489874846.jpg"
                    alt="Dan Abramov"
                    borderRadius="50%"
                    float="left"
                  />
                  <Image
                    className="im"
                    boxSize="25px"
                    src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Dan Abramov"
                    borderRadius="50%"
                    float="left"
                  />
                  <Image
                    className="im"
                    boxSize="25px"
                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                    alt="Dan Abramov"
                    borderRadius="50%"
                    float="left"
                  />
                </div>
              </div>
              <div className="circle">
              <IoIosAddCircle/>
              </div>
            </div>
            <div className="T1">
              <div className="sideMain">
                <Text fontSize="md" textAlign="left" >
                #indvsl
                </Text>

                <div className="TreImage">
                  <Image
                    className="im"
                    boxSize="25px"
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abramov"
                    borderRadius="50%"
                    float="left"
                  />
                  <Image
                    className="im"
                    boxSize="25px"
                    src="https://www.shutterstock.com/image-photo/image-happy-brunette-man-wearing-260nw-1489874846.jpg"
                    alt="Dan Abramov"
                    borderRadius="50%"
                    float="left"
                  />
                  <Image
                    className="im"
                    boxSize="25px"
                    src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Dan Abramov"
                    borderRadius="50%"
                    float="left"
                  />
                  <Image
                    className="im"
                    boxSize="25px"
                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                    alt="Dan Abramov"
                    borderRadius="50%"
                    float="left"
                  />
                </div>
              </div>
              <div className="circle">
              <IoIosAddCircle/>
              </div>
            </div>
            <div className="T1">
              <div className="sideMain">
                <Text fontSize="md" textAlign="left">
                #g20india
                </Text>

                <div className="TreImage">
                  <Image
                    className="im"
                    boxSize="25px"
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abramov"
                    borderRadius="50%"
                    float="left"
                  />
                  <Image
                    className="im"
                    boxSize="25px"
                    src="https://www.shutterstock.com/image-photo/image-happy-brunette-man-wearing-260nw-1489874846.jpg"
                    alt="Dan Abramov"
                    borderRadius="50%"
                    float="left"
                  />
                  <Image
                    className="im"
                    boxSize="25px"
                    src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Dan Abramov"
                    borderRadius="50%"
                    float="left"
                  />
                  <Image
                    className="im"
                    boxSize="25px"
                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                    alt="Dan Abramov"
                    borderRadius="50%"
                    float="left"
                  />
                </div>
              </div>
              <div className="circle">
              <IoIosAddCircle/>
              </div>
            </div>
            <div className="T1">
              <div className="sideMain">
                <Text fontSize="md" textAlign="left">
                #bharatjodoyatra
                </Text>

                <div className="TreImage">
                  <Image
                    className="im"
                    boxSize="25px"
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abramov"
                    borderRadius="50%"
                    float="left"
                  />
                  <Image
                    className="im"
                    boxSize="25px"
                    src="https://www.shutterstock.com/image-photo/image-happy-brunette-man-wearing-260nw-1489874846.jpg"
                    alt="Dan Abramov"
                    borderRadius="50%"
                    float="left"
                  />
                  <Image
                    className="im"
                    boxSize="25px"
                    src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Dan Abramov"
                    borderRadius="50%"
                    float="left"
                  />
                  <Image
                    className="im"
                    boxSize="25px"
                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                    alt="Dan Abramov"
                    borderRadius="50%"
                    float="left"
                  />
                </div>
              </div>
              <div className="circle">
              <IoIosAddCircle/>
              </div>
            </div>

            <Divider orientation="horizontal" mt="50px" />

            <div className="path">
              <Link to="/">Home</Link>
              <Link to="/press">Press</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/resource">Resource Center</Link>
              <Link to="/faq">FAQs</Link>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Navbar;
