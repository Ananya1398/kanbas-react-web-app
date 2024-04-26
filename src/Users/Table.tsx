import React, { useState, useEffect } from "react";
import {BsFillCheckCircleFill, BsPencil,  BsTrash3Fill, BsPlusCircleFill } from "react-icons/bs";
import * as client from "./client";
import { User } from "./client";

export default function UserTable() {
    const [role, setRole] = useState("USER");
    const fetchUsersByRole = async (role: string) => {
      const users = await client.findUsersByRole(role);
      setRole(role);
      setUsers(users);
    };
  
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  
  const deleteUser = async (user: User) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };
  const selectUser = async (user: User) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) =>
        (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };


  const [user, setUser] = useState<User>({
    _id: "", username: "", password: "", firstName: "",
    lastName: "", role: "USER" });

  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err:any) {
      setError(err.response.data.message);
    }
  };

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => { fetchUsers(); }, []);
  return (
    <div>
              <select
        onChange={(e) => fetchUsersByRole(e.target.value)}
        value={role || "USER"}
        className="form-control w-25 float-end"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <h1>User Table</h1>
      {error && <div>{error}</div>}
      <table className="table">
        <thead>
        <tr className="user-row">
  <td>
    <div className="input-group1">
      <div className="input-label1">Username:</div>
      <input value={user.username} onChange={(e) => setUser({...user, username: e.target.value })}/>
    </div>
    </td>
    <td>
    <div className="input-group1">
      <div className="input-label1">Password:</div>
      <input value={user.password} onChange={(e) => setUser({...user, password: e.target.value })}/>
    </div>
  </td>
  <td>
    <div className="input-group1">
      <div className="input-label1">First Name:</div>
      <input value={user.firstName} onChange={(e) => setUser({...user, firstName: e.target.value })}/>
    </div>
  </td>
  <td>
    <div className="input-group1">
      <div className="input-label1">Last Name:</div>
      <input value={user.lastName} onChange={(e) => setUser({...user, lastName: e.target.value })}/>
    </div>
  </td>
  <td>
    <div className="input-group1">
      <div className="input-label1">Role:</div>
      <select value={user.role} onChange={(e) => setUser({...user, role: e.target.value })}>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
    </div>
  </td>
  <td>
    <BsFillCheckCircleFill onClick={updateUser} className="icon-btn success-icon"/>
    <BsPlusCircleFill onClick={createUser} className="icon-btn"/>
  </td>
</tr>

        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>
                <button onClick={() => deleteUser(user)}>
                  <BsTrash3Fill />
                </button>
                <button className="btn btn-warning me-2">
      <BsPencil onClick={() => selectUser(user)} />
    </button>
              </td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}