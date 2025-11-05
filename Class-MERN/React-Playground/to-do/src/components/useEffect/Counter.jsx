import { useState } from "react"


const  Counter=()=>{
const [count,setCount]=useState(0);
  function incr(){
    setCount((prevCount)=>prevCount+=1)
  }
return(
    <div>

        <button onClick={incr}>Incr</button>
    </div>
)

}

export default Counter;