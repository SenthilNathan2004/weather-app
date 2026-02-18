import React, { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherChart from "./components/WeatherChart";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="app-container">
      <h1>🌤 Real-Time Weather Dashboard</h1>
      <WeatherForm setWeatherData={setWeatherData} setLoading={setLoading} />
      {loading && <p className="loading">Loading...</p>}
      {weatherData && <WeatherDisplay data={weatherData} />}
      {weatherData && <WeatherChart data={weatherData} />}
    </div>
  );
}

export default App;
