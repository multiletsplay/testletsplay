import React from 'react'
import { Container, Row } from 'reactstrap'
import { motion } from 'framer-motion';
import FormWrapInput from '../../components/UI/FormWrapInput';

const Profile = () => {


  

  return (
    <Container>
      <Row>
        <div>
          <h3>프로필</h3>
          <p>정보 수정이 가능합니다</p>
        </div>

        <div className='mt-40 form__wrap'>
         
       
       <FormWrapInput type='text' text='ID' value='ID' label='ID'/>
       <FormWrapInput type='text' text='NAME' label='NAME' value='이름값'/>
       <FormWrapInput type='text' text='EMAIL' label='EMAIL' valueEdit='Email값 변경가능함'/>
       <FormWrapInput type='text' text='PHONE' label='PHONE' value='010-0000-0000'/>



          <div className='btn__wrap'>
              <motion.button whileTap={{scale : 1.1}}>수정하기</motion.button>
          </div>

        </div>

      </Row>
    </Container>
  )
}

export default Profile
