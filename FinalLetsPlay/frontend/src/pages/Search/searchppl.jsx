import React, { useState } from "react";



const SearchPeople = ({ peopleToggle, controlToggle}) => {
// count app start

  const [counter, updateCounter] = useState(0);
  function incrementBtn() {
      updateCounter(counter + 1);
  }

  function decrementBtn() {
    updateCounter(counter <= 0 ? 0 : counter - 1);
  }

  function resetBtn(){
    updateCounter(0);
  }



return(


<div className="wrapper-search_type with-layer">
      <button className="btn-clear btn-search_type select" onClick={()=>{
       controlToggle('people')
       }}>인원<span className="material-symbols-outlined">arrow_drop_down</span></button> 
      <div className={`layer-search ${peopleToggle&&'showDis'}`}>
        <div className="wrap-picker" >
        <h4 className="search-subtitle">인원</h4> 
          <div className="box-input" >
            <button className="btn-clear btn-minus" onClick={decrementBtn}><span className="material-symbols-outlined">remove</span></button> 
            <input type="number" readOnly="readOnly" value={counter} className="value" /> 
            <button className="btn-clear btn-plus" onClick={incrementBtn}><span className="material-symbols-outlined">add</span></button>
          </div>
          <div className='btn-list'>
            <button className="btn-clear btn-yellow filter" onClick={resetBtn}>초기화</button> 
            <button className="btn-clear btn-green filter" onClick={()=>{controlToggle('people')}}>인원수 적용하기</button>
         </div>
        </div>
       
      </div>
    </div> 
)
}




export default SearchPeople;