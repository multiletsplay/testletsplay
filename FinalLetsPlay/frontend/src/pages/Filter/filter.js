
function Filter({sportsButtons, handleSports}) {



  return(
    <div className="sport-div">
    {
      sportsButtons.map((type, index) => (
      <>
        <button className={`sport`} key={index} value={type.value} onClick={handleSports}>
          {type.name}
        </button>
      </>
      ))
    }
    </div>
  )
}


export default Filter