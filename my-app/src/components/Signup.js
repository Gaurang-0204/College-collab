import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const signUp = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError(""); // Clear any previous error message
      setLoading(true);

      try {
        // Use `createUserWithEmailAndPassword` to create a new user
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/");
      } catch (error) {
        setError("Failed to create an account: " + error.message);
      }

      setLoading(false);
    }
  }

  return (
    <div>
      <header className="showcase">
        <div className="showcase-content">
          <div className="formm">
            <div className="btn">
              <h4>{error}</h4>
            </div>
            <form>
              <h1>Sign Up</h1>
              <div className="info">
                <input
                  className="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                  className="email"
                  type="password"
                  name="Password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  className="email"
                  type="password"
                  name="Password"
                  placeholder="Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                
              </div>
              <div className="btn">
                <button
                  disabled={loading}
                  onClick={signUp}
                  className="btn-primary"
                >
                  Sign up
                </button>
              </div>
              <div className="help"></div>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}


