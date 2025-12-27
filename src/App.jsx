import {useState,useEffect} from 'react'

import DarkModeImg from './assets/darkMode.svg'

import SunnyIcon from './assets/Sunny.svg'
import PartlyCloudyIcon from './assets/Partly Cloudy.svg'
import OvercastIcon from './assets/Overcast.svg'
import FogIcon from './assets/Fog.svg'
import DrizzleIcon from './assets/Drizzle.svg'
import RainIcon from './assets/Rain.svg'
import Snowicon from './assets/Snow.svg'
import ThunderStromsIcon from './assets/Thunderstorms.svg'

import './App.css'

import Header from './components/layout/Header/Header'
import SearchBar from './components/SearchBar/searchBar'
import WeatherStatsCard from './components/weather/WeatherStatsCard/WeatherStatsCard'
import CurrentWeather from './components/weather/CurrentWeather/CurrentWeather';

import DailyForecast from './components/weather/DailyForecast/DailyForecast';
import Footer from './components/layout/Footer/Footer'


function App() {
  // const [count, setCount] = useState(0)


    const [theme, setTheme] = useState("dark");

      useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);


   const toggleTheme = () =>{
    setTheme((prev)=>{
      return prev === "dark" ? "light":"dark"

    })

console.log(theme);
   }
  return (

    <>
    <div className='app'>
   
    <Header theme={theme} toggleTheme = {toggleTheme}/>
  <main>
    <h1 className='heading-1 center' >What’s it looking like outside? </h1>
    <SearchBar/>
    
     <article id='content-container'>
   <div className="top-layer"> 
      <WeatherStatsCard statName="Feels Like" statValue = "18" unit ="°" />
      <WeatherStatsCard statName="Humidity" statValue = "46" unit ="%" />
      <WeatherStatsCard statName="Wind" statValue = "14" unit ="km/h"/>
      <WeatherStatsCard statName="Precipitation" statValue = "0" unit="mm"/>
     </div>
   <div className="middle-layer">
   <CurrentWeather imgName = {SunnyIcon} />
   </div>


   <div className="bottom-layer">
    <DailyForecast />
   


   </div>

  </article>
  </main>

    </div>
   <Footer/>
</>
  )
}

export default App
