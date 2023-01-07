import React from 'react'
import './NavHome.css'
import {Button, Image} from'@chakra-ui/react'
import{Link} from 'react-router-dom'
import {HiOutlineHome} from 'react-icons/hi';
import {FiHash} from 'react-icons/fi';
import {SlFire} from 'react-icons/sl';
import LanguageModal from './LanguageModal';
import {CiSearch} from 'react-icons/ci'


const NavHome = () => {
  return (
    <div className='homeNavMain'>
      <div className='kooLogo'><div style={{display:'flex',alignItems:'center',margin:'auto'}}><Image h='40px' w='20%' mt='5px' ml='30%' src='https://www.kooapp.com/assets/2d634360.svg' alt='logo'/><p>Koo</p></div></div>  
      <div className='homeNav'>
        <div className='homeNavIcons'>
            <Link className='iconNavHome' to='/navbar'><HiOutlineHome/></Link>
            <Link  className='iconNavHome' to='/explore'>< FiHash/></Link>
            <Link  className='iconNavHome' to='/trending'><SlFire/></Link>
            <Link  className='iconNavHome' to='/search'><CiSearch/></Link>
            <Link  to=''><LanguageModal/></Link>
            <Button h='30px' borderRadius='15px' bgColor='RGB(170 187 204)' color='white'>Login</Button>
        </div>
        <div className='homeNavBarcode'>
            <Image h='50px' w='50px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/330px-QR_code_for_mobile_English_Wikipedia.svg.png' alt='qr' />
        </div>
      </div>
    </div>
  )
}

export default NavHome