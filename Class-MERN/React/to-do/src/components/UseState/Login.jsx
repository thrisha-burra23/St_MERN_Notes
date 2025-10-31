import React, { useState } from "react";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  
  return (
    <div>
      {isLoggedIn ? (
        <p>Hello user</p>
      ) : (
        <button
          onClick={handleClick}
          className="bg-blue-400 text-white rounded-xl"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Login;
