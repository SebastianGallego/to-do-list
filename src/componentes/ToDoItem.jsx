import React from "react";
import IconCheck from "./IconCheck";

export default function ToDoItem({ ToDo, updateTodo }) {
  const { task, completed, id } = ToDo;

  return (
    <div className="flex flex-col  gap-2 justify-center  w-[400px] border-gray-200 border-1   ">
      <li className="  rounded-md flex justify-between items-center mx-5 ">
        <span className="text-start text-gray-800 dark:text-gray-200/90 p-3 text-md font-bold">
          {task}
        </span>

        <button
          className={`h-5 w-5 flex-none rounded-full border-2 ${
            completed ? "grid place-items-center bg-green-500" : "inline-block"
          }`}
          onClick={() => updateTodo(id)}
        >
          {completed && <IconCheck />}
        </button>
      </li>
    </div>
  );
}
