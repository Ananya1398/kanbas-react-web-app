import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithArrays() {
  const API_BASE = process.env.REACT_APP_API_BASE;
  const [errorMessage, setErrorMessage] = useState(null);
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  const API = `${API_BASE}/a5/todos`;
  const [todos, setTodos] = useState<any[]>([]);
  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };

  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };

  const updateTodo = async () => {
    try{
    const response = await axios.put(`${API}/${todo.id}`, todo);
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  } catch (error: any) {
    console.log(error);
    setErrorMessage(error.response.data.message);
  }

  };

  
  useEffect(() => {
    fetchTodos();
  }, []);
  const removeTodo = async (todo:any) => {
    const response = await axios
      .get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };
  const fetchTodoById = async (id:any) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };

  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };
  const deleteTodo = async (todo:any) => {
    try{
    const response = await axios.delete(`${API}/${todo.id}`);
    setTodos(todos.filter((t) => t.id !== todo.id));
  } catch (error: any) {
    console.log(error);
    setErrorMessage(error.response.data.message);
  }

  };

    return (
      <div>
              {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}
      <h2>Working with Arrays</h2>
      <input value={todo.id} readOnly />
      <input onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        value={todo.title} type="text" />
      <textarea value={todo.description} 
        onChange={(e) => setTodo({ ...todo,
          description: e.target.value })} />
      <input value={todo.due} type="date"
        onChange={(e) => setTodo({
          ...todo, due: e.target.value })} />
      <label>
        <input type="checkbox"
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked })} />
        Completed
      </label>
      <button onClick={postTodo}> Post Todo </button>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <input checked={todo.completed}
              type="checkbox" readOnly />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
            <button onClick={() => fetchTodoById(todo.id)} >
              Edit
            </button>
            <button onClick={() => removeTodo(todo)} >
              Remove </button>
          </li>
        ))}
      
      </ul>
        <input type="number" value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.valueAsNumber })}/>
      <input type="text" value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })}/>
      <h3>Updating an Item in an Array</h3>
      <a className="btn btn-primary" href={`${API}/${todo.id}/title/${todo.title}`} >
        Update Title to {todo.title}
      </a>
        <h4>Retrieving Arrays</h4>
        <a className="btn btn-primary" href={API}>
          Get Todos
        </a>
        <h4>Retrieving an Item from an Array by ID</h4>
      <input value={todo.id}
        onChange={(e) => setTodo({ ...todo,
          id: e.target.valueAsNumber })}/>
      <a className="btn btn-primary" href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <h3>Filtering Array Items</h3>
  <a className="btn btn-primary" href={`${API}?completed=true`}>
    Get Completed Todos
  </a>
  <h3>Creating new Items in an Array</h3>
  <a className="btn btn-primary" href={`${API}/create`}>
    Create Todo
  </a>
  <h3>Deleting from an Array</h3>
      <a className="btn btn-primary" href={`${API}/${todo.id}/delete`}>
        Delete Todo with ID = {todo.id}
      </a>
      <h3>Editing an Array</h3>
      <a className="btn btn-primary" href={`${API}/${todo.id}/completed/${todo.completed}`} >
        Update Todo Completed Property
      </a> &nbsp;
        <input type="checkbox" checked={todo.completed}
       onChange={(e) => setTodo({ ...todo, completed: e.target.checked})}/>

      <h3>Updating Todo Description</h3>
      <input type="text" value={todo.description}
        onChange={(e) => setTodo({
          ...todo, description: e.target.value })}/>
                <a className="btn btn-primary" href={`${API}/${todo.id}/description/${todo.description}`} >
        Update Description of {todo.title}
      </a>
      <button onClick={() => deleteTodo(todo)}
    className="btn btn-danger float-end ms-2">
    Delete
  </button>
  <button onClick={updateTodo}>
        Update Todo
      </button>
      

      </div>
    );
  }
  export default WorkingWithArrays;