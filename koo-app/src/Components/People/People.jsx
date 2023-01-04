import React from 'react'
import GlobalCreators from './Components/GlobalCreators'
import NewToKoo from './Components/NewToKoo'
import PeopleYouCanFollow from './Components/PeopleYouCanFollow'

const People = () => {
  return (
    <div>
      <PeopleYouCanFollow/>
      <GlobalCreators/>
      <NewToKoo/>
    </div>
  )
}

export default People