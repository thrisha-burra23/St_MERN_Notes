import { useState, useEffect } from "react";

function App() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(()=>{
        console.log("No Dependency Array useEffect's callback")
    })

    useEffect(() => {
        console.log("UseEffect Callback 1 has been triggered!");
    }, [])

    useEffect(() => {
        console.log("Effect 2")
    }, [])

    useEffect(() => {
        console.log("Effect 3")
    }, [])

    useEffect(()=>{
        console.log("Count is updated: ", count);
    }, [count]) // [] -> dependency array

    useEffect(()=>{
        console.log("Name is updated: ", name)
    }, [name])


    function incrementCount() {
        setCount((prevCount) => prevCount = prevCount + 1);
    }


    return (
        <>
            <p>Count: {count}</p>


            <button className="bg-red-500 p-3 text-white"
                onClick={incrementCount}>
                Increment
            </button>

            <input type="text"
                placeholder="Enter name..."
                className="bg-gray-200"
                value={name}
                onChange={(event) => setName(event.target.value)} 
            />
        </>
    )
}

export default App;