import {useState,useEffect} from 'react'

import './App.css'

import Header from './components/layout/Header/Header'
import SearchBar from './components/SearchBar/searchBar'
import WeatherStatsCard from './components/weather/WeatherStatsCard/WeatherStatsCard'
import CurrentWeather from './components/weather/CurrentWeather/CurrentWeather';

import DailyForecast from './components/weather/DailyForecast/DailyForecast';
import Footer from './components/layout/Footer/Footer'
import { fetchCityByIP, fetchCityCoordinates,fetchWeatherData} from './components/services/APILogic'


function App() {
    const [theme, setTheme] = useState("dark");
    const [location, setLocation] = useState({city: '',country: ''})
    const [coordinates,setCoordinates] = useState({ latitude: '',longitude: ''})
    const [weatherData, setWeatherData] = useState({currentTemperature: '' ,apparentTemperature:'',humidity:'',precipitation:'',wind:'' , weatherCode:'',
    })
    const [fiveDaysForecast, setFiveDaysForecast] = useState({
      date:[],
      minTemps: [],
      maxTemps: [],
      weatherCodes:[],
    })
    const [searchInput, setSearchInput] = useState("");
    

//toggle theme 
      useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);


//get location by IP
useEffect(()=>{
  async function getCityName(){
 const{city, country} = await fetchCityByIP();
setLocation({ city:city,country:country,})}

getCityName()
},[])


//get citch coordinates
useEffect(() => {
  if (location.city) {
    async function getCoords() {
       let {latitude, longitude, country} =  await fetchCityCoordinates(location.city);
       setCoordinates({ latitude:latitude,
        longitude: longitude})
        setLocation((prev) =>{
          return {...prev,
          country:country,}
        })
    }
  getCoords();
  }
}, [location.city]) // Runs whenever location.city changes

//get weather data
useEffect(() => {
  if (coordinates.latitude && coordinates.longitude) {
    fetchWeatherData(coordinates.latitude, coordinates.longitude);
  }
}, [coordinates])

 //display data to console
  // useEffect(() =>{
  //   if(location.city) console.log(location);
  // },
  // [location.city])

 useEffect(() =>{
  if(coordinates.latitude && coordinates.longitude)
    console.log(coordinates.latitude,coordinates.longitude);

  async function getForecastData(params) {
    let data = await fetchWeatherData(coordinates.latitude, coordinates.longitude)

    setWeatherData({
  currentTemperature: data.current.temperature_2m,
      apparentTemperature:data.current.apparent_temperature,
       humidity:data.current.relative_humidity_2m,
       precipitation:data.current.precipitation,
       wind:data.current.wind_speed_10m,
       weatherCode:data.current.weather_code,

 })
  setFiveDaysForecast({
  date:data.daily.time,
      minTemps: data.daily.temperature_2m_min,
      maxTemps: data.daily.temperature_2m_max,
      weatherCodes: data.daily.weather_code,
 })

    
  }
  getForecastData()
  },[coordinates])

  
const toggleTheme = () =>{
    setTheme((prev)=>{
      return prev === "dark" ? "light":"dark"

    })

   }

const handleCitySearch = (e) =>{
  if (!searchInput) return;
    e.preventDefault();
    setLocation((prev) =>{
      return{ ...prev,city:searchInput}
    })
  setSearchInput("");
     }

  const handleChange = (value) =>{
    setSearchInput(value);
  }
  return (

  
    <>
    <div className='app'>
   
    <Header theme={theme} toggleTheme = {toggleTheme}/>
  <main>
    <h1 className='heading-1 center' >What’s it looking like outside? </h1>
    <SearchBar value ={searchInput} onClick = {handleCitySearch} onChange ={handleChange}/>
    
     <article id='content-container'>
   <div className="top-layer"> 
      <WeatherStatsCard statName="Feels Like" statValue = {weatherData.apparentTemperature} unit ="°" />
      <WeatherStatsCard statName="Humidity" statValue = {weatherData.humidity} unit ="%" />
      <WeatherStatsCard statName="Wind" statValue = {weatherData.wind} unit ="km/h"/>
      <WeatherStatsCard statName="Precipitation" statValue = {weatherData.precipitation} unit="mm"/>
     </div>
   <div className="middle-layer">
   <CurrentWeather currentTemp = {weatherData.currentTemperature}
    city = {location.city} country = {location.country} weatherCode ={weatherData.weatherCode}/>
   </div>


   <div className="bottom-layer">
    <DailyForecast data = {fiveDaysForecast} />
   


   </div>

  </article>
  </main>

    </div>
   <Footer/>
</>
  )
}

export default App
