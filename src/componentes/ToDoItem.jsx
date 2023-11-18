import React from "react";
import { Switch } from "@nextui-org/react";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

export default function ToDoItem({ ToDo, index }) {
  const { task, completed, id } = ToDo;

  const [switchState, setSwitchState] = useState(false);

  const handleChange = () => {
    switchState || confetti();
    setSwitchState((prevState) => !prevState);
  };

  return (
    <div
      htmlFor={{ index }}
      className="flex flex-col  gap-2 justify-center  w-[400px] border-gray-200 border-1   "
    >
      <li className=" text-neutral-500 rounded-md flex justify-between items-center  ">
        <span className="text-start text-neutral-500 p-3 text-md font-bold">
          {task}
        </span>
        <div className="flex items-center">
          {" "}
          <Switch
            id={{ index }}
            className="text-neutral-500 mr-2 "
            checked={switchState}
            onChange={handleChange}
          ></Switch>
          <span className="mx-2  text-blue-600 p-3 text-md text-end ">
            {switchState ? "Completado" : "Sin Completar"}
          </span>
        </div>
      </li>
    </div>
  );
}
