import { useState } from "react";

function LoginGate() {
  // tracks if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        // if logged in → show a welcome message
        <>
          <p>Welcome back.</p>
          <button onClick={() => setIsLoggedIn(false)} className="font-bold ">
            LogOut
          </button>
        </>
      ) : (
        // else → show the login button that flips the state
        <>
          <button onClick={() => setIsLoggedIn(true)} className="font-bold ">
            Login
          </button>
          <br />
          <input type="checkbox" />
          Remember Me.
        </>
      )}
    </div>
  );
}
export default LoginGate;
