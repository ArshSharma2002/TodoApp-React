import "./App.css";
import Header from "./myComponents/Header";
import { Footer } from "./myComponents/Footer";
// import { TodoItem } from './myComponents/TodoItem';
import { Todos } from "./myComponents/Todos";
// import { About } from "./myComponents/About";
import { AddTodo } from "./myComponents/AddTodo";
import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("this is onDelete for", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (Title, Desc) => {
    console.log("adding a todo", Title, Desc);
    let srno;
    if (todos.length === 0) {
      srno = 0;
    } else {
      srno = todos[todos.length - 1].srno + 1;
    }
    const myTodo = {
      srno: srno,
      Title: Title,
      Desc: Desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="myTodosList" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
