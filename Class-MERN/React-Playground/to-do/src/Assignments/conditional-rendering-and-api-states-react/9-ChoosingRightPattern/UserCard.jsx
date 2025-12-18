import { useState } from "react";
import Button from "../../../UI/Button";

const UserCard=()=>{

    const [premium,setErrorpremium]=useState(true);

    return(
        <div>
            { premium &&<Button>Premiun</Button>}
            <p>Welcome.....</p>
        </div>
    )
}

export default UserCard;