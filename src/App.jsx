import confetti from "canvas-confetti";
import InputToDo from "./componentes/InputToDo.jsx";
import Header from "./componentes/Header.jsx";
import ToDoList from "./componentes/ToDoList.jsx";
import { useState, useEffect } from "react";

function App() {
  const [ToDos, setToDos] = useState([]);

  useEffect(() => {
    //Grabar en LS cada vez que cambie ToDos
  }, [ToDos]);

  const handleSubmit = (event, ToDo) => {
    if (ToDo.trim() !== "") {
      const newToDo = {
        id: crypto.randomUUID(),
        task: ToDo,
        completed: false,
      };
      return setToDos([...ToDos, newToDo]);
    }
    // TODO manejar el error
    window.alert("no hay tarea");
  };

  return (
    <>
      <div className="bg-neutral-900 lg:text-right  h-screen w-screen flex flex-col items-center gap-5 text-center">
        <Header />
        <InputToDo addToDo={handleSubmit} />
        <ToDoList ToDos={ToDos} />
      </div>
    </>
  );
}

export default App;
