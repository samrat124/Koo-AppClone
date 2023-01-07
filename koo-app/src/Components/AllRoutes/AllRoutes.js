
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cricket from '../Cricket/Cricket'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import Feed from '../Feed/Feed'
import People from '../People/People'
import Login from '../Login/Login'
import IndividualUser from '../People/Components/IndividualUser'



const AllRoutes = () => {
  return (
    <div>


      <Routes>

        <Route path="/" element={<Home />} />
        {/* <Route path="/feed" element={<Feed />} /> */}
        <Route path="/navbar" element={<Navbar />}>

          <Route path="cricket" element={<Cricket />} />
          <Route path="feed" element={<Feed />} />
          <Route path="login" element={<Login />} />
          <Route path="people" element={<People />} />
          <Route path="individualuser/:id" element={<IndividualUser/>} />
        </Route>



      </Routes>

    </div>
  )
}

export default AllRoutes
 

