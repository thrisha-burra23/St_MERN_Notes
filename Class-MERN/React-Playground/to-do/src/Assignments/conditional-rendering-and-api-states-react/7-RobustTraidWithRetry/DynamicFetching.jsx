import { useState, useEffect } from "react";
import Button from "../../../UI/Button";

const DymanicFetching = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [reload, setReload] = useState(0);
  const [empty, setEmpty] = useState(true);
  const [response, setResponse] = useState("users");

  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");
      const url = `https://jsonplaceholder.typicode.com/${response}`;
      const res = await fetch(url);
      if (!res) {
        throw new Error("Error occured in fetching...");
      }
      const jsonData = await res.json();
      console.log(jsonData);
      setData(jsonData);
      setEmpty(false);
    } catch (error) {
      setError(error.message);
      console.log("Error-->", error.message);
    } finally {
      setLoading(false);
      console.log("Finally block...");
    }
  };

  useEffect(() => {
    fetchData();
  }, [reload, response]);

  const handleEmpty = () => {
    console.log("clicked Empty....");
    setData([]);
    setEmpty(true);
  };

  

  return (
    <div className="container mx-auto px-4">
      <label htmlFor="res" className="" /> Select the data you want to fetch..
      <select
        id="res"
        className="border pl-2 ml-2"
        value={response}
        onChange={(e) => setResponse(e.target.value)}
      >
        <option>Select</option>
        <option value="users">users</option>
        <option value="posts">posts</option>
        <option value="albums">albums</option>
      </select>
      <div className="flex ">
        <Button onClick={() => setReload(!reload)}>Fetch</Button>
        <Button onClick={handleEmpty}>Empty</Button>
      </div>
      {loading && <p>loading...</p>}
      {error && (
        <div>
          <p className="text-red-600">Error occured{error} </p>
          <Button onClick={() => setReload(!reload)}>Retry</Button>
        </div>
      )}
      {empty && <p>Empty data...</p>}
      {
        !empty && !error && !loading  && (<div>
                 <pre>{JSON.stringify(data, null, 2)}</pre>

        </div>)
      }
    </div>
  );
};

export default DymanicFetching;
