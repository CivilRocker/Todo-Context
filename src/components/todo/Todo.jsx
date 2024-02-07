import React, { useState } from "react";
import { useTodo } from "../context/todoContext";

const Todo = ({ todo, index }) => {
  const [update, setUpdate] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [updateMSg, setUpdateMSg] = useState("");
  const { deleteTodo, updateTodo, toggleComplete } = useTodo();

  const handleUpdate = () => {
    setIsEditable(!isEditable);
    updateTodo(todo.id, updateMSg);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <p>
        <span>{index + 1}</span>
      </p>
      {isEditable ? (
        <input
          type="text"
          value={updateMSg}
          onChange={(e) => setUpdateMSg(e.target.value)}
        />
      ) : (
        <h4>{todo.todo}</h4>
      )}
      <input type="checkbox" checked={todo.completed} onChange={()=>toggleComplete(todo.id)} />
      <button onClick={() => handleUpdate(todo.id, update)}>Update</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;
