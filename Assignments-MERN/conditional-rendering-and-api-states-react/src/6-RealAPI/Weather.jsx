import { useEffect, useState } from "react";
import Button from "../components/Button";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true"
      );
      if (!response.ok) {
        throw new Error("Error occured in loading ....");
      }
      const data = await response.json();
      if (data) {
        setWeather(data);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("getting weather details...");
    if (latitude && longitude) fetchWeather();
  }, [latitude, longitude]);

  if (error) {
    return <p style={{ color: "red" }}>Error...{error}</p>;
  }

  if (loading) return <p>Loading...</p>;

  if (weather.length === 0) return <p>Posts are empty</p>;

  return (
    <>
      <input
        type="text"
        onChange={(event) => setLatitude(event.target.value)}
        placeholder="Enter a Latitude"
        value={latitude}
      />
      <input
        type="text"
        onChange={(event) => setLongitude(event.target.value)}
        placeholder="Enter a Longitude"
        value={longitude}
      />
      <Button onClick={fetchWeather}>Get Weather</Button>
      <div>
        <p> Weather</p>
        <p>Temperature: {weather.temperature}°C</p>
        <p>Windspeed: {weather.windspeed} km/h</p>
        <p>Code: {weather.weathercode}</p>
      </div>
    </>
  );
};

export default Weather;
