import { useEffect, useState } from "react";

function CurrentWeather() {

    const [longitude , setLongitude] = useState(77.2090);
    const [latitude , setLatitude] = useState(28.6139);
    const [loading, setLoad] = useState(true);
    const [error, setError] = useState("");
    const [weather,setWeather] = useState(null);
    const [fetchData , setFetchData] = useState(false);

    useEffect(() => {
        async function fetchWeather() {
            try{
                setLoad(true);
                setError("");
                // latitude=12.9716  longitude=77.5946
                const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
                if(!res.ok) throw new Error("Failed to load or check your input");
                const data = await res.json();
                setWeather(data);
                return data;

            }catch(e){
                setError(e.message);
            }finally{
                setLoad(false);
            }
        }

        fetchWeather();
    },[fetchData])

    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
    if (loading) return <p>Loading...</p>;
    // if (data.length === 0) return <p>No posts.</p>;

  return (
    <div className="space-y-4">
      <input
        className="border p-2 "
        type="number"
        placeholder="Enter Latitude"
        onChange={(e) => {
          setLatitude(e.target.value);
        }}
      />
      <input
        className="border p-2"
        type="number"
        placeholder="Enter Longitude"
        onChange={(e) => {
          setLongitude(e.target.value);
        }}
      />
      <br />
      <button
        className="bg-green-500 rounded-3xl p-3"
        onClick={() => setFetchData(prev => !prev)}
      >
        Fetch
      </button>
      {weather && (
        <div>
          <p>{weather.current_weather.time}</p> <br />
          <p>{weather.current_weather.interval} seconds</p> <br />
          <p>{weather.current_weather.temperature}°C</p> <br />
          <p>{weather.current_weather.windspeed}km/h</p> <br />
          <p>{weather.current_weather.winddirection}°</p> <br />
        </div>
      )}
    </div>
  );
}
export default CurrentWeather;
