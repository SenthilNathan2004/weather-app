import React, { useState } from "react";

function WeatherForm({ setWeatherData, setLoading }) {
  const [city, setCity] = useState("");

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city) return;

    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.cod !== 200) {
        alert("City not found!");
        setWeatherData(null);
        setLoading(false);
        return;
      }
      setWeatherData(data);
    } catch (err) {
      alert("Error fetching weather!");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="weather-form" onSubmit={fetchWeather}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default WeatherForm;
