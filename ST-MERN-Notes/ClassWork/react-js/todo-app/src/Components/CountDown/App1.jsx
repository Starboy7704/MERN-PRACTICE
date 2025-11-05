import { useEffect, useState } from "react";

function App1() {
  const [timer, setTimer] = useState(0);
  const [timercount, setTimerCount] = useState(timer);
  const [timerchange, setTimerchange] = useState(false);
//input setvalue
  function handletimerchange(event){
    console.log("input value handletimerchnage function called!");
    const val = (event.target.value);
    if (!event.target.value) {
      setTimer(0);
      return ;
    }
    setTimer(val);
  }
  //button
  function handleTimerStart() {
    console.log("button handleTimerStart function called");
    if (timer <= 0) {
      alert("Enter positive number to start Timer!");
      return;
    }
    setTimerCount(timer);
    setTimerchange(true);
  }
  //decrease count
  // useEffect(()=>{
  //   if(!timerchange){
  //       setTimerchange(false);
  //       return;
  //     }
  //       console.log("inside the use effect")
  //       const interval = setInterval(() => {
  //       setTimerCount((prev)=>{
  //         if(prev<=1){
  //           console.log(timercount);
  //           clearInterval(interval);
  //           return 0;
  //         }
  //         return prev-1;
  //       });
  //       }, 1000);
  // },[timercount]);

  useEffect(() => {
    if (!timerchange) return;
    const interval = setInterval(() => {
      setTimerCount((prev) => {
        if (prev <= 1) {
          setTimerchange(false);
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
   
  }, [timerchange]);

  
  return (
    <div >
      <form className="border-2 flex flex-col justify-center items-center w-100 h-50 gap-2">
        <div>
          <label htmlFor="counter">Enter the Timer:</label>
          <input
            className="border-2 "
            onChange={(event) => handletimerchange(event)}
            id="counter"
            type="Number"
            value={timer}
          />
        </div>
        <div>
          <button type="button" onClick={handleTimerStart} className="border-2">
            Start
          </button>
        </div>
        <p>Time Left:{timercount}</p>
      </form>
    </div>
  );
}
export default App1;