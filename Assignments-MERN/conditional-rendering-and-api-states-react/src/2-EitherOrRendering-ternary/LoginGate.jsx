import { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";

const LoginGate = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <Logout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  />
      )}
    </div>
  );
};

export default LoginGate;
