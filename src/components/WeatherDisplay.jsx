import React from "react";
import { WiHumidity, WiStrongWind, WiThermometer, WiDaySunny } from "react-icons/wi";

function WeatherDisplay({ data }) {
  return (
    <div className="weather-display card">
      <h2>{data.name}, {data.sys.country}</h2>
      <p className="description">{data.weather[0].description}</p>
      <div className="weather-info">
        <p><WiThermometer size={24}/> Temp: {data.main.temp}°C</p>
        <p><WiThermometer size={24}/> Feels: {data.main.feels_like}°C</p>
        <p><WiHumidity size={24}/> Humidity: {data.main.humidity}%</p>
        <p><WiStrongWind size={24}/> Wind: {data.wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherDisplay;
