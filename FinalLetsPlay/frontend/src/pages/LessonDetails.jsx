import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../styles/lesson_detail_lay.css'
import SportType from './MatchingDetail/SportType';
import MatchCategory from './MatchingDetail/MatchCategory'
import Info from './MatchingDetail/info'
import Cost from './MatchingDetail/cost'
import Comment from './MatchingDetail/comment'
import MainBanner from './MatchingDetail/MainBanner'
import Favorite from '../components/UI/favorite'

const LessonDetails = () => {
  return (
    <Container>
      <Row className="m40">
        <Col lg='8'>
          <div>
            <div className='match_detail_lay'>
              <main >
                <div className='main-content'>

                <SportType/>

                <h2>제목이 나오는 영역</h2>
                <h5 style={{marginBottom: '30px'}}>작성자(닉네임)</h5>

                <div className='carouselLesson'>
                  Carousel
                </div>

                <MatchCategory category='참가비'/>
                <MatchCategory category='상세정보'/>
                <MatchCategory category='주의사항'/>
                <MatchCategory category='추천시설'/>

                <h4 style={{marginBottom: '7px', fontWeight: 'bold'}}>레슨비/시설비</h4>
                <Cost/>
                <hr/>
                <Info title='상세정보'/>
                <hr/>
                <Info title='주의사항'/>
                <hr/>

                <h4 style={{margin: '40px auto'}}>후기(20)</h4>

                <div className="comment">
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </div>

                </div>
              </main>
            </div>
          </div> 
        </Col>

        <Col lg='4'>
          <div className="main-banner">
            <Favorite/>
            <MainBanner/>
          </div>
      
        </Col>
      </Row>
      
    </Container>
  );
}

export default LessonDetails
