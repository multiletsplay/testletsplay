import React, { useState } from 'react';
import styled from 'styled-components';

const ScoreStars = () => {
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);
  
  //event를 인자로 받아옴
  // const goToFetch = e => {
  // //콘솔로 e.target.id가 잘 들어오는지 확인
  
  //   console.log('eti', e.target.id)
  //   setClicked(e.target.id);

  //   //setClicked를 e.target.id로 변경 1,2,3,4...
  //   fetch(`http://10.58.3.24:8000/products/1`, {
  //     //사용할 http 메소드 
  //     method: 'POST',
  //     //토큰
  //     headers: {
  //       Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.loTjeBWZ9SeXV-BcIxqOtX37AN30ROvsZl0_udeeRJU',
  //     },
  //     //서버에 보낼 데이터 (별점)
  //     body: JSON.stringify({
  //       //rating-> 백엔드와 변수명 같은걸로
  //       rating: e.target.id,
  //     }),
  //   });
  // };

  return (
    <ReviewBox>
      <p>시설/레슨 평가해주세요!</p>
      <StarContainer>
        {[1, 2, 3, 4, 5].map(el => (
          <i
            className={`ri-star-fill ${
              (clicked >= el) | (hovered >= el) && 'yellowStar'
            }`}
            key={el}
            onMouseEnter={() => setHovered(el)}
            onMouseLeave={() => setHovered(null)}

            //onClick시 goToFetch함수를 호출함
            onClick={() => setClicked(el)}
            // onClick={goToFetch}
          />
        ))}
      </StarContainer>
      <ReviewTextBox>        
        {[1, 2, 3, 4, 5].map(num => (
          //show={호버한 인덱스와 텍스트 인덱스가 같으면 화면에 나타내기}
          <HiddenText key={num} show={hovered === num}>
            {textList[num - 1]}
            {/* 맵 인덱스와 textList인덱스 차이가 나서 -1을 해준다 */}
          </HiddenText>
        ))}
      </ReviewTextBox>
    </ReviewBox>
  );
};

export default ScoreStars;

//style-component 사용
const textList = [
  '별로에요',
  '그저 그래요',
  '보통이에요',
  '좋아요',
  '최고예요',
];

const ReviewBox = styled.div`
  padding: 30px;
  color: #999;
  font-size: 20px;

  i {
    margin: 20px 10px 20px 0;
    opacity: 0.1;
    cursor: pointer;
    font-size: 50px;
  }

  .yellowStar {
    color: orange;
    opacity: 1;
  }
`;

const ReviewTextBox = styled.div`
  position: relative;
  text-align: center;
`;

const StarContainer = styled.div`
  text-align: center;
  border: none;
  background-color: white;
`;

const HiddenText = styled.p`
  position: absolute;
  top: 15px;
  left: 50%;
  width: 130px;
  height: 30px;
  padding-top: 7px;
  transform: translate(-50%, -50%);
  color: white;
  background-color: var(--primary-600);
  border-radius: 4px;
  font-size: .8rem;

  ${({ show }) => (show ? `display:block` : `display: none`)}
`;