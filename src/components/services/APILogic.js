//fetch city by IP Address
export async function fetchCityByIP() {
  try {
    const res = await fetch('https://ipapi.co/json/');
    if (!res.ok) throw new Error(`IP API Error ${res.status}`);
    const data = await res.json();
    return {
      city: data.city || "",
      country: data.country || "",
    };
  } catch (error) {
    console.error("Failed to fetch city name by IP", error);
    return {
      city: "",
      country: "",
    };
  }
}
//fetch weather by city name
export async function fetchCityCoordinates(city) {
  console.log("Searching for city:", city);
  try {
    const res = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );
    if (!res.ok) throw new Error(`Weather Api Error ${res.status}`);
    const data = await res.json();

    console.log("City Fetch", data);
    const latitude = data.results[0].latitude || "";
    const longitude = data.results[0].longitude || "";
    const country = data.results[0].country || "";

    return { latitude, longitude, country };
  } catch (error) {
    console.error("Failed to fetch city coordinates", error);
    return { latitude: "", longitude: "", country: "" };
  }
}

//fetch weatherData
export async function fetchWeatherData(latitude, longitude) {
  try {
    if (!latitude || !longitude) throw new Error("Missing coordinates");

    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,wind_speed_10m,weather_code&timezone=auto&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max,weather_code&forecast_days=5`
    );

    if (!res.ok) throw new Error(`Weather API Error ${res.status}`);

    // get raw text first
    const text = await res.text();
    if (!text) throw new Error("Empty response from Weather API");

    const data = JSON.parse(text); // now safe
    return data;

  } catch (error) {
    console.error("Failed to fetch weather data", error);

    // return safe fallback to prevent App crash
    return {
      current: {},
      daily: {
        time: [],
        temperature_2m_min: [],
        temperature_2m_max: [],
        weather_code: [],
      },
    };
  }
}

