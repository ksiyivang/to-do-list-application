
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Todos from "./components/Todos";
import Preloader from "./components/Preloader"
import Header from "./components/Header"
import TodoInput from "./components/TodoInput"
import './App.css'

function App() {


  // useState
  const [todos, setTodos] = useState([]);


  // useEffect
  useEffect(() => {
    const getTodos = async () => {
      let res = await axios.get("http://localhost:5001/todos");
      if (res && res) {
        setTodos(res);
      }
    }
    getTodos();
  }, []);


  const createTodo = async (text) => {
    const _res = await axios.post('http://localhost:5001/todo', { message: text });
    let result = await _res?.data ?? ""
    if (result && result) {
      setTodos(result);
    }
    console.log("ALL: ", result)
    console.log("RESPONSE TODOS: ", todos)
  }


  return (
    <div className="App">
      <div className="container">
        <Header />
        <TodoInput createTodo={createTodo} />
        {todos ? <Todos todos={todos} /> : <Preloader />}
      </div>
    </div>
  );
}

export default App;
