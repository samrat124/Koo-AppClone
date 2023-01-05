import React from 'react'
import NavHome from './NavHome'
import './Home.css'
import { Button, Heading } from '@chakra-ui/react'
import {AiOutlineArrowRight} from 'react-icons/ai'


const Home = () => {
  return (
    <div >
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
      </div>
  )
}

export default Home