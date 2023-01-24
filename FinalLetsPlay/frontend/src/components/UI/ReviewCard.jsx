import React, { useState } from 'react'
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion';
import Modal from '../UI/Modal';
import ReviewForm from '../../pages/Mypage/ReviewForm';
import '../../styles/modal.css'


const ReviewCard = (props) => {

  const [reviewForm, setReviewForm] = useState(false);


  return (
    
    <Col lg='3' md='4' className='mb-20'>
    <div>
      <div className="match-list">
        <p>
          <span className="sports-category">테니스</span>
        </p>
        <Link to={`/`}><p className="match-title">레슨제목을 나타내는 구간</p></Link>
          <p className="match-location">경기도 부천시 부천구 부천로 24</p>
          <p className="match-location">2023년 1월 18일</p>


          <motion.button whileHover={{scale:1.1}} className='review__btn'  onClick={() => setReviewForm(!reviewForm)} >
            <i class="ri-edit-line"></i>후기작성 하기
          </motion.button>

          {reviewForm && (
          <Modal closeModal={() => setReviewForm(!reviewForm)}>
            <ReviewForm />
          </Modal>
          )}
      </div>
    </div>

   
    </Col>
  )
}

export default ReviewCard
