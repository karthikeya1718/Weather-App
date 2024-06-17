import Searchbox from "./Searchbox.jsx";
import Infobox from "./Infobox.jsx";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Hyderabad",
    feels_like: 17.84,
    grnd_level: 977,
    humidity: 74,
    pressure: 1012,
    sea_level: 1012,
    temp: 14.81,
    temp_max: 18.92,
    temp_min: 11.36,
    description: "haze",
  });

  let updateWeatherDetails = (WeatherData) => {
    setWeatherInfo(WeatherData);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App by Karthik</h1>
      <Searchbox WeatherDetails={updateWeatherDetails} />
      <Infobox WeatherInfo={weatherInfo} />
    </div>
  );
}
