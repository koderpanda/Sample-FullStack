import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    {
      title: "chant",
      desc: "complete 16 rounds",
      id: 1,
    },
    {
      title: "read",
      desc: "read BG",
      id: 2,
    },
  ]);

  return (
    <>
      {todo.map((task) => {
        return <TodoComp title= {task.title} desc={task.desc}/>;
      })}
    </>
  );
}

function TodoComp(props) {
  return<div>
    <br />
    {props.title}
    <br />
    {props.desc}
    <br />
  </div>;
}
export default App;
