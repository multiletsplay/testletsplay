
function FilterHome({sportsButtons, onMenu}) {
  

  return(
    <div className="home__sport">
    {
      sportsButtons.map((type, index) => (
      <>
        <button className={`sports` } key={index} value={type.value} onClick={onMenu}>
          {type.name}
        </button>
      </>
      ))
    }
    </div>
  )
}


export default FilterHome