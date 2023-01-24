import React from 'react'
import Favorite from './favorite'
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../../styles/layout.css'

const MatchingCard = ({item}) => {
  return (
    <Col lg='3' md='4' className='mb-20'>
    <div>
      <div className="match-list">
        <p>
          <span className="deadline">마감 {item.deadline}일 전</span>
          <span className="sports-category">{item.category}</span>
          <span className="num-people">{item.people}명</span>
        </p>
        <Link to={`/matching/${item.id}`}><p className="match-title">{item.title}</p></Link>
          <p className="match-location">{item.location}</p>
          <div className="match-date">
            <span className="date">{item.date}</span>
            <span className="time">{item.deadline}</span>
          </div>
          <Favorite/>
      </div>
    </div>
    </Col>
  )
}

export default MatchingCard
