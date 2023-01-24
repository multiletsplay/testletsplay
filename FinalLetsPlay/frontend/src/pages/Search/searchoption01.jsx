import React from 'react';

const SearchOption = ({filterToggle, controlToggle}) => {

return(

  <div className='wrap-search'>
      <div className="filter">
        <div className="filter-btn" onClick={()=>{controlToggle('fliter')}}>
          <span className="material-symbols-outlined">tune</span><span>필터</span>
        </div>

          <div className={`layer-search ${filterToggle&&'showDis'}`}>
            <div className="wrap-filter wrap-checkbox">        
              
              <div  className="wrap-filter last">
                <h4  className="search-subtitle">편의시설</h4> 
                
                <ul className="list-facility">
                  <li>
                  <input id="facility-SWR" type="checkbox" name="facility" value="SWR"/> 
                  <label htmlFor="facility-SWR">샤워시설</label>
                  </li>
                  
                  <li>
                  <input  id="facility-PARK" type="checkbox" name="facility" value="PARK"/> 
                  <label  htmlFor="facility-PARK">주차</label>
                  </li>
                  
                  <li>       
                  <input id="facility-STASH" type="checkbox" name="facility" value="STASH"/> 
                  <label htmlFor="facility-STASH">개인락커</label>
                  </li>
                  
                  <li>
                  <input id="facility-INTLT" type="checkbox" name="facility" value="INTLT"/> 
                  <label htmlFor="facility-INTLT">내부화장실</label>
                  </li>
                  
                  <li>              
                  <input id="facility-FITRM" type="checkbox" name="facility" value="FITRM"/> 
                  <label htmlFor="facility-FITRM">탈의실</label>
                  </li>

              </ul>
              </div>


              {/* 레벨 */}
              <div  className="wrap-filter last">
                <h4  className="search-subtitle">레벨</h4> 
                
                <ul className="list-level">

                  <li>
                  <input  id="level-starter" type="checkbox" name="level" value="starter"/> 
                  <label  htmlFor="level-starter">스타터</label>
                  </li>

                  <li>
                  <input id="level-beginner" type="checkbox" name="level" value="beginner"/> 
                  <label htmlFor="level-beginner">비기너</label>
                  </li>

                  <li>        
                  <input id="level-amateur" type="checkbox" name="level" value="amateur"/> 
                  <label htmlFor="level-amateur">아마추어</label>
                  </li>
                  
                  <li>
                  <input id="level-semipro" type="checkbox" name="level" value="semipro"/> 
                  <label htmlFor="level-semipro">세미프로</label>
                  </li>
                  
                  <li>              
                  <input id="level-pro" type="checkbox" name="level" value="pro"/> 
                  <label htmlFor="level-pro">프로</label>
                  </li>

              </ul>
              </div>
              
            </div> 
            
              <div className="btn-list">
                <button className="btn-clear btn-yellow filter">초기화</button> 
                <button className="btn-clear btn-green filter">필터 적용하기</button>
              </div>
          </div>

  </div>
  
      <div className="filter-btn" onClick={()=>{controlToggle(false)}}>
        <span className="material-symbols-outlined">search</span><span>검색</span>
      </div>

</div>
)


}


export default SearchOption;