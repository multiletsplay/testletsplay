import React from 'react'
import { Container, Row } from 'reactstrap'
import { motion } from 'framer-motion';

const Profile = () => {


  

  return (
    <Container>
      <Row>
        <div>
          <h3>프로필</h3>
          <p>정보 수정이 가능합니다</p>
        </div>

        <div className='mt-40 form__wrap'>
         
        <div className='form__wrap'>
            <span>
              <label htmlFor="user_name">
                <div>
                  <p>ID</p>
                </div>
              </label>
              <div>
                <input id="user_name" name="user_name" type="text" value="ID" />
              </div>
            </span>
          </div>


          <div className='form__wrap'>
            <span>
              <label htmlFor="user_name">
                <div>
                  <p>NAME</p>
                </div>
              </label>
              <div>
                <input id="user_name" name="user_name" type="text" value="NAME" />
              </div>
            </span>
          </div>

          <div className='form__wrap'>
            <span>
              <label for="email">
                <div>
                  <p>EMAIL</p>
                </div>
              </label>
              
              <div>
                <input  type="text" placeholder="이메일" />
              </div>
            </span>
          </div>

          <div className='form__wrap'>
            <span>
              <label for="email">
                <div>
                  <p>TEL.</p>
                </div>
              </label>
              
              <div>
                <input  type="text" placeholder="010-0000-0000" />
              </div>
            </span>
          </div>


          <div className='btn__wrap'>
              <motion.button whileTap={{scale : 1.1}}>수정하기</motion.button>
          </div>

        </div>

      </Row>
    </Container>
  )
}

export default Profile
