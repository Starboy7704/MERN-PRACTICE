import { useState } from "react";
import Details from "./Details";
import Extra from "./Extra";
import ShowMap from "./ShowMap";

function ToggleExample() {

  function ButtonOn(){
    return(
      <>
        <p>Information</p>
        <img src="https://imgs.search.brave.com/QvdnVZ1n7Eek10HpB053CKdpVkLrZpDw8QfPWNDyxCI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmNo/emJnci5jb20vdGh1/bWI4MDAvMjAxMTgy/NzcvaEU3NjUwMEQz/L3dlaXJkLW1lbWVz/LXdlaXJkLXBpY3Mt/ZnVubnktdHdlZXRz/LXdlaXJkLXR3aXR0/ZXItcmFuZG9tLXR3/ZWV0cy1mdW5ueS13/ZWlyZC1mdW5ueS1t/ZW1lLWZ1bm55LXR1/bWJscg" alt="meme" />
      </>
    )
  }
  // hold a boolean that decides if details should show
  const [show, setShow] = useState(false);
  const [showExtra,setShowExtra] = useState(false);

  return (
    <div>
      {/* toggle show between true/false */}
      <button onClick={() => setShow(s => !s)} className="font-bold">
        {/* the button label also depends on show */}
        {/* {show ? "Hide" : "Show"} Details */}
        <ShowMap show={show}/>
        Details
      </button>

      {/* if show is true, render the paragraph; otherwise render nothing */}
      {show && <ButtonOn/>}
      {show && <Details/>}
      <br />
      <button onClick={() => setShowExtra(e=>!e)} className="font-bold">
        {showExtra ? "Hide " : "show "}Extra Details
      </button>
      {showExtra && <Extra/>}
    </div>
  );
}

export default ToggleExample;