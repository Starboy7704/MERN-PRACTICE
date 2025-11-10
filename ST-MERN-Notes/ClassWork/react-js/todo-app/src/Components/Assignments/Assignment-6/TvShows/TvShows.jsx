import { useEffect, useState } from "react";

function TvShows() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [tvShows, setTvShows] = useState(null);
  const [button, setButton] = useState(true);

  useEffect(() => {
    async function fetchTvShows() {
      try {
        setLoading(true);
        setError("");
        const q = input.trim().toLowerCase();
        if (!q) {
          setError("Enter a TV Show Name");
          setTvShows(null);
          setLoading(false);
          return;
        }
        const res = await fetch(`https://api.tvmaze.com/search/shows?q=${q}`);
        if (!res.ok) throw new Error("Failed to load or check your data input");
        const data = await res.json();
        setTvShows(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchTvShows();
  }, [button]);


  return (
    <>
      <input
        type="text"
        className="border border-solid p-2"
        placeholder="Enter Show Name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <br />

      <button
        className="bg-green-500 p-2 rounded-2xl"
        onClick={() => setButton((prev) => !prev)}
      >
        search
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error : {error}</p>}
      {!tvShows ||  tvShows.length === 0 && !loading && !error && <p>No Tv Shows loaded.</p>}


      {tvShows && tvShows.map((item) => (
        <div key={item.show.id}>
          <img src={item.show.image?.medium} alt={item.show.name} />
          <p className="font-extrabold">{item.show.name}</p>
          <p>Language: {item.show.language}</p>
          <p>Status: {item.show.status}</p>
          <p>Runtime: {item.show.runtime} min</p>
          <p>Network: {item.show.network?.name}</p>
        </div>
      ))}
    </>
  );
}
export default TvShows;
