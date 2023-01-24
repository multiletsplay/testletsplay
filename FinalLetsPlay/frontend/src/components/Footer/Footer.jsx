import React from 'react'
import './footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap"
import { Link } from 'react-router-dom'


const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
          <div className="logo">
              <div>
                <h1 className='text-white'>Let's Play</h1>
              </div>
          </div>


          <p className="footer__copyright">
              Copyright {year} developed by 1조. All rights reserved.
            </p>  

          </Col>
          <Col lg='3'>
            <div className="footer__quick-links">
              <h4 className='quick__links-title'>Top Categories</h4>
              <ListGroup className='mb-3'>
                  <ListGroupItem className='ps-0 border-0'>
                      <Link to='#'>매칭하기</Link>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0'>
                      <Link to='#'>시설예약</Link>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0'>
                      <Link to='#'>레슨예약</Link>
                  </ListGroupItem>

              </ListGroup>
            </div>
          </Col>
          <Col lg='2'>
          <div className="footer__quick-links">
              <h4 className='quick__links-title'>Useful Links</h4>
               <ListGroup className='mb-3'>
                  <ListGroupItem className='ps-0 border-0'>
                  <Link to='/help'>고객센터</Link>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0'>
                      <Link to='#'>공지사항</Link>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0'>
                      <Link to='#'>이용약관</Link>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0'>
                      <Link to='#'>개인정보처리방침</Link>
                  </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3'>
          <div className="footer__quick-links">
            <h4 className='quick__links-title'>Contact</h4>
            <ListGroup className='fotter__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                    <span><i className="ri-map-pin-line"></i></span>
                    <p>서울특별시 대치동 선릉역 2호선</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className="ri-phone-line"></i></span>
                  <p>+85 000 0000 0000</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className="ri-mail-line"></i></span>
                  <p>example@exmaple.com</p>
                </ListGroupItem>
            </ListGroup>
          </div>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer
