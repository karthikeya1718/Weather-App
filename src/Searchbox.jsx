/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./Searchbox.css";
import { useState } from "react";
export default function Searchbox({ WeatherDetails }) {
  let [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "2a458e0c786722ca05029636bff69735";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      let result = {
        city: jsonResponse.name,
        country: jsonResponse.sys.country,
        temp: jsonResponse.main.temp,
        temp_min: jsonResponse.main.temp_min,
        temp_max: jsonResponse.main.temp_max,
        pressure: jsonResponse.main.pressure,
        humidity: jsonResponse.main.humidity,
        feels_like: jsonResponse.main.feels_like,
        windSpeed: jsonResponse.wind.speed,
        description: jsonResponse.weather[0].description,
      };
      WeatherDetails(result);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  let handleInputChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      getWeatherInfo();
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="Searchbox">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      ></Box>
      <h3>Search for the weather</h3>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleInputChange}
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}> No such place exists</p>}
      </form>
    </div>
  );
}
