import React from 'react'
import NavHome from './NavHome'
import './Home.css'


const Home = () => {
  return (
    <div >
      <div className='NavbarHome'><NavHome/></div>
       <div className='homeMain'>
        <div className='homeMainMid1'></div>
        <div className='homeMainMid2'><img src='https://images.kooapp.com/img/home.png' alt ='navBelowImg'/></div>
        </div>
      </div>
  )
}

export default Home