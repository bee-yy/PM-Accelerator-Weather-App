import DailyForecastCard from './../DailyForecastCard/DailyForecastCard';

import SunnyIcon from '../../../assets/Sunny.svg'
import PartlyCloudyIcon from '../../../assets/Partly Cloudy.svg'
import OvercastIcon from '../../../assets/Overcast.svg'
import FogIcon from '../../../assets/Fog.svg'
import DrizzleIcon from '../../../assets/Drizzle.svg'
import RainIcon from '../../../assets/Rain.svg'
import Snowicon from '../../../assets/Snow.svg'
import ThunderStromsIcon from '../../../assets/Thunderstorms.svg'

import './DailyForecast.css'
function DailyForecast(){

return(
    <>
    <p className='body-md'>Daily Forecast</p>

    <div className="daily-forecast-cards-container">
        <DailyForecastCard day = 'Tue' iconName = {RainIcon} lowTemp ={20}  highTemp = {14}/>
        <DailyForecastCard day = 'Wed' iconName = {DrizzleIcon} lowTemp ={21}  highTemp = {15}/>
                <DailyForecastCard day = 'tue' iconName = {SunnyIcon} lowTemp ={20}  highTemp = {14}/>

        <DailyForecastCard day = 'Thu' iconName = {PartlyCloudyIcon} lowTemp ={20}  highTemp = {14}/>
        <DailyForecastCard day = 'Fri' iconName = {ThunderStromsIcon} lowTemp ={20}  highTemp = {14}/>

    </div>

    </>
)
}

export default DailyForecast;