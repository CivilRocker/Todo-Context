import React, { createContext, useContext, useState } from "react";

const todoContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? {
              ...prevTodo,
              completed: !prevTodo.completed,
            }
          : prevTodo
      )
    );
  };
  const addTodo = (todo) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        todo,
        completed: false,
      },
    ]);
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? {
              ...prevTodo,
              todo,
            }
          : prevTodo
      )
    );
  };

  const value = {
    todos,
    setTodos,
    addTodo,
    deleteTodo,
    updateTodo,
    toggleComplete,
  };
  return (
    <todoContext.Provider value={value}> {children} </todoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(todoContext);
};
