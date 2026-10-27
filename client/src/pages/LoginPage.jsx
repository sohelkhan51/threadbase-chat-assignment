import { useState } from "react";
import { useAuth } from "../auth/AuthContext.jsx";

export default function LoginPage() {
  const { login } = useAuth();
  const [error, setError] = useState("");

  async function loginAs(email) {
    try {
      await login(email, "password");
    } catch {
      setError("Login failed. Is the server running?");
    }
  }

  return (
    <div className="login">
      <h1>Threadbase Live Chat</h1>
      <p>Log in as one user here, then open a second browser window and log in as the other. Chat between them.</p>
      <div className="login-buttons">
        <button onClick={() => loginAs("ada@threadbase.dev")}>Log in as Ada</button>
        <button onClick={() => loginAs("linus@threadbase.dev")}>Log in as Linus</button>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
