import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import { Button } from "react-bootstrap";
import * as client from "./client";
import "./index.css";
export default function Signin() {
  const [credentials, setCredentials] = useState<User>({ _id: "",
    username: "", password: "", firstName: "", lastName: "", role: "USER"
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account/Profile");
  };
  const signup = async () => {
    navigate("/Kanbas/Account/Signup");
  };
  return (
<div className="signin-form1">
  <h1>Signin</h1>
  <div className="input-group1">
    <div className="input-label1">Username:</div>
    <input className="form-control1" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value })}/>
  </div>
  <div className="input-group1">
    <div className="input-label1">Password:</div>
    <input className="form-control1" type="password" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value })}/>
  </div>
  <Button onClick={signin}>Signin</Button>
  <div className="signup-link1">
    <p>If you don't have an account, Sign up:</p>
    <Button onClick={signup}>Signup</Button>
  </div>
</div>

  );
}
