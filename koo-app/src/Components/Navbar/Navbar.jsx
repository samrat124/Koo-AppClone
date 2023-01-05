
import React from "react";
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

import "./Navbar.css";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import VideoCard from "../videocard/VideoCard";

const Navbar = () => {
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
          className="btn"
          bgColor="blue"
          color="white"
          width="200px"
          m="auto"
          mt="20px"
        >
          + Koo
        </Button>
        <Button
          className="btn"
          bgColor="blue"
          color="white"
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
          <VideoCard
            userName="Piramal Capital & Housing Finance Limited"
            id="PiramalFinanceFinancial Services"
            description="Karo nayi shuruaat by expanding your business with a Business Loan* from Piramal Finance.

            Apply now: https://www.piramalfinance.com/business-loan?utm_source=koo&;utm_medium=video&utm_campaign=business_loan&utm_id=social_media&utm_term=expand_business&utm_content=google_maps
            
            #PiramalFinance #KhwaishonKeHumsafar #BusinessLoan
            
            *Terms & Conditions Apply"
            url="https://youtu.be/K4TOrB7at0Y"
          ></VideoCard>
        
      </div>
      <div className="NavbarSidebar">
        <>
          <div className="SearchIcon">
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
          </div>

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
                <Text fontSize="xl" textAlign="left">
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
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abramov"
                    borderRadius="50%"
                    float="left"
                  />
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
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abramov"
                    borderRadius="50%"
                    float="left"
                  />
                </div>
              </div>
              <div className="circle">+</div>
            </div>
            <div className="T1">
              <div className="sideMain">
                <Text fontSize="xl" textAlign="left">
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
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abramov"
                    borderRadius="50%"
                    float="left"
                  />
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
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abramov"
                    borderRadius="50%"
                    float="left"
                  />
                </div>
              </div>
              <div className="circle">+</div>
            </div>
            <div className="T1">
              <div className="sideMain">
                <Text fontSize="xl" textAlign="left">
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
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abramov"
                    borderRadius="50%"
                    float="left"
                  />
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
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abramov"
                    borderRadius="50%"
                    float="left"
                  />
                </div>
              </div>
              <div className="circle">+</div>
            </div>
            <div className="T1">
              <div className="sideMain">
                <Text fontSize="xl" textAlign="left">
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
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abramov"
                    borderRadius="50%"
                    float="left"
                  />
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
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abramov"
                    borderRadius="50%"
                    float="left"
                  />
                </div>
              </div>
              <div className="circle">+</div>
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
