
import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { Link, Outlet } from "react-router-dom";
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
import Feed from "../Feed/Feed"
import { useSelector } from "react-redux";
import ControlledUsage from "./Logout";
import { InitialFocus } from "../Login/LoginModal";
import InitialFocus1  from "../Login/PostComponent/PostChakra";
import InitialFocus3 from "../Login/PostComponent/PostChak";



const Navbar = () => {
const[data,setState]=useState([]);

const[chidiya,setChidiya]=useState(true);

useEffect(()=>{

  fetch("https://mock-server-app-fqpl.onrender.com/peopleyoucanfollow?_Page=1&_limit=5").then((res)=>res.json()).then((data)=>{

       setState(data);
console.log(data);

setTimeout(()=>{

  setChidiya(false);

},5000)

  })

},[])

let isAuth=useSelector((state)=>{
       return state.isAuth

   
})
let obj=useSelector((state)=>{
      return state.obj;

})
console.log(obj);

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQale17xtS5E4Kyg8xAhtvl4-V2pPqUJdK_vi8a4Aeq&s
  return (
       
    <div className="NavbarMain">
      <div  className="sideBarLeft">
      
        <div className="NavbarLogo">
          <Link to='/'>
       {!chidiya? <img
            className="navLogo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQale17xtS5E4Kyg8xAhtvl4-V2pPqUJdK_vi8a4Aeq&s"
            alt="logoNav"
          />:
           <img
            style={{width:"500px"}}
            src="/logo.gif"
            alt="logoNav"
          />}
          </Link>
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
                to="feed"
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
                to="#"
              >
               {isAuth ? <mark style={{backgroundColor:"#FFD700", borderRadius:"10px", padding:"5px"}} >{obj.name}</mark> : "Profile" } 

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
                to="videos"
              >
                Explore
              </Link>
            </div>
          </div>{" "}
          {isAuth ?  <div className="main">
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
                to="people"
              >
                User
              </Link>
            </div>
          </div>:null}
         {isAuth ? <div className="main">
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
                to="#"
              >
                Search
              </Link>
            </div>
          </div>:null}
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
                to="new"
              >
                Notification
              </Link>
            </div>
          </div>{" "}
         
        </div>

        <Button 
         
         colorScheme="blue"
         bg="blue"
          width="200px"
          m="auto"
          mt="20px"
        >
          <InitialFocus3/>
        </Button>
       {isAuth ? <ControlledUsage/>: <InitialFocus/>}
      </div>

      <div className="NavbarComp">
        <div className="UpperNav">
          <Link to="feed">Feed</Link>
          <Link to="people">People</Link>
          <Link to="polls">Polls</Link>
          <Link to="videos">Videos</Link>
          <Link to="cricket">Cricket</Link>
          <Link to="new">New</Link>
          <Link to="following">Following</Link>
          <Link to="popular">Popular</Link>
        </div>
        <InitialFocus1/>
       <Box><Outlet/></Box>        
       {/* <Feed/> */}

        
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
             <Link to="popular"><IoIosAddCircle/></Link> 
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
              <Link to="popular"><IoIosAddCircle/></Link> 
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
              <Link to="popular"><IoIosAddCircle/></Link> 
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
              <Link to="popular"><IoIosAddCircle/></Link> 
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
