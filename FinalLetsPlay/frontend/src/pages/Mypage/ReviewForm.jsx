import React,{useRef, useCallback} from 'react'
import ScoreStars from '../../components/UI/ScoreStars';


const ReviewForm = (props) => {
  
  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
  textRef.current.style.height = textRef.current.scrollHeight + "px";
}, []);
  
  return (
    <div>
      <h3>시설/레슨 후기</h3>
      <div className='form__wrap'>
          <div className='tac'>
            <ScoreStars />
          </div>
        </div>
      <div className='form__wrap'>
            <span>
              <label htmlFor="user_name">
                <div>
                  <p>Review</p>
                </div>
              </label>
              <div>
              <textarea
                ref={textRef}
                placeholder="후기를 입력해주세요"
                onInput={handleResizeHeight}
              />
              </div>
            </span>
        </div>
    </div>
  )
}

export default ReviewForm