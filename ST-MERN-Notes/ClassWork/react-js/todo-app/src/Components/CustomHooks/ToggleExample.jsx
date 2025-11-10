import React from "react";
import { useToggle } from "../../Hooks/useToggle";

function ToggleExample() {
  const [show, toggleShow] = useToggle(false);

  return (
    <div>
      <button onClick={toggleShow}>
        {show ? "Hide" : "Show"} Message
      </button>

      {show && <p>This is visible now!</p>}
    </div>
  );
}

export default ToggleExample;
