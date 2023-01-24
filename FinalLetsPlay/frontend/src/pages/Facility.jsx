import React, { useState, useEffect }from "react";
import { Container, Row } from 'reactstrap'

import Search from './Search/search';
import '../styles/layout.css'
import '../styles/boardlist.css'
import SportsData from '../assets/data/SportsData'
import FacilityList from '../components/UI/FacilityList'
import Filter from "./Filter/filter";
import sportsButtons from '../assets/data/datacategory'

const Facility = ({data}) => {

  function getSportsData(){
    const SportsList = SportsData;
    return SportsList;
  }

  function filterSportsData(sportsType){
    let filteredData = getSportsData().filter(type => type.category === sportsType);
    return filteredData;
  }

  const [filteredData, setFilteredSportsData] = useState(null);

  useEffect(()=>{
    const filteredTrendingProducts = SportsData.filter(
      (item) => item.category
    );
    setFilteredSportsData(filteredTrendingProducts);
    setFilteredSportsData(getSportsData());    
  },[]);


  function handleSports(e) {
    let sportsCategory = e.target.value;
    sportsCategory !== "all"
      ? setFilteredSportsData(filterSportsData(sportsCategory))
      : setFilteredSportsData(getSportsData());
  }

  return (
    <Container>
    <Row className="list">
      <div className='m40'>
        <Filter 
          sportsButtons={sportsButtons}     
          handleSports={handleSports}
          />
        <Search />        
      </div>          
      <FacilityList data={filteredData}/>
    </Row>
  </Container>
  );
}

export default Facility
