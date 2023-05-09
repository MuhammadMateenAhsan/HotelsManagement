import React from 'react'
import Header from './Header'
import Accomodation from './accomodation/Accomodation'
import Rooms from './RoomsSuites/RoomSuites'
import Royalfacilities from './royalfacilities_sec/Royalfacilities'
import Ourhotel from './Ourhotel'
import RoomSuites from './RoomsSuites/RoomSuites'


const Hotels = () => {
  return (
    <>
     <Header />
      <Accomodation/>
      <Royalfacilities/>
      <RoomSuites/>
      <Ourhotel/>
    </>
  )
}

export default Hotels