import { useState } from "react";
import { Input, Button } from "@nextui-org/react";

export default function InputToDo({ addToDo }) {
  const [newToDo, setNewToDo] = useState("");

  const handleChange = (e) => {
    if (event.target.value.length <= 18) {
      setNewToDo(e.target.value);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
    addToDo(e, newToDo);
    setNewToDo("");
  };

  return (
    <>
      <div className="text-start w-[440px] flex items-center gap-5 border-solid border-2 border-sky-500 p-5 rounded-md ">
        <Input
          type="text"
          label="Tarea"
          labelPlacement={"outside"}
          description={"Ingrese la tarea a realizar"}
          value={newToDo}
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => handleEnter(e)}
        />
        <Button
          color="default"
          variant="ghost"
          className="w-[180px]  text-gray-200 "
          onClick={(e) => handleSubmit(e)}
        >
          Agregar Tarea
        </Button>
      </div>
    </>
  );
}
