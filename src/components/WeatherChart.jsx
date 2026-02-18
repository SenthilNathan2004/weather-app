import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

function WeatherChart({ data }) {
  const chartData = {
    labels: ["Temp", "Feels Like", "Min", "Max"],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [data.main.temp, data.main.feels_like, data.main.temp_min, data.main.temp_max],
        borderColor: "#4facfe",
        backgroundColor: "rgba(79, 172, 254, 0.2)",
        tension: 0.4,
        fill: true,
        pointRadius: 6
      }
    ]
  };

  return (
    <div className="chart-container card">
      <Line data={chartData} />
    </div>
  );
}

export default WeatherChart;
