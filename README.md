
# PM Accelerator: Weather App – IP + City Input

## Project Description
A responsive weather web app that shows current weather and a 5-day forecast. Users can see their local weather via IP detection and override the city manually. Built with a focus on usability, clean design, and fast API-driven updates.

## Tech Stack
* **Frontend:** React (Vite)
* **Styling:** CSS (responsive, mobile-first)
* **State Management:** React `useState` / `useEffect`

## Live Link and Code Link
* **Live Demo:** [view](https://pm-accelerator-weather-app-tau.vercel.app)
* **Source Code:** [Github](https://github.com/bee-yy/PM-Accelerator-Weather-App])

## How to Run Locally
1. Clone the repository:

   ```bash
   git clone https://github.com/bee-yy/PM-Accelerator-Weather-App.git
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```
5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Features Implemented

* Detects user city via IP on initial load
* Manual city input to fetch weather
* Displays current weather with icons
* 5-day forecast with responsive forecast cards
* Loading states and spinners for better UX
* Error handling for API failures and location denial

## APIs Used
* **Weather Data:** Open Meteo API
* **IP Geolocation:** [https://ipapi.co/json/'](https://ipapi.co/json/')

## Known Limitations
* IP-based location may be approximate, not precise
* API rate limits could affect frequent requests

