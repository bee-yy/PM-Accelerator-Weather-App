import DailyForecastCard from './../DailyForecastCard/DailyForecastCard';
import weatherCodeMap from '../WeatherCode';



import './DailyForecast.css'
function DailyForecast({data}){

const getDay = (day) =>{
const date = new Date(day);
const shortDay = date.toLocaleDateString('en-US', { weekday: 'short' });
return shortDay
}
return(
    <>
    <p className='body-md'>Daily Forecast</p>

    <div className="daily-forecast-cards-container">
       
    {data.date.map((item,i) =>{
           return  <DailyForecastCard key ={i} day = {getDay(item)} iconName = {weatherCodeMap[data.weatherCodes[i]]} lowTemp ={Math.floor(data.minTemps[i])}  
       highTemp = {Math.floor(data.maxTemps[i])}/>
    })}

    
        {/* <DailyForecastCard day = 
        {getDay(data.date[0])} iconName = {RainIcon} lowTemp ={data.minTemps[0]}  highTemp = {data.maxTemps[0]}/>

        <DailyForecastCard day = {getDay(data.date[1])} iconName = {DrizzleIcon} lowTemp ={data.minTemps[1]}  highTemp = {data.maxTemps[1]}/>
                <DailyForecastCard day = {getDay(data.date[2])} iconName = {SunnyIcon} lowTemp ={data.minTemps[2]}  highTemp = {data.maxTemps[2]}/>

        <DailyForecastCard day ={getDay(data.date[3])} iconName = {PartlyCloudyIcon}
         lowTemp ={data.minTemps[3]}  highTemp = {data.maxTemps[4]}/>
        <DailyForecastCard day = {getDay(data.date[4])} iconName = {ThunderStromsIcon} lowTemp ={data.minTemps[4]}  highTemp = {data.maxTemps[4]}/> */}

    </div>

    </>
)
}

export default DailyForecast;