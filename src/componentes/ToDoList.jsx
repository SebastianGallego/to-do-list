import ToDoItem from "./ToDoItem";

export default function ToDoList({ ToDos }) {
  return (
    <ul className="w-[440px] border-solid border-2 border-sky-500 p-5 rounded-md">
      {ToDos.map((t) => (
        <ToDoItem key={t.id} ToDo={t} />
      ))}
    </ul>
  );
}
