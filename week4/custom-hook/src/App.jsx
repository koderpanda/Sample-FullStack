import React from "react";

function useTodo() {
  const [todos, setTodos] = React.useState([]);

  //React useeffect can be used to call the initial values from the backend- will execute only once and hence the code inside is gaurded from reexecution in case of rerenders
  React.useEffect(() => {
    //fetch the inicial todo values from the server
    fetch("http://localhost:3000/todo/", {
      method: "GET",
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setTodos(data);
        console.log("todolist is  " + JSON.stringify(todos));
      });
      // console.log(JSON.stringify(data))})
    });
  }, []);
  return todos;
}

function App() {
  const todos= useTodo();
  return (
    <div>
      {todos.map((todo) => {
        return <Todocomp title={todo.task} desc={todo.details}></Todocomp>;
      })}
    </div>
  );
}

function Todocomp(props) {
  return (
    <div>
      {props.title}
      <br />
      {props.desc}
      <br />
      <br />
    </div>
  );
}

export default App;
