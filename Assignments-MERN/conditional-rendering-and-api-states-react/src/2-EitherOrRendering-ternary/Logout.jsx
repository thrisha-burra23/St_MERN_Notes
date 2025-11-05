import Button from "../components/Button";
    
const Logout=({isLoggedIn,setIsLoggedIn})=>{

const handleLogout = () => {
    console.log("Logged out ");
    setIsLoggedIn(!isLoggedIn);
  };

    return(
        <div>
              <p>Welcome user...</p>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    )
}

export default Logout;