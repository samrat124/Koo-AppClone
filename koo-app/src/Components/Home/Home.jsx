import React from 'react'
import NavHome from './NavHome'
import './Home.css'
import { Button, Heading,Text,Box,Image } from '@chakra-ui/react'
import {AiOutlineArrowRight} from 'react-icons/ai' 
import HomeCarousel from './HomeCarousel'
import kooAppqr from './kooAppqr.png'
import kooFooter from './kooFooter.png'


const Home = () => {
  return (
    <div className='homeParent' >
      <div className='NavbarHome'><NavHome/></div>
       <div className='homeMain'>
        <div className='homeMainMid1'>
          <div className='homeMid1'>
          <div><Heading size='3xl' letterSpacing='2px' ml='30px'  >Know what’s happening!</Heading></div>
    <div style={{marginTop:'30px'}}>
      <p style={{marginLeft:'30px'}}>All in your Language</p></div>
    <div><Button bgColor='RGB(99 115 131)' color='white' w='300px' mt='30px' ml='30px' borderRadius='20px' gap='20px'>Go to Feed  <AiOutlineArrowRight/></Button></div></div>
</div>
        <div className='homeMainMid2'><img src='https://images.kooapp.com/img/home.png' alt ='navBelowImg'/></div>
        </div>
        <div style={{height:'200px',alignItems:'center',marginLeft:'30px',marginTop:'50px'}}>
          <Heading size='2xl'>Features to explore</Heading>
          <p style={{marginTop:'30px'}}>Amazing features to connect with people</p>
        </div>
        <HomeCarousel/>
        <div className='homemidP3'>
          <div className='homeMidp3p1'>
            <Heading  >Koo in <br/>numbers</Heading>
            <Text>Overwhelming response across the globe</Text>
          </div>
          <div className='homeMidp3p1'>
            <Box h='400px' w='90%' borderRadius='20px'  margin='auto' display='grid'  gridTemplateColumns= 'repeat(2,1fr)' >
            <Box  textAlign='center' borderRadius='10px'backgroundColor='white' boxShadow='1px 1px 5px grey'><Heading mt='20%'>100+</Heading> <br/>Countries</Box>
            <Box  textAlign='center'   boxShadow='1px 1px 5px grey'><Heading mt='20%'>50M </Heading><br/>Downloads</Box>
            <Box  textAlign='center'    boxShadow='1px 1px 5px grey'><Heading mt='20%'>7500+</Heading> <br/>Eminent Profiles</Box>
            <Box  textAlign='center' borderRadius='10px'backgroundColor='white'   boxShadow='1px 1px 5px grey'><Heading mt='20%'>1000+</Heading><br/>Topics to explore</Box>
            </Box>
          </div>
          
        </div>
        <div>
            <Image src={kooAppqr} alt ='kooQr'/>
          </div>
          <div>
            <Image src={kooFooter} alt ='kooQr'/>
          </div>
          <div className='langFoot'><Text >Available in English, हिन्दी, मराठी, தமிழ், తెలుగు, മലയാളം, ગુજરાતી, বাংলা, & many more languages coming soon...</Text></div>
      </div>
  )
}

export default Home