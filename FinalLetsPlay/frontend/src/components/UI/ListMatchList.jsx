import React from 'react'
import ListMatchCard from './ListMatchCard'

const ListMatchList = ({data}) => {

  return (
    <ul className="listmatch">
    {
      data.map((item)=>(     
        <ListMatchCard item={item}/>
      ))
    }
    </ul>
  )
}
export default ListMatchList
