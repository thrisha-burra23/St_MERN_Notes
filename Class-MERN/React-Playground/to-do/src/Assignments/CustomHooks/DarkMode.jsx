import React from "react";
import { useDarkMode } from "../../hooks/useDarkMode";
import Button from "../../UI/Button";

const DarkMode = () => {
  const [theme, setTheme] = useDarkMode(false);

  return (
    <div>
      {theme ? (
        <div className="bg-white">
          <button  className="text-black bg-white border-black "onClick={setTheme}>DarkMode</button>
          <p className="text-black">Helloooo</p>
        </div>
      ) : (
        <div className="bg-black">
          <button className="text-white bg-black border-white" onClick={setTheme}>LightMode</button>
          <p className="text-white">Helloooo</p>
        </div>
      )}
    </div>
  );
};

export default DarkMode;
