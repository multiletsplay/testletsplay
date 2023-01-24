import React from 'react'
import FacilityCard from './FacilityCard'

const FacilityList = ({data}) => {
  return (
    <>
    {data &&
      data.map((item)=>(   
        <FacilityCard item={item}/>
      ))
    }
    </>
  )
}

export default FacilityList
