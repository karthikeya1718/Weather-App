/* eslint-disable react/prop-types */
import "./Infobox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Hot from "@mui/icons-material/WbSunny";
import Cold from "@mui/icons-material/AcUnit";
import Rain from "@mui/icons-material/Thunderstorm";
export default function WeatherInfobox({ WeatherInfo }) {
  const HOT_URL =
    "https://images.unsplash.com/reserve/m6rT4MYFQ7CT8j9m2AEC_JakeGivens%20-%20Sunset%20in%20the%20Park.JPG?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHN1bnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1519944159858-806d435dc86b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
  const RAIN_URL =
    "https://media.istockphoto.com/id/1407348197/photo/water-drops-on-the-glass-concept-of-driving-in-rain-bad-driving-conditions-selective-focus.webp?b=1&s=170667a&w=0&k=20&c=GYLG2EfRG1iyFti-KtyXsNLxfHG_1hKLr6-gF6iG-UA=";
  return (
    <div className="WeatherInfobox">
      <div className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              WeatherInfo.humidity > 80
                ? RAIN_URL
                : WeatherInfo.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {WeatherInfo.city}
              {WeatherInfo.humidity > 80 ? (
                <Rain />
              ) : WeatherInfo.temp > 15 ? (
                <Hot />
              ) : (
                <Cold />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature={WeatherInfo.temp}&deg;C</p>
              <p>Min Temp={WeatherInfo.temp_min}&deg;C</p>
              <p>Max Temp={WeatherInfo.temp_max}&deg;C</p>
              <p>Pressure={WeatherInfo.pressure}</p>
              <p>Humidity={WeatherInfo.humidity}</p>
              <p>
                The weather can be described as <i>{WeatherInfo.description}</i>{" "}
                and feels like {WeatherInfo.feels_like}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
