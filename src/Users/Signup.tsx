import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import { Button } from "react-bootstrap";
import "./index.css";
export default function Signup() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(user);
      navigate("/Kanbas/Account/Profile");
    } catch (err:any) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="signup-form1">
    <h1>Signup</h1>
    {error && <div className="error-message">{error}</div>}
    <div className="input-group1">
      <div className="input-label1">Username:</div>
      <input className="form-control1" value={user.username} onChange={(e) => setUser({...user, username: e.target.value })} />
    </div>
    <div className="input-group1">
      <div className="input-label1">Password:</div>
      <input className="form-control1" value={user.password} onChange={(e) => setUser({...user, password: e.target.value })} />
    </div>
    <Button onClick={signup}>Signup</Button>
  </div>
  
  );
}
