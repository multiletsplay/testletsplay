import React from 'react'
import { Container, Row } from 'reactstrap'
import MatchingList from '../../components/UI/MatchingList'

const MatchedList = () => {
  return (
    
    <Container>
    <Row>
    <div>
      <h3>매치 내역</h3>
      <p>매치가 완료 된 목록을 한번에 확인 하실 수 있습니다.</p>
    </div>

    
      <MatchingList className='mt-40' />
    
    </Row>
    </Container>
  )
}

export default MatchedList
