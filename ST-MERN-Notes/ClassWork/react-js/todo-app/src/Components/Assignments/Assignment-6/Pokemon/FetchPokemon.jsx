import { useEffect, useState } from "react";

function FetchPokemon() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [pokemonFetch, setPokemonFetch] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      setError("");
      const q = input.trim().toLowerCase();
      if (!q) {
        setError("Enter a Pokémon name");
        setPokemonFetch(null);
        setLoading(false);
        return;
      }
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${q}`);
    //   console.log(res);
      if (!res.ok) throw new Error("Failed to load or check your input");
      const data = await res.json();
    //   console.log(data);
      setPokemonFetch(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  // if(error) return <p style={{ color: "red" }}>Error : {error}</p>;
  // if(loading) return <p>Loading...</p>;
  // if (!pokemonFetch) return <p>No Pokémon loaded.</p>;

  return (
    <div className="p-2">
      <input
        className="border border-solid p-2"
        type="text"
        placeholder="Enter Pokemon Name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <br />

      <button
        className="bg-green-500 rounded-2xl p-2 shadow-2xl font-bold"
        onClick={fetchData}
        disabled={loading}
      >
        Get Data
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!pokemonFetch && !loading && !error && <p>No Pokemon loaded.</p>}

      {pokemonFetch && (
        <>
          <img
            src={pokemonFetch.sprites.front_default}
            alt={pokemonFetch.name || "pokemon"}
          />
          <p className="font-extrabold">Name : {pokemonFetch.name}</p>
          <p className="font-extrabold">Height : {pokemonFetch.height}</p>
          <p className="font-extrabold">Weight : {pokemonFetch.weight}</p>
        </>
      )}
    </div>
  );
}

export default FetchPokemon;
