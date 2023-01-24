import React,{useState} from 'react'
import SearchDateTime from './searchdate'
import SearchPeople from './searchppl'
import SearchLocation from './searchlocation'
import SearchOption from './searchoption01'
import { Row, Col } from 'reactstrap'

const Search = () => {
  const [regionToggle, setRegionToggle] = useState(false);
  const [peopleToggle, setPeopleToggle] = useState(false);
  const [dateToggle, setDateToggle] = useState(false);
  const [filterToggle, setFilterToggle] = useState(false);
  



  const controlToggle = (currentId) => {
    if(currentId ==='people'){
      setPeopleToggle(prev => !prev);
      setRegionToggle(false);
      setDateToggle(false);
      setFilterToggle(false);
    }else if(currentId === 'region'){
      setRegionToggle(prev => !prev);
      setPeopleToggle(false);
      setDateToggle(false);
      setFilterToggle(false);
    }else if(currentId==='date'){
      setDateToggle(prev => !prev);
      setPeopleToggle(false);
      setRegionToggle(false);
      setFilterToggle(false);
    }else if(currentId === 'fliter'){
      setFilterToggle(prev => !prev);
      setDateToggle(false);
      setPeopleToggle(false);
      setRegionToggle(false);
    }else{
      setFilterToggle(false);
      setDateToggle(false);
      setPeopleToggle(false);
      setRegionToggle(false);
    }
  }



  return (
    <Row>
  <div className='wrapper'>
    <div className='wrap-search'>
      <Col ig='3'>
        <SearchLocation regionToggle={regionToggle} controlToggle={controlToggle}/> 
      </Col>
      <Col ig='3'>
        <SearchPeople peopleToggle={peopleToggle}  controlToggle={controlToggle}/>
      </Col>
      <Col ig='3'>
        <SearchDateTime dateToggle={dateToggle} controlToggle={controlToggle}/>
      </Col>
    </div> 
    <Col ig='3'>
      <SearchOption filterToggle={filterToggle} controlToggle={controlToggle}/>
    </Col>
  </div>
  </Row>
  )
}

export default Search