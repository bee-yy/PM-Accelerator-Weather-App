//fetch city by IP Address
export async function fetchCityByIP(){
try{
const res = await fetch("http://ip-api.com/json/");
const data = await res.json()

// setLocation({ city:data.city,country:data.country,})

// console.log(location);
return{
    city:data.city,
    country:data.country}
}
catch (err){
console.error(err)
}
  }
//fetch weather by city name
export async function fetchCityCoordinates(city){
  console.log("Searching for city:", city); 
  const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
  const data = await res.json();
  // console.log(data);
const latitude = data.results[0].latitude;
const longitude = data.results[0].longitude;

return{latitude,longitude}
}

//fetch weatherData 
export async function fetchWeatherData(latitude,longitude){
  console.log("Fetching with lat:", latitude, "lon:", longitude);
  console.log("Types:", typeof latitude, typeof longitude);

const res = await fetch(
  `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,wind_speed_10m,weather_code&timezone=auto&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max,weather_code&forecast_days=5`
)

 console.log("Response status:", res.status); // Check if it's 200
    console.log("Response ok:", res.ok); // Should be true
const data = await res.json();
console.log(data);
 return data;
}