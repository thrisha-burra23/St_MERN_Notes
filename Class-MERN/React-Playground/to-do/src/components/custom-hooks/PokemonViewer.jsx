import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
const PokemonViewer = () => {
  const [name, setName] = useState("pikachu");
  const { data, loading, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );

  error && <p>Error ... {error}</p>;
  loading && <p>Loading....</p>;

  return (
    <div>
      <input
        className="bg-white p-3 m-3 border rounded-xl "
        type="text"
        placeholder="Enter a pokemon name..."
        onChange={(event) => setName(event.target.value)}
      />
      {error && <p className="text-red-400">Error ... {error}</p>}
      {loading && <p>Loading....</p>}

      {data && (
        <div className="m-3 p-3 ">
          <h3>{data.name}</h3>
          <img src={data.sprites.front_default} alt={data.name} />
          <p>Height: {data.height}</p>
          <p>Weight: {data.weight}</p>
        </div>
      )}
    </div>
  );
};

export default PokemonViewer;
