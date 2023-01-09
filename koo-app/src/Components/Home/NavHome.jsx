import React from 'react'
import './NavHome.css'
import {Button, Image,Box} from'@chakra-ui/react'
import{Link} from 'react-router-dom'
import {HiOutlineHome} from 'react-icons/hi';
import {FiHash} from 'react-icons/fi';
import {SlFire} from 'react-icons/sl';
import LanguageModal from './LanguageModal';
import {CiSearch} from 'react-icons/ci'
import { InitialFocus } from '../Login/LoginModal';


const NavHome = () => {
  let loginButton={
    backgroundColor:"RGB(170 187 204)",
    borderRadius:'15px',
    height:'30px',
    color:'white',
    width:''
  }
  return (
    <div className='homeNavMain'>
      <div className='kooLogo'><div style={{display:'flex',height:'60px',alignItems:'center',margin:'auto'}}><Image h='40px' w='20%' mt='5px' ml='30%' src='https://www.kooapp.com/assets/2d634360.svg' alt='logo'/><p style={{marginTop:'10px',fontWeight:'bold',fontSize:'20px',letterSpacing:'1px'}}>Koo</p></div></div>  
      <div className='homeNav'>
        <div className='homeNavIcons'>
           <Box className='hiddenRes'> <Link className='iconNavHome' to='/navbar/feed'><HiOutlineHome size='20px'/></Link></Box>
           <Box className='hiddenRes'> <Link  className='iconNavHome' to='/navbar/explore'>< FiHash size='20px'/></Link></Box>
           <Box className='hiddenRes'> <Link  className='iconNavHome' to='/navbar/trending'><SlFire size='20px'/></Link></Box>
           <Box className='hiddenRes'> <Link  className='iconNavHome' to='/navbar/search'><CiSearch size='20px'/></Link></Box>
           <Box >  <Link  to=''><LanguageModal /></Link></Box>
            {/* <Button h='30px' borderRadius='15px' bgColor='RGB(170 187 204)' color='white'>Login</Button>style={{backgroundColor:'RGB(170 187 204)',width:'10px',}} */}
           <Box w='80px'> <  InitialFocus {...loginButton} /></Box>
        </div>
        <div id='hiddenItem'  className='homeNavBarcode'>
            <Image h='50px' w='50px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/330px-QR_code_for_mobile_English_Wikipedia.svg.png' alt='qr' />
            <p style={{marginTop:'10px',fontWeight:'bold',fontSize:'20px',letterSpacing:'1px'}}>Get Koo</p>
        </div>
      </div>
    </div>
  )
}

export default NavHome