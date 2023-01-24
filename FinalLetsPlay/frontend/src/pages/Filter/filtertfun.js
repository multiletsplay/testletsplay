import SportsData from '../../assets/data/SportsData'
import lessonData from '../../assets/data/lessonData';
import MatchingData from '../../assets/data/MatchingData';

export function getSportsData(){
  const SportsList = SportsData;
  return SportsList;
}

export function filterSportsData(sportsType){
  let filteredData = getSportsData().filter(type => type.category === sportsType);
  return filteredData;
}



export function getLessonData(){
  const LessonList = lessonData;
  return LessonList;
}

export function filterLessonData(sportsType){
  let filteredData = getLessonData().filter(type => type.category === sportsType);
  return filteredData;
}



export function getMatchingData(){
  const MatchingList = MatchingData;
  return MatchingList;
}

export function filterMatchingData(sportsType){
  let filteredData = getMatchingData().filter(type => type.category === sportsType);
  return filteredData;
}
