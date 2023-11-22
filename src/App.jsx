import InputToDo from "./componentes/ToDoInput.jsx";
import Header from "./componentes/Header.jsx";
import ToDoList from "./componentes/ToDoList.jsx";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import ListManagement from "./componentes/ListManagement.jsx";

const initialStateToDos = JSON.parse(localStorage.getItem("ToDos")) || [];
function App() {
  const [ToDos, setToDos] = useState(initialStateToDos);

  useEffect(() => {
    localStorage.setItem("ToDos", JSON.stringify(ToDos));
  }, [ToDos]);

  const handleSubmit = (e, ToDo) => {
    if (ToDo.trim() !== "") {
      const newToDo = {
        id: crypto.randomUUID(),
        task: ToDo,
        completed: false,
      };
      return setToDos([...ToDos, newToDo]);
    }
    Swal.fire("Debe ingresar una tarea");
  };

  const updateTodo = (id) => {
    const TodoUpdated = ToDos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setToDos(TodoUpdated);
  };

  //Terminar  filtrado (Completados, SinCompletar, Todos)
  const [filter, setFilter] = useState("todos");

  const selectFilter = (filter) => setFilter(filter);

  const filteredTodos = () => {
    switch (filter) {
      case "todos":
        return ToDos;
      case "sinCompletar":
        return ToDos.filter((todo) => !todo.completed);
      case "completados":
        return ToDos.filter((todo) => todo.completed);
      default:
        return ToDos;
    }
  };

  return (
    <>
      <div className="dark:bg-neutral-900 bg-gray-100   lg:text-right  h-screen w-screen flex flex-col items-center gap-5 text-center">
        <Header />
        <InputToDo addToDo={handleSubmit} />
        <ToDoList updateTodo={updateTodo} ToDos={filteredTodos()} />
        <ListManagement
          ToDos={ToDos}
          setToDos={setToDos}
          selectFilter={selectFilter}
        />
      </div>
    </>
  );
}

export default App;
