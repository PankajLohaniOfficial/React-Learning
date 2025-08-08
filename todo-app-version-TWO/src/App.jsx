import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";

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
    {
      name: "Subscribe Channel",
      dueDate: "Right Now",
    },
  ];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}> </TodoItems>
    </center>
  );
}

export default App;
