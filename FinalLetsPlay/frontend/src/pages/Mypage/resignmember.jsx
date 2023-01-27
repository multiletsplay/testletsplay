import React from 'react'
import { Container, Row } from 'reactstrap'
import { motion } from 'framer-motion';
import FormWrapInput from '../../components/UI/FormWrapInput';


const Resignmember = () => {
  return (
    <Container>
    <Row>
      <div>
        <h3>회원탈퇴</h3>
        <p>회원탈퇴가 가능합니다</p>
      </div>

      <div className='mt-40 form__wrap'>
       
     
     <FormWrapInput type='text' label='ID' text='ID' value='ID'/>
     <FormWrapInput type='text' label='NAME' text='NAME' value='이름값'/>
     <FormWrapInput type='password' label='PASSWORD' text='PASSWORD'/>
     



        <div className='btn__wrap'>
            <motion.button whileTap={{scale : 1.1}}>탈퇴하기</motion.button>
        </div>

      </div>

    </Row>
  </Container>
  )
}

export default Resignmember

