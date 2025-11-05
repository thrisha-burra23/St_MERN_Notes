import Button from "../components/Button";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogin = () => {
    console.log("Logged in");
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div>
      <Button onClick={handleLogin}>Login </Button>
      <input type="checkbox" />
      Remember me!
    </div>
  );
};

export default Login;
