import { useEffect, useState } from "react";
import Button from "../../../UI/Button";

const Weather = () => {
  const [weather, setWeather] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      if (!response.ok) {
        throw new Error("Error occured in loading ....");
      }
      const data = await response.json();
      console.log(data);
      setWeather(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("getting weather details...");
    fetchWeather();
  }, []);

  if (error) return <p style={{ color: "red" }}>Error...{error}</p>;

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <input
        className="p-2 m-2 bg-white border rounded-2xl"
        type="number"
        onChange={(event) => setLatitude(event.target.value)}
        placeholder="Enter a Latitude"
        value={latitude}
      />
      <input
        className="p-2 m-2 bg-white border rounded-2xl"
        type="number"
        onChange={(event) => setLongitude(event.target.value)}
        placeholder="Enter a Longitude"
        value={longitude}
      />
      <Button onClick={fetchWeather}>Get Weather</Button>
      {weather && weather.current_weather && (
        <div style={{ marginTop: "15px" }}>
          <h3>Current Weather</h3>
          <p>🌡️ Temperature: {weather.current_weather.temperature}°C</p>
          <p>💨 Windspeed: {weather.current_weather.windspeed} km/h</p>
          <p>🌍 Weather Code: {weather.current_weather.weathercode}</p>
        </div>
      )}
    </>
  );
};

export default Weather;
