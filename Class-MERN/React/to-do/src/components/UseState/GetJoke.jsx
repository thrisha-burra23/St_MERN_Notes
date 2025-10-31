import { useState } from "react";

function GetJoke() {
  const [setUP, setSetUP] = useState("SetUP...");
  const [punchLine, setPunchLine] = useState("Punch Line...");
  
    async function getJoke() {
        try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
      setSetUP((prevState)=>(prevState=data.setup));
      console.log(data.setup);
      setPunchLine(data.punchline);
      console.log(data.punchline)

    }catch (error) {
        console.log(error);
    }
  } 

  return(
    <div className="p-12">
        <button className="bg-red-500 hover:bg-red-600 cursor:pointer px-4 py-2 text-white font-semibold rounded-xl" onClick={getJoke}>Get Joke</button>
    <p className="font-semibold text-red-600 text-lg">{setUP}</p>
    <p>{punchLine}</p>
    </div>
  )
}

export default GetJoke;
