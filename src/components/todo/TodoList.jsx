import React, { useState } from "react";
import { useTodo } from "../context/todoContext";
import Todo from "./Todo";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const { todos, setTodos, addTodo } =
    useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo == "") {
      addTodo(todo);
      setTodo("");
    }
  };
  console.log(todos);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo-input">Todo Tasks :</label>
        <input
          type="text"
          className="todo-input"
          placeholder="Add Todo Task here..."
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          style={{border:"2px solid black",color:"black"}}
        />
        <button type="submit" style={{background:"green",padding:"5px",marginLeft:"10px"}}>Add Todo</button>
      </form>
      <div>
        {todos && todos.map((item,i) => <Todo key={item.id} todo={item} index={i} />)}
      </div>
    </div>
  );
};

export default TodoList;
