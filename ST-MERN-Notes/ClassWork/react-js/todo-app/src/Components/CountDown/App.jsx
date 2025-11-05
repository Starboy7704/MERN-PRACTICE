import { useEffect, useState } from "react";

function App() {
  const [timerCountInput, setTimerCountInput] = useState(0);
  const [hasTimerStarted, setHasTimerStarted] = useState(false);
  const [timerCount, setTimerCount] = useState(timerCountInput);

  const handleTimerCountChange = (event) => {
    console.log("function called!");
    if (event.target.value < 0) {
      setTimerCountInput(0);
      return 0;
    }
    setTimerCountInput(event.target.value);
  };

  const handeleStartTimer = () => {
    if (timerCountInput <= 0) {
      alert("Enter positive number and greater than 0");
      return;
    }
    setHasTimerStarted(true);
    setTimerCount(timerCountInput);
  }

  const handlePauseTimer = () =>{
    if(!hasTimerStarted){
        setHasTimerStarted(true);
    }
    else{
        setHasTimerStarted(false);
    }
  }
  useEffect(()=>{
    if(hasTimerStarted){
        setHasTimerStarted(false);
        const interval = setInterval(()=>{
            setTimerCount((previousTimerCount) =>{
                if(previousTimerCount <=0){
                    console.log(timerCount);
                    clearInterval(interval);
                    return 0;
                }
                return previousTimerCount - 1
            })
        },1000)
    }
  },[timerCount])


  return (
    <div className="h-screen flex flex-col gap-3 items-center justify-center">
      <form className="bg-red-300 rounded-lg p-3">
        <div className="flex flex-col gap-2 items-start">
          <label htmlFor="counter">Enter the Timer:</label>
          <input
            className="bg-white"
            id="counter"
            type="number"
            onChange={(event) => handleTimerCountChange(event)}
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="bg-green-500 text-white p-2"
            onClick={handeleStartTimer}>
            start
          </button>
          <button type="button"
          className="bg-orange-500 text-white p-2"
          onClick={handlePauseTimer}>
            Pause
          </button>
        </div>
      </form>

      <div>
        <p>Time left: {timerCount}</p>
      </div>
    </div>
  );
}

export default App;
