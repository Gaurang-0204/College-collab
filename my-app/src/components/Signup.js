import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/");
      } catch (error) {
        setError("Failed to create an account: " + error.message);
      }

      setLoading(false);
    }
  };

  return (
    <div>
      <h4>{error}</h4>
      <input
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        placeholder="Enter your password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <input
        placeholder="Confirm your password"
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br />
      <button disabled={loading} onClick={signUp}>
        Sign up
      </button>
    </div>
  );
};
