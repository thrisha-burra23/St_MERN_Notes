import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Button from "../../UI/Button";

const TvMazeAPI = () => {
  const [query, setQuery] = useState("office");
  const [search, setSearch] = useState(query);
  const url = `https://api.tvmaze.com/search/shows?q=${search}`;
  const { loading, error, data } = useFetch(url);
  const handleSearch = () => {
    setSearch(query);
  };
  return (
    <div>
      <input
        className="bg-white  border rounded-xl p-3 m-4 "
        type="text"
        onChange={(event) => setQuery(event.target.value)}
        value={query}
        placeholder="Search for a tv show"
      />
      <Button onClick={handleSearch}>Search</Button>
      {error && <p>Error...{error}</p>}
      {loading && <p>Loading....</p>}
      {data && data.length > 0
        ? data.map((item, id) => (
            <div key={id} className="m-3 p-3 border rounded-xl">
              <p>Name:{item.show.name}</p>
              <p>Language:{item.show.language}</p>
              <p>Premiered:{item.show.premiered}</p>
              <img src={item.show.image.medium} alt="Show poster" />
            </div>
          ))
        : !loading && <p>No results found for "{query}"</p>}
    </div>
  );
};

export default TvMazeAPI;
