import { useEffect, useState } from "react";
import Button from "../../../UI/Button";

const Pokemon = () => {
 const [weather, setWeather] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  return (
    <div>Pokemon</div>
  )
}

export default Pokemon