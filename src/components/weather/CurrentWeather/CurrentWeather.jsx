import './currentWeather.css'
import weatherCodeMap from '../WeatherCode';



function CurrentWeather(props){
  function getDate(){
  //Thursday, Dec 5, 2025
  let date = new Date();
  return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
}
let date = getDate();

console.log("Weather Code Test:",props.weatherCode);
return(
    <> 
    <div className='temperature-container'>
    <div className="temperature-icon-container">
      <img width="108" height="108" src={weatherCodeMap[props.weatherCode]} alt={props.imgName} />
    </div>
    <p className="temperature display orange">{Math.floor(props.currentTemp)} <span>°</span></p>
    </div>
    <div className='location-info-container'>
      <p className='location heading-sm orange'>{props.city}, {props.country}</p>
      <p className='date body-sm fw-normal orange'>{date}</p>
      </div> 
    
    </>
)

}

export default CurrentWeather;