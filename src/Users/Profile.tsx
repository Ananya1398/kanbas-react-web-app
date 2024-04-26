import * as client from "./client";
import { useState, useEffect } from "react";
import {  Link, useNavigate } from "react-router-dom";
export default function Profile() {
  const [profile, setProfile] = useState({ username: "", password: "", 
    firstName: "", lastName: "", dob: "", email: "", role: "USER" });
  const navigate = useNavigate();
  const fetchProfile = async () => {
    const account = await client.profile();
    setProfile(account);
  };
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Account/Signin");
  };

  const save = async () => {
    await client.updateUser(profile);
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div className="profile-form1">
    <h1>Profile</h1>
    {profile && (
      <div>
        <div className="input-group1">
          <div className="input-label1">Username:</div>
          <input value={profile.username} onChange={(e) => setProfile({...profile, username: e.target.value })}/>
        </div>
        <div className="input-group1">
          <div className="input-label1">Password:</div>
          <input value={profile.password} onChange={(e) => setProfile({...profile, password: e.target.value })}/>
        </div>
        <div className="input-group1">
          <div className="input-label1">First Name:</div>
          <input value={profile.firstName} onChange={(e) => setProfile({...profile, firstName: e.target.value })}/>
        </div>
        <div className="input-group1">
          <div className="input-label1">Last Name:</div>
          <input value={profile.lastName} onChange={(e) => setProfile({...profile, lastName: e.target.value })}/>
        </div>
        <div className="input-group1">
          <div className="input-label1">Date of Birth:</div>
          <input value={profile.dob} type="date" onChange={(e) => setProfile({...profile, dob: e.target.value })}/>
        </div>
        <div className="input-group1">
          <div className="input-label1">Email:</div>
          <input value={profile.email} onChange={(e) => setProfile({...profile, email: e.target.value })}/>
        </div>
        <div className="input-group1">
          <div className="input-label1">Role:</div>
          <select onChange={(e) => setProfile({...profile, role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
        </div>
      </div>
    )}
    <button onClick={save}>Save</button>
    <button onClick={signout}>Signout</button>
    <Link to="/Kanbas/Account/Admin/Users" className="btn btn-warning w-100">Users</Link>
  </div>
  
    
  );
}

