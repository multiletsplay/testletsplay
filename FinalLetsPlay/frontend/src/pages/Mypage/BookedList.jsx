import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import ReviewList from '../../components/UI/ReviewList'

const BookedList = () => {
  return (
    <Container>
    <Row>
    <div>
      <h3>예약 목록</h3>
      <p>예약완료 된 목록을 한번에 확인 하실 수 있습니다.</p>
    </div>

     <Col className='mt-40'>
      <h5>레슨</h5>
        <ReviewList />

      <h5>시설</h5>
     </Col> 



      


    </Row>
    </Container>
  )
}

export default BookedList
