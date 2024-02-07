import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/todo/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Todo List</h1>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
