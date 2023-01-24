import React from 'react'
import Favorite from './favorite'
import '../../styles/layout.css'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const FacilityCard = ({item}) => {


  return (
    <Col lg='3' md='4' className='mb-20'>
    <div className="facility">
    <Link to={`/facility/${item.id}`}><p className="img"><span className="fac-review">4/5점</span></p></Link>
      <div>
        <Link to={`/facility/${item.id}`}><p className="fac-title">{item.title}</p></Link>
        <p className="review-count">이용자 리뷰 10개</p>
        <p><span className="match-location">{item.location}</span></p> 
        <Favorite />
      </div>
    </div>
    </Col>
  )
}

export default FacilityCard
