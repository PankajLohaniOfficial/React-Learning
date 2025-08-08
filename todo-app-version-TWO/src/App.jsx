import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/08/2025",
    },
    {
      name: "Go to Collage",
      dueDate: "4/08/2025",
    },
  ];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div className="items-container">
        <TodoItem todoDate="4/08/2025" todoName="Buy Milk"></TodoItem>
        <TodoItem todoDate="4/08/2025" todoName="Go to College"></TodoItem>
      </div>
    </center>
  );
}

export default App;
