import './currentWeather.css'
function CurrentWeather(props){
return(
    <> 
    <div className='temperature-container'>
    <div className="temperature-icon-container">
      <img src={props.imgName} alt="" />
    </div>
    <p className="temperature display orange">20 <sup>°</sup></p>
    </div>
    <div className='location-info-container'>
      <p className='location heading-sm orange'>Burnaby, Canada</p>
      <p className='date body-sm fw-normal orange'>Thursday, Dec 5, 2025</p>
      </div> 
    
    </>
)

}

export default CurrentWeather;