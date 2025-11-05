import React from "react";
import { useFetch } from "../../hooks/useFetch";
import Button from "../../UI/Button";

const PlaceHolderApi = () => {
  const { data, loading, error,reload,setReload } = useFetch("https://jsonplaceholder.typicode.com/users");
  

  return (
    <div>
      {error && <p className="text-red-400">Error ... {error}</p>}
      {loading && <p>Loading....</p>}
      <Button onClick={()=>setReload(!reload)}>Reload</Button>
      {data &&
        data.map((user, id) => (
          <div key={id}>
            <h3>Name: {user.name}</h3>
            <p>Email : {user.email}</p>
          </div>
        ))}
    </div>
  );
};

export default PlaceHolderApi;
