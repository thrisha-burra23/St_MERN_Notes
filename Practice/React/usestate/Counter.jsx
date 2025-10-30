import { useState } from "react"

export default function  Counter(){
 const [count,setCount]=useState(0);

 function handleClick(){
    setCount((prevCount)=>prevCount+1)
 }

 return(
    <div>
        <p>Count = {count}</p>
        <button onClick={handleClick}>Incr</button>
    </div>
    
 )
}