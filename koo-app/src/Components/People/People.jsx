import React from 'react'
import GlobalCreators from './Components/GlobalCreators'
import IndividualUser from './Components/IndividualUser';
import NewToKoo from './Components/NewToKoo'
import PeopleYouCanFollow from './Components/PeopleYouCanFollow'
import Popular from './Components/Popular';

const People = () => {
  return (
    <div>
      <PeopleYouCanFollow/>
      <GlobalCreators/>
      <NewToKoo/>
      <Popular/>
      <IndividualUser/>
    </div>
  )
}

export default People