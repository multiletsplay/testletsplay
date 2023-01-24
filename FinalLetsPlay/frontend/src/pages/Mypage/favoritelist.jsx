import React from 'react'
import { Container, Row } from 'reactstrap'

const Favoritelist = () => {
  return (
    <Container>
    <Row>
    <div>
      <h3>내가 찜한 목록</h3>
      <p>찜한 목록을 한번에 확인 하실 수 있습니다.</p>
    </div>

    <div className='mt-40'>
      <div>
        <h5>매칭</h5>
      </div>

      <div>
        <h5>레슨</h5>
      </div>

      <div>
        <h5>시설</h5>
      </div>
    </div>
      

    </Row>
    </Container>
  )
}

export default Favoritelist
