import ToDoItem from "./ToDoItem";

export default function ToDoList({ ToDos, updateTodo }) {
  if (ToDos.length === 0) {
    return (
      <div className="w-[440px] text-center border-solid border-2 border-sky-500 p-5 rounded-md">
        <span className="text-gray-800/50 dark:text-gray-200/90 p-3 text-md font-bold">
          No hay Tareas
        </span>
      </div>
    );
  }

  return (
    <ul className="w-[440px] border-solid border-2 border-sky-500 p-5 rounded-md">
      {ToDos.map((todo) => (
        <ToDoItem key={todo.id} ToDo={todo} updateTodo={updateTodo} />
      ))}
    </ul>
  );
}
