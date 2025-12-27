import './currentWeather.css'
function CurrentWeather(props){
return(
    <> 
    <div className='temperature-container'>
    <div className="temperature-icon-container">
      <img width="108" height="108" src={props.imgName} alt={props.imgName} />
    </div>
    <p className="temperature display orange">20 <span>°</span></p>
    </div>
    <div className='location-info-container'>
      <p className='location heading-sm orange'>Burnaby, Canada</p>
      <p className='date body-sm fw-normal orange'>Thursday, Dec 5, 2025</p>
      </div> 
    
    </>
)

}

export default CurrentWeather;