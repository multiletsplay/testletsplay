import React from 'react'
import MatchingCard from './MatchingCard'

const MatchingList = ({data}) => {

 

  return (
    <>
    {data &&
      data.map((item)=>(     
        <MatchingCard item={item} key={item.id}/>
      ))
    }
    </>
  )
}

export default MatchingList
