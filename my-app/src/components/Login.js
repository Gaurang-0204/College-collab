// Import the necessary libraries and modules
import React, { useState, } from "react";
import { Link } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import "./Login.css"

// Import statements and other code...

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Implement your login logic here
  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      console.log("Attempting Google Sign-In...");
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google Sign-In Success:", user);
    } catch (err) {
      console.error("Google Sign-In Error:", err.message, err.code);
    }
  };
  
  

   ; // Make sure to import `useEffect` from React

  // ... rest of the code ...

  // Add this code to handle the redirect result
   // Make sure to import `useEffect` from React
  

  

  return (
    <div id="root">
      <header className="showcase">
        <div className="showcase-content">
          <div className="formm">
            <form>
              <h1>Sign In</h1>
              <div className="info">
                <input
                  className="email"
                  type="email"
                  name="email"
                  placeholder="Email or phone number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                  className="email"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="btn">
                <button onClick={signIn} className="btn-primary">
                  Sign In
                </button>
              </div>
              <div className="btn">
                <button onClick={signInWithGoogle} className="btn-primary">
                  Sign In with Google
                </button>
              </div>
            </form>
          </div>
          <div className="signup">
            <p>New to College Collab</p>
            <Link to="/Signup">Sign up now</Link>
          </div>
        </div>
      </header>
    </div>
  );
}

