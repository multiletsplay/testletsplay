import React,{ useState }from 'react';
import { Col, Container, Row } from 'reactstrap'
import '../styles/mypage.css'
import Profile from './Mypage/Profile';
import MatchedList from './Mypage/matchedlist';
import BookedList from './Mypage/BookedList';
import Inqury from './Mypage/inqury';
import Favoritelist from './Mypage/favoritelist';
import { motion } from 'framer-motion';
import MypageMenu from '../assets/data/MypageMenu';
import Resignmember from './Mypage/resignmember';


const Mypage = () => {



  const selectComponent = {
    0: <Profile />,
    1: <MatchedList/>,
    2: <BookedList />,
    3: <Favoritelist />,
    4: <Inqury />,
    5: <Resignmember/>,
  };


  const [content, setContent] = useState(0);

  const handleClickButton = (index) => {
      setContent(index);
  };


  return (
    <Container>
      <Row className='m40'>
        <Col lg='2' >
        <div className='mypage__list'>
        {MypageMenu.map((el,index) => {
            return (
              <motion.button className={content === index ? "button--on" : "button--off"} whileTap={{scale:1.1}} onClick={()=>handleClickButton(index)} name={el.name} key={el.id}>
                {el.text}
              </motion.button>
            );
          })}
        </div>
        </Col>
        <Col  lg='10' >
           {
            selectComponent[content] 
           }
        </Col>
      </Row>
    </Container>
  );
}

export default Mypage

