import React, { useState } from 'react'
import Loading from '../Loading/Loading';
import GlobalCreators from './Components/GlobalCreators'
import IndividualUser from './Components/IndividualUser';
import NewToKoo from './Components/NewToKoo'
import PeopleYouCanFollow from './Components/PeopleYouCanFollow'
import Popular from './Components/Popular';

const People = () => {
  const[load,setLoad]=useState(true)
  setTimeout(()=>{
    setLoad(false);
  },1000)
  if(load){
    return <Loading/>
  }
  return (
    <div >
      <PeopleYouCanFollow/>
      <GlobalCreators/>
      <NewToKoo/>
      <Popular/>
      <IndividualUser/>
    </div>
  )
}
export default People